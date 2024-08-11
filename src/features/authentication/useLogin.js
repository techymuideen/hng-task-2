// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { login as loginApi } from "../../services/apiAuth";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export const useLogin = ({ role }) => {
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();

//   const { mutate: login, isPending: isLoading } = useMutation({
//     mutationFn: ({ email, password }) => loginApi({ email, password }),
//     onSuccess: (user) => {
//       queryClient.setQueryData(["user"], user.user);
//       if (role === "admin") {
//         navigate("/admin/dashboard", { replace: true });
//       } else {
//         navigate("/home", { replace: true });
//       }
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   return { login, isLoading };
// };
