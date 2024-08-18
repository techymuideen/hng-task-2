import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useSignup = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: ({ fullName, password, email, role, country, state, city }) =>
      signupApi({ fullName, password, email, role, country, state, city }),

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user?.user);
      navigate("/otp", { replace: true });
      console.log(user.user);

      localStorage.setItem("email", user?.user.email);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signup, isLoading };
};
