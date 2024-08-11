export const getProducts = async ({ size }) => {
  let response;
  if (size === "all")
    response = await fetch("https://fakestoreapi.com/products?limit=3");

  if (size === "few")
    response = await fetch("https://fakestoreapi.com/products?limit=6");

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Unable to fetch products");
  }

  return data;
};
