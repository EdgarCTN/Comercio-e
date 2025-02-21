// Inicializamos el contador del carrito
let cartCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  const cartCountElement = document.getElementById('cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  // Agregamos el evento click a cada botón de "Agregar al carrito"
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      cartCountElement.textContent = cartCount;
      // Puedes agregar más lógica aquí para gestionar el carrito de compras
      alert('Producto agregado al carrito');
    });
  });
});
