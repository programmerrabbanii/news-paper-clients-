import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const { data: isAdmin, isPending } = useQuery({
    queryKey: ["isAdmin", axios, user?.email],
    queryFn: async () => {
      if (user) {
        const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`);
        const data = await res?.data;
        if (data) {
          return data?.isAdmin;
        }
      }
    },
  });

  return [isAdmin, isPending];
};

export default useAdmin;
