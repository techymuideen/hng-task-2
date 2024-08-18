import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyOtp as verifyOtpApi } from "../../services/apiAuth";
import { retryOtp as retryOtpApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useVerifyOtp = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: verifyOtp, isPending: isLoading } = useMutation({
    mutationFn: ({ email, token }) => verifyOtpApi({ email, token }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
      localStorage.removeItem("email");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { verifyOtp, isLoading };
};

export const useRetryOtp = () => {
  const { mutate: retryOtp, isPending: isLoading } = useMutation({
    mutationFn: ({ email }) => retryOtpApi({ email }),
    onSuccess: () => {
      toast.success("New OTP has been sent!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { retryOtp, isLoading };
};
