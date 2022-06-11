import { LinkError } from "apollo-link/lib/linkUtils";

export const getCartCounts = (cart: any) => {
  if (!cart || !cart.data) return {};
  const res: any = {}
  cart.data.cart.lines.edges.forEach((li: any) => {
    res[li.node.merchandise.id] = li.node.quantity
  });

  return res;
}

export const merchandiseIdToLineItemId = (cart: any, merchandiseId: string) => {
  if (!cart) return null;
  console.log(cart)
  const lineItem = cart.cart.lines.edges.find((li: any) => li.node.merchandise.id === merchandiseId);

  return lineItem.node.id;
}
