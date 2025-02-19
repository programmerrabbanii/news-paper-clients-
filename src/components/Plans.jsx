import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Free Plan",
      price: "$0/month",
      perks: ["Basic Support", "Limited Access", "Ads Included"],
      
    },
    {
      title: "Premium Plan",
      price: "$9.99/month",
      perks: ["24/7 Support", "Unlimited Access", "No Ads"],
      buttonText: "Upgrade Now",
    },
  ];

  return (
    <div className=" w-11/12 mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((plan, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-lg bg-white">
            <h3 className="text-2xl font-semibold">{plan.title}</h3>
            <p className="text-lg font-bold text-gray-600">{plan.price}</p>
            <ul className="mt-4 space-y-2">
              {plan.perks.map((perk, i) => (
                <li key={i} className="flex items-center">
                  ✅ <span className="ml-2">{perk}</span>
                </li>
              ))}
            </ul>
            {
              plan.buttonText && (<button
                onClick={() => navigate("/subscription")}
                className="mt-4 w-full bg-[#3C00E7] text-white py-2 rounded-lg transition"
              >
                {plan.buttonText}
              </button>)
            }
          </div> 
        ))}
      </div>
    </div>
  );
};

export default Plans;
