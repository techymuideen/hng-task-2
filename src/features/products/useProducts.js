import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";

export const useProducts = ({ size }) => {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts({ size }),
  });

  return { isLoading, error, products };
};
