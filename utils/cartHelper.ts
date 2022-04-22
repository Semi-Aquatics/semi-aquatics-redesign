import { LinkError } from "apollo-link/lib/linkUtils";

export const getOrderedCart = (cart: any, item: any) => {
  if (!cart || !cart.data) return [{}];
  console.log(cart)
  const items: any = []
  cart.data.cart.lines.edges.forEach((li: any) => {
    items.push({id: li.node.id, quantity: li.node.quantity})
  });
  return items
}
