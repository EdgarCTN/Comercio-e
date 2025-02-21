document.addEventListener('DOMContentLoaded', () => {
  // Array de productos (puede reemplazarse con datos obtenidos de una API o archivo JSON)
  const products = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción breve del producto 1.",
      price: 10.00,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción breve del producto 2.",
      price: 20.00,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripción breve del producto 3.",
      price: 30.00,
      image: "https://via.placeholder.com/150"
    }
  ];

  // Elementos del DOM
  const productList = document.getElementById('product-list');
  const cartCountElement = document.getElementById('cart-count');
  const toastElement = document.getElementById('toast');

  // Inicializar el contador del carrito usando localStorage para persistencia
  let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
  cartCountElement.textContent = cartCount;

  // Función para renderizar los productos en la página
  function renderProducts() {
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">Agregar al carrito</button>
      `;
      productList.appendChild(productDiv);
    });
  }

  renderProducts();

  // Función para mostrar notificaciones "toast"
  function showToast(message) {
    toastElement.textContent = message;
    toastElement.classList.add('show');
    setTimeout(() => {
      toastElement.classList.remove('show');
    }, 3000);
  }

  // Delegación de eventos para gestionar los clics en "Agregar al carrito"
  productList.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart')) {
      // Aquí se puede agregar la lógica para manejar el producto según su id:
      const productId = event.target.getAttribute('data-id');
      
      // Actualizar el contador del carrito y guardarlo en localStorage
      cartCount++;
      cartCountElement.textContent = cartCount;
      localStorage.setItem('cartCount', cartCount);

      // Mostrar notificación sin interrumpir la experiencia del usuario
      showToast("Producto agregado al carrito");
    }
  });
});
