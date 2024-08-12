import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export const useProducts = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // // FILTER
  // const filterValue = searchParams.get("status");
  // const filter =
  //   !filterValue || filterValue === "all"
  //     ? null
  //     : { field: "status", value: filterValue };
  // // { field: "totalPrice", value: 5000, method: "gte" };

  // SORT
  // const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  // const [field, direction] = sortByRaw.split("-");
  // const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: products, count } = {},
    error,
  } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts({ page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["products", page + 1],
      queryFn: () => getProducts({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["products", page - 1],
      queryFn: () => getProducts({ page: page - 1 }),
    });

  return { isLoading, error, products, count };
};
