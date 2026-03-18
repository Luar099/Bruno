// Dados iniciais dos produtos
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Whey Protein Concentrado 900g",
    brand: "Max Titanium",
    category: "proteinas",
    price: 129.90,
    oldPrice: 179.90,
    img: "...",
    description: "Whey Protein Concentrado de alta qualidade...",
    flavors: ["Chocolate", "Baunilha", "Morango", "Neutro"],
    sizes: ["900g", "1.8kg", "3.6kg"],
    featured: true,
    bestseller: true,
    badge: "sale",
    discount: 28,
    sales: 845
  },
  // resto continua igual...
];


// Categorias disponíveis
const CATEGORIES = [
  { id: "proteinas", name: "Proteínas", icon: "💪", count: 3 },
  { id: "pre-treino", name: "Pré-Treino", icon: "⚡", count: 2 },
  { id: "creatina", name: "Creatina", icon: "🔥", count: 1 },
  { id: "vitaminas", name: "Vitaminas", icon: "🌿", count: 3 },
  { id: "aminoacidos", name: "Aminoácidos", icon: "🧬", count: 2 },
  { id: "emagrecimento", name: "Emagrecimento", icon: "⚖️", count: 1 }
];


// Estado global da aplicação
let state = {
  currentPage: 'home',
  cart: JSON.parse(localStorage.getItem('b7_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('b7_wishlist') || '[]'),
  user: JSON.parse(localStorage.getItem('b7_user') || 'null'),
  adminProducts: JSON.parse(localStorage.getItem('b7_products') || 'null'),
  currentFilter: 'all',
  searchQuery: '',
  selectedProduct: null,
  cartOpen: false,
  editingProductId: null
};


// Helpers (funções utilitárias)
function getProducts() {
  const stored = localStorage.getItem('b7_products');
  return stored ? JSON.parse(stored) : [...DEFAULT_PRODUCTS];
}

function saveProducts(products) {
  localStorage.setItem('b7_products', JSON.stringify(products));
}

function saveCart() {
  localStorage.setItem('b7_cart', JSON.stringify(state.cart));
}

function saveWishlist() {
  localStorage.setItem('b7_wishlist', JSON.stringify(state.wishlist));
}

function formatPrice(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}


// Carrinho
function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}


// Atualiza badges (carrinho e favoritos)
function updateBadges() {
  const cartBadge = document.getElementById('cart-badge');
  const wishBadge = document.getElementById('wishlist-badge');

  const cartQty = cartCount();
  const wishQty = state.wishlist.length;

  if (cartBadge) {
    cartBadge.textContent = cartQty;
    cartBadge.classList.toggle('visible', cartQty > 0);
  }

  if (wishBadge) {
    wishBadge.textContent = wishQty;
    wishBadge.classList.toggle('visible', wishQty > 0);
  }
}


// Toast (mensagem rápida)
function showToast(title, desc = '', icon = '✅') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';

  toast.innerHTML = `
    <span>${icon}</span>
    <div>
      <strong>${title}</strong>
      ${desc ? `<div>${desc}</div>` : ''}
    </div>
  `;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}


// Navegação entre páginas
function navigateTo(page, data) {
  state.currentPage = page;

  if (data) {
    state.selectedProduct = data;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderPage();
}


// Renderização principal
function renderPage() {
  const app = document.getElementById('app');
  if (!app) return;

  switch (state.currentPage) {
    case 'home':
      renderHome();
      break;

    case 'products':
      renderProductsPage();
      break;

    case 'product':
      renderProductDetail();
      break;

    case 'wishlist':
      renderWishlist();
      break;

    case 'about':
      renderAbout();
      break;

    case 'contact':
      renderContact();
      break;

    case 'faq':
      renderFAQ();
      break;

    case 'account':
      renderAccount();
      break;

    case 'admin':
      renderAdmin();
      break;

    default:
      renderHome();
  }

  renderFooter();
  updateBadges();
}


// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderPage();
  renderCartSidebar();
});
