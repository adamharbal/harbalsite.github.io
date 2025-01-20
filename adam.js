document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const productCard = event.target.closest('.product-card');
      const productName = productCard.querySelector('h3').innerText;
      const productPrice = productCard.querySelector('p').innerText;


      alert(`Vous avez ajouté ${productName} (${productPrice}) à votre panier.`);

    });
  });
});