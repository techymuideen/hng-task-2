import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: logout,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      // Clear user-specific queries (like cart and user profile)
      queryClient.removeQueries(["cart"]);
      queryClient.removeQueries(["user"]);
      queryClient.removeQueries();

      // Optionally clear local storage or session storage
      localStorage.removeItem("cart");

      // Redirect to login after successful logout
      navigate("/login", { replace: true });
    },

    onError: (error) => {
      // Handle error (optional)
      console.error("Logout failed: ", error);
    },
  });

  return { logout, isLoading, isError, error };
};
