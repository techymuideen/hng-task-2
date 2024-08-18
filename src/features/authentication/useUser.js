import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export const useUser = () => {
  const { data: user, isPending: isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    user,
    id: user?.id,
    isLoading,
    isAuthenticated: user?.role === "authenticated",
    email: user?.email,
  };
};
