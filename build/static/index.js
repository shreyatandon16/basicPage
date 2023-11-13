
const cartItems = [];
// eslint-disable-next-line no-unused-vars
function addToCart(itemId) {
  const cartItemIndex = cartItems.findIndex((item) => item.id === itemId);

  if (cartItemIndex === -1) {
    cartItems.push({
      id: itemId,
      quantity: 1,
    });
  } else {
    cartItems[cartItemIndex].quantity++;
  }

  alert("Item added to cart");

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  console.log("Cart items:", cartItems);
  console.log("Total quantity:", totalQuantity);
}
