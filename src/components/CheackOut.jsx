import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";

const CheackOut = ({ totalPayment }) => {
    console.log(totalPayment);
  const [errMsg, setErrMsg] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  console.log(clientSecret);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(`http://localhost:5000/create-payment-intent`, {
          price: totalPayment,
        });
        const data = await res?.data?.clientSecret;
        setClientSecret(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [axios, totalPayment]);

  // handleSubmit for pay money
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrMsg("");

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    if (card == null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrMsg(error?.message);
       console.error("[Error]", error);
    } else {
      console.log("[Payment method]", paymentMethod);
    }



    // confirm payment
    const { paymentIntent, error: confirmCardPaymentError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                name: user?.displayName || "anonymous",
                email: user?.email || "anonymous"
            }
        }
    })



    if (confirmCardPaymentError) {
         console.error("[Confirm card payment error]:", confirmCardPaymentError);
        Swal.fire({
            title: "Oops!",
            text: "There is a problem. Try again.",
            icon: "error"
        });
    }else{
         console.log("[Confirm card payment intent]:", paymentIntent);
         if(paymentIntent?.status === 'succeeded'){
            Swal.fire({
                title: "Congratulations 🎉",
                text: `${user?.displayName} become GOLD badge user`,
                icon: "success"
            });

            // user payment info
            const userPaymentInfo = {
                userName: user?.displayName,
                userEmail: user?.email,
                amount: totalPayment,
                currency: "usd",
                paymentDate: moment().format('YYYY-MM-DD'),
                    transactionId: paymentIntent?.id
                };

                const postPaymentInfo = async() => {
                    try{
                        const res = await axios.post(`http://localhost:5000/payments?email=${user?.email}`, userPaymentInfo);
                        const data = await res?.data;
                        console.log('Payment info set to the db:', data);
                    }catch(err){
                        console.error(err);
                    }
                };
                postPaymentInfo();

         }

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {errMsg ? (
        <p className="mt-3 text-sm text-red-600 ms-1">** {errMsg}</p>
      ) : undefined}
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="btn btn-active btn-primary"
      >
        Pay
      </button>
    </form>
  );
};

export default CheackOut;
