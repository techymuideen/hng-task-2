import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import { useUser } from "../authentication/useUser";

export const useCart = () => {
  const { id } = useUser();

  const {
    isLoading,
    data: cart,
    error,
  } = useQuery({
    queryKey: ["cart", id],
    queryFn: () => getCart(id),
    enabled: !!id,
  });

  return { isLoading, error, cart };
};
