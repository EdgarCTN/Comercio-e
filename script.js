document.addEventListener('DOMContentLoaded', () => {
  // Simulación de datos de productos (podría venir de un JSON o API)
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción breve del producto 1.',
      price: 10.00,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción breve del producto 2.',
      price: 20.00,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción breve del producto 3.',
      price: 30.00,
      image: 'https://via.placeholder.com/150'
    }
  ];

  const productList = document.querySelector('.product-list');

  // Función para cargar dinámicamente los productos en la página
  function loadProducts() {
    products.forEach(product => {
      const article = document.createElement('article');
      article.classList.add('product');
      article.setAttribute('data-id', product.id);

      article.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" aria-label="Agregar ${product.name} al carrito">Agregar al carrito</button>
      `;
      productList.appendChild(article);
    });
  }

  // Cargar productos
  loadProducts();

  // Inicializar contador del carrito usando localStorage para persistencia
  let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cartCount;

  // Función para mostrar notificaciones tipo Toast
  function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    toastContainer.appendChild(toast);

    // Eliminar el toast luego de 3 segundos (tiempo total de la animación)
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Delegación de eventos para manejar clicks en botones "Agregar al carrito"
  productList.addEventListener('click', (e) => {
    if (e.target && e.target.matches('.add-to-cart')) {
      cartCount++;
      cartCountElement.textContent = cartCount;
      localStorage.setItem('cartCount', cartCount);
      showToast('Producto agregado al carrito');
    }
  });
});
