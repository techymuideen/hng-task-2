import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCart as updateCartApi } from "../../services/apiCart";

export const useUpdateCart = () => {
  const queryClient = useQueryClient();

  const { mutate: updateCart, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, newCartData }) => updateCartApi(id, newCartData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateCart };
};
