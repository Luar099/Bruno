// ========== DADOS DOS PRODUTOS ==========
const DEFAULT_PRODUCTS = [
  {
    id: 1, name: "Whey Protein Concentrado 900g", brand: "Max Titanium",
    category: "proteinas", price: 129.90, oldPrice: 179.90,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center",
    description: "Whey Protein de alta qualidade com 21g de proteína. Ideal para hipertrofia.",
    flavors: ["Chocolate", "Baunilha", "Morango"],
    sizes: ["900g", "1.8kg"],
    featured: true, badge: "sale", sales: 845
  },
  {
    id: 2, name: "Creatina Monohidratada 300g", brand: "Integral Médica",
    category: "creatina", price: 79.90, oldPrice: null,
    img: "https://images.unsplash.com/photo-1544991875-5dc1b05f1571?w=300&h=300&fit=crop",
    description: "Aumenta força, potência e volume muscular.",
    flavors: ["Sem Sabor"],
    sizes: ["300g"],
    featured: true, badge: "hot", sales: 1200
  }
];

// ========== ESTADO DO APP ==========
let state = {
  cart: JSON.parse(localStorage.getItem('b7_cart')) || [],
  currentPage: 'home',
  searchQuery: ''
};

// ========== FUNÇÕES PRINCIPAIS ==========
function renderPage() {
  const main = document.getElementById('app');
  if (state.currentPage === 'home') {
    main.innerHTML = `
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Performance de <span>Elite</span></h1>
          <p>Os melhores suplementos para o seu objetivo.</p>
          <button class="btn-primary" onclick="navigateTo('products')">Ver Produtos</button>
        </div>
      </section>
      <section class="products-grid" id="featured-products"></section>
    `;
    renderProducts('featured-products', DEFAULT_PRODUCTS.filter(p => p.featured));
  }
}

function renderProducts(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = list.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">R$ ${p.price.toFixed(2)}</p>
      <button class="btn-add" onclick="addToCart(${p.id})">Adicionar</button>
    </div>
  `).join('');
}

function navigateTo(page) {
  state.currentPage = page;
  renderPage();
  window.scrollTo(0,0);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderPage();
  console.log("Loja B7 Suplementos carregada com sucesso!");
});
