import supabase from "./supabase";

export async function updateCart(id, jsonData) {
  if (!id) {
    throw new Error("User ID is required to update the cart");
  }

  const defaultCart = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
  };

  const finalCartData = jsonData || defaultCart; // Use defaultCart if jsonData is empty

  const { data, error } = await supabase
    .from("cart")
    .upsert(
      { user_id: id, cart: finalCartData },
      { onConflict: ["user_id"] }, // Specifies that the conflict is on 'user_id'
    )
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Cart could not be updated");
  }
  return data;
}

export async function getCart(id) {
  // Return early if the user ID is invalid
  if (!id) {
    throw new Error("User ID is required to fetch the cart");
  }

  const { data, error } = await supabase
    .from("cart")
    .select("cart")
    .eq("user_id", id);

  if (error) {
    console.error(error);
    throw new Error("Cart could not be fetched");
  }
  return data;
}
