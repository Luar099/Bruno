
/* =============================================
   B7 SUPLEMENTOS — app.js
   SPA puro em JavaScript vanilla
   ============================================= */

// ── DADOS DE PRODUTOS ────────────────────────────────
const DEFAULT_PRODUCTS = [
  {
    id: 1, name: "Whey Protein Concentrado 900g", brand: "Max Titanium",
    category: "proteinas", price: 129.90, oldPrice: 179.90,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center",
    description: "Whey Protein Concentrado de alta qualidade com 21g de proteína por dose. Ideal para hipertrofia e recuperação muscular. Sabores variados.",
    flavors: ["Chocolate", "Baunilha", "Morango", "Neutro"],
    sizes: ["900g", "1.8kg", "3.6kg"],
    featured: true, bestseller: true, badge: "sale", discount: 28,
    sales: 845
  },
  {
    id: 2, name: "Creatina Monohidratada 300g", brand: "Integral Médica",
    category: "creatina", price: 79.90, oldPrice: null,
    img: "https://images.unsplash.com/photo-1544991875-5dc1b05f1571?w=300&h=300&fit=crop",
    description: "Creatina pura monohidratada, sem adição de corantes ou aromatizantes. Aumenta força, potência e volume muscular.",
    flavors: ["Neutro"],
    sizes: ["300g", "600g"],
    featured: true, bestseller: true, badge: "top", discount: 0,
    sales: 1120
  },
  {
    id: 3, name: "Pré-Treino Explosion 300g", brand: "Black Skull",
    category: "pre-treino", price: 99.90, oldPrice: 139.90,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
    description: "Pré-treino com alto teor de cafeína, beta-alanina e citrulina malato. Energia explosiva e foco total para seus treinos.",
    flavors: ["Frutas Vermelhas", "Limão", "Maracujá", "Blue Raspberry"],
    sizes: ["300g", "600g"],
    featured: true, bestseller: false, badge: "sale", discount: 28,
    sales: 612
  },
  {
    id: 4, name: "BCAA 2400mg 120 Cápsulas", brand: "Probiótica",
    category: "aminoacidos", price: 64.90, oldPrice: 89.90,
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop",
    description: "BCAA com proporção 2:1:1 de leucina, isoleucina e valina. Protege massa muscular e acelera a recuperação.",
    flavors: [],
    sizes: ["60 Cáps", "120 Cáps", "240 Cáps"],
    featured: false, bestseller: true, badge: "sale", discount: 28,
    sales: 743
  },
  {
    id: 5, name: "Whey Isolado 100% 900g", brand: "Optimum Nutrition",
    category: "proteinas", price: 249.90, oldPrice: 299.90,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&sat=-80",
    description: "Whey Protein Isolado premium com 25g de proteína e praticamente zero lactose, gordura e carboidratos por dose.",
    flavors: ["Double Rich Chocolate", "Baunilha", "Morango"],
    sizes: ["900g", "1.8kg"],
    featured: true, bestseller: true, badge: "top", discount: 17,
    sales: 934
  },
  {
    id: 6, name: "Vitamina C 1000mg 60 Cáps", brand: "Now Foods",
    category: "vitaminas", price: 39.90, oldPrice: 54.90,
    img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=300&fit=crop",
    description: "Vitamina C pura 1000mg com bioflavonoides. Antioxidante potente que fortalece a imunidade e melhora a absorção de ferro.",
    flavors: [],
    sizes: ["30 Cáps", "60 Cáps", "120 Cáps"],
    featured: false, bestseller: false, badge: "new", discount: 27,
    sales: 398
  },
  {
    id: 7, name: "Termogênico Therma Pro 120 Cáps", brand: "Performance",
    category: "emagrecimento", price: 89.90, oldPrice: 119.90,
    img: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?w=300&h=300&fit=crop",
    description: "Termogênico completo com cafeína, extrato de chá verde, piperina e carnitina. Acelera o metabolismo e potencializa a queima de gordura.",
    flavors: [],
    sizes: ["60 Cáps", "120 Cáps"],
    featured: false, bestseller: true, badge: "sale", discount: 25,
    sales: 556
  },
  {
    id: 8, name: "Glutamina 300g", brand: "Atlhetica Nutrition",
    category: "aminoacidos", price: 59.90, oldPrice: null,
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
    description: "L-Glutamina pura para recuperação muscular acelerada, fortalecimento do sistema imunológico e saúde intestinal.",
    flavors: ["Neutro"],
    sizes: ["150g", "300g", "600g"],
    featured: false, bestseller: false, badge: "new", discount: 0,
    sales: 289
  },
  {
    id: 9, name: "Ômega 3 TG 120 Cáps", brand: "Vitafor",
    category: "vitaminas", price: 69.90, oldPrice: 89.90,
    img: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=300&h=300&fit=crop",
    description: "Ômega 3 em triglicerídeos concentrado, com alta biodisponibilidade. Rico em EPA e DHA para saúde cardiovascular e cognitiva.",
    flavors: [],
    sizes: ["60 Cáps", "120 Cáps"],
    featured: false, bestseller: false, badge: "sale", discount: 22,
    sales: 421
  },
  {
    id: 10, name: "Mass Titanium 17500 3kg", brand: "Max Titanium",
    category: "proteinas", price: 139.90, oldPrice: 179.90,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&hue-rotate=180",
    description: "Hipercalórico completo com proteínas, carboidratos e vitaminas. Ideal para quem tem dificuldade em ganhar peso e massa muscular.",
    flavors: ["Chocolate", "Baunilha", "Morango"],
    sizes: ["1.4kg", "3kg"],
    featured: false, bestseller: true, badge: "sale", discount: 22,
    sales: 677
  },
  {
    id: 11, name: "Pré-Treino C4 Original 195g", brand: "Cellucor",
    category: "pre-treino", price: 179.90, oldPrice: 219.90,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&sat=-30",
    description: "Um dos pré-treinos mais vendidos do mundo. Formula exclusiva com CarnoSyn beta-alanina, arginine AKG e Creatine Nitrate.",
    flavors: ["Watermelon", "Pink Lemonade", "Cherry Limeade"],
    sizes: ["195g", "390g"],
    featured: true, bestseller: false, badge: "top", discount: 18,
    sales: 788
  },
  {
    id: 12, name: "ZMA 90 Cápsulas", brand: "Performance",
    category: "vitaminas", price: 54.90, oldPrice: 74.90,
    img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=300&fit=crop&sat=-50",
    description: "ZMA — zinco, magnésio e vitamina B6. Melhora a qualidade do sono, aumenta a produção natural de testosterona e melhora a recuperação.",
    flavors: [],
    sizes: ["60 Cáps", "90 Cáps"],
    featured: false, bestseller: false, badge: "new", discount: 27,
    sales: 314
  }
];

const CATEGORIES = [
  { id: "proteinas",   name: "Proteínas",     icon: "💪", count: 3 },
  { id: "pre-treino",  name: "Pré-Treino",    icon: "⚡", count: 2 },
  { id: "creatina",    name: "Creatina",      icon: "🔥", count: 1 },
  { id: "vitaminas",   name: "Vitaminas",     icon: "🌿", count: 3 },
  { id: "aminoacidos", name: "Aminoácidos",   icon: "🧬", count: 2 },
  { id: "emagrecimento", name: "Emagrecimento", icon: "⚖️", count: 1 }
];

const MARQUEE_ITEMS = ["WHEY PROTEIN","CREATINA","PRÉ-TREINO","BCAA","VITAMINAS","TERMOGÊNICO","GLUTAMINA","ÔMEGA 3","HIPERCALÓRICO","ZMA","CAFEÍNA","COLÁGENO"];

const FAQ_DATA = [
  { q: "Os produtos são originais e têm garantia?", a: "Sim! Todos os nossos produtos são 100% originais, adquiridos diretamente de distribuidoras autorizadas. Trabalhamos apenas com marcas certificadas pela ANVISA." },
  { q: "Qual o prazo de entrega para todo o Brasil?", a: "O prazo varia de acordo com a sua localidade. Para cidades próximas ao nosso centro de distribuição em Belo Campo, BA, o prazo é de 2 a 5 dias úteis. Para outras regiões, pode variar de 5 a 15 dias úteis." },
  { q: "Como funciona o frete grátis?", a: "Oferecemos frete grátis para compras acima de R$ 299,00 em todo o território nacional. Para compras abaixo desse valor, o frete é calculado no momento do checkout conforme o seu CEP." },
  { q: "Quais formas de pagamento são aceitas?", a: "Aceitamos Pix (com desconto especial), cartão de crédito (até 12x), cartão de débito e boleto bancário." },
  { q: "É possível trocar ou devolver um produto?", a: "Sim! Temos política de troca e devolução em até 7 dias após o recebimento do produto, conforme o Código de Defesa do Consumidor. O produto deve estar lacrado e na embalagem original." },
  { q: "Os suplementos têm restrições de uso?", a: "Alguns suplementos possuem contraindicações. Recomendamos sempre a consulta com um nutricionista ou médico antes de iniciar qualquer suplementação, especialmente para gestantes, lactantes, menores de 18 anos e portadores de doenças crônicas." },
  { q: "Como entro em contato com o suporte?", a: "Você pode entrar em contato pelo WhatsApp (77) 9 9999-9999, pelo e-mail contato@b7suplementos.com, ou preenchendo o formulário na página de contato. Nosso horário de atendimento é Seg–Sex: 8h–18h e Sáb: 8h–12h." }
];

// ── STATE ────────────────────────────────────────────
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

// ── HELPERS ──────────────────────────────────────────
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

function formatPrice(v) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function cartTotal() {
  return state.cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function cartCount() {
  return state.cart.reduce((s, i) => s + i.qty, 0);
}

function updateBadges() {
  const cc = cartCount();
  const wc = state.wishlist.length;

  const cb = document.getElementById('cart-badge');
  const wb = document.getElementById('wishlist-badge');
  if (cb) {
    cb.textContent = cc;
    cb.classList.toggle('visible', cc > 0);
  }
  if (wb) {
    wb.textContent = wc;
    wb.classList.toggle('visible', wc > 0);
  }
}

// ── TOAST ─────────────────────────────────────────────
function showToast(title, desc = '', icon = '✅') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-text">
      <div class="toast-title">${title}</div>
      ${desc ? `<div class="toast-desc">${desc}</div>` : ''}
    </div>`;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 50);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000);
}

// ── NAVIGATION ───────────────────────────────────────
function navigateTo(page, data) {
  state.currentPage = page;
  if (data) state.selectedProduct = data;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderPage();
}

function renderPage() {
  const app = document.getElementById('app');
  if (!app) return;

  switch (state.currentPage) {
    case 'home': renderHome(); break;
    case 'products': renderProductsPage(); break;
    case 'product': renderProductDetail(); break;
    case 'wishlist': renderWishlist(); break;
    case 'about': renderAbout(); break;
    case 'contact': renderContact(); break;
    case 'faq': renderFAQ(); break;
    case 'account': renderAccount(); break;
    case 'admin': renderAdmin(); break;
    default: renderHome();
  }

  renderFooter();
  updateBadges();
}

// ── RENDER HOME ───────────────────────────────────────
function renderHome() {
  const app = document.getElementById('app');
  const products = getProducts();
  const featured = products.filter(p => p.featured);
  const bestsellers = products.filter(p => p.bestseller).sort((a,b) => b.sales - a.sales);

  app.innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-grid-lines"></div>
      <div class="hero-content">
        <div class="hero-left">
          <div class="hero-badge">
            <span>Suplementos Premium</span>
          </div>
          <h1 class="hero-title">
            SEU OBJETIVO
            <span class="highlight">É O NOSSO</span>
            OBJETIVO!
          </h1>
          <p class="hero-subtitle">
            Suplementos nacionais e importados com os melhores preços.
            Baseados em Belo Campo, BA — entregamos para <strong style="color:var(--white)">todo o Brasil</strong> com rapidez e segurança.
          </p>
          <div class="hero-buttons">
            <button class="btn-primary" onclick="navigateTo('products')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12 14 0M12 5l7 7-7 7"/></svg>
              Ver Produtos
            </button>
            <button class="btn-outline" onclick="navigateTo('about')">Conheça a B7</button>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><div class="hero-stat-value">2.252+</div><div class="hero-stat-label">Seguidores</div></div>
            <div class="hero-stat"><div class="hero-stat-value">5.000+</div><div class="hero-stat-label">Clientes</div></div>
            <div class="hero-stat"><div class="hero-stat-value">4.9★</div><div class="hero-stat-label">Avaliação</div></div>
            <div class="hero-stat"><div class="hero-stat-value">Desde</div><div class="hero-stat-label">2022</div></div>
          </div>
        </div>
        <div class="hero-right">
          <div class="hero-img-wrap">
            <div class="hero-img-glow"></div>
            <div class="hero-img-ring"></div>
            <img class="hero-img" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center" alt="Suplemento B7" />
            <div class="float-card" style="">
              <div class="float-icon">🏆</div>
              <div><div style="font-size:11px;font-weight:700">Produto Top</div><div style="font-size:10px;color:var(--gray)">Mais vendido</div></div>
            </div>
            <div class="float-card">
              <div class="float-icon">🚀</div>
              <div><div style="font-size:11px;font-weight:700">Entrega Rápida</div><div style="font-size:10px;color:var(--gray)">Todo o Brasil</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee-section">
      <div class="marquee-track">
        ${[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(i => `<span class="marquee-item">${i}</span>`).join('')}
      </div>
    </div>

    <!-- CATEGORIAS -->
    <div class="section">
      <div class="section-header">
        <span class="section-tag">// Navegue por</span>
        <h2 class="section-title">CATEGORIAS <span>EM DESTAQUE</span></h2>
        <p class="section-desc">Encontre exatamente o que você precisa para alcançar seus objetivos.</p>
      </div>
      <div class="categories-grid">
        ${CATEGORIES.map(c => `
          <div class="cat-card" onclick="filterAndGo('${c.id}')">
            <span class="cat-icon">${c.icon}</span>
            <div class="cat-name">${c.name}</div>
            <div class="cat-count">${c.count} produto${c.count > 1 ? 's' : ''}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- EM DESTAQUE -->
    <div class="section" style="padding-top:0">
      <div class="section-header">
        <span class="section-tag">// Seleção especial</span>
        <h2 class="section-title">EM <span>DESTAQUE</span></h2>
      </div>
      <div class="products-grid">
        ${featured.map(p => productCardHTML(p)).join('')}
      </div>
    </div>

    <!-- BANNER PROMO -->
    <div class="promo-banner-wrap">
      <div class="promo-banner">
        <div>
          <span class="promo-tag">// Oferta limitada</span>
          <h2 class="promo-title">ATÉ 40% OFF EM<br><span>PROTEÍNAS</span> SELECIONADAS!</h2>
          <p class="promo-desc">Aproveite nossas promoções exclusivas em Whey Protein, Hipercalórico e muito mais. Estoque limitado!</p>
        </div>
        <div>
          <button class="btn-primary" onclick="filterAndGo('proteinas')">
            Aproveitar Oferta →
          </button>
        </div>
      </div>
    </div>

    <!-- MAIS VENDIDOS -->
    <div class="section" style="padding-top:0">
      <div class="section-header">
        <span class="section-tag">// Ranking</span>
        <h2 class="section-title">MAIS <span>VENDIDOS</span></h2>
      </div>
      <div class="products-grid">
        ${bestsellers.slice(0,4).map(p => productCardHTML(p)).join('')}
      </div>
    </div>
  `;
}

function filterAndGo(cat) {
  state.currentFilter = cat;
  navigateTo('products');
}

// ── PRODUCT CARD HTML ─────────────────────────────────
function productCardHTML(p) {
  const inWish = state.wishlist.includes(p.id);
  const disc = p.discount > 0 ? `<span class="product-discount">-${p.discount}%</span>` : '';
  const oldPr = p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : '';
  return `
    <div class="product-card">
      <div class="product-img-wrap">
        <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200/1a2332/4dd4f0?text=B7'"/>
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge === 'sale' ? 'Oferta' : p.badge === 'new' ? 'Novo' : 'Top'}</span>` : ''}
        <button class="wishlist-btn ${inWish ? 'active' : ''}" onclick="event.stopPropagation();toggleWishlist(${p.id})">
          ${inWish ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-pricing">
          <span class="product-price">${formatPrice(p.price)}</span>
          ${oldPr}
          ${disc}
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="quickAddCart(${p.id})">+ Carrinho</button>
          <button class="btn-detail" onclick="navigateTo('product', ${p.id})">Ver</button>
        </div>
      </div>
    </div>`;
}

// ── RENDER PRODUCTS PAGE ──────────────────────────────
function renderProductsPage() {
  const app = document.getElementById('app');
  const products = getProducts();

  const filtered = state.currentFilter === 'all'
    ? products
    : products.filter(p => p.category === state.currentFilter);

  const searched = state.searchQuery
    ? filtered.filter(p =>
        p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(state.searchQuery.toLowerCase()))
    : filtered;

  app.innerHTML = `
    <div class="page-hero">
      <div class="page-hero-inner">
        <span class="page-hero-tag">// Catálogo completo</span>
        <h1 class="page-hero-title">NOSSOS <span>PRODUTOS</span></h1>
        <p class="page-hero-desc">Suplementos nacionais e importados com qualidade garantida e os melhores preços.</p>
      </div>
    </div>
    <div class="section">
      <div class="filter-bar">
        <button class="filter-chip ${state.currentFilter === 'all' ? 'active' : ''}" onclick="setFilter('all')">Todos</button>
        ${CATEGORIES.map(c =>
          `<button class="filter-chip ${state.currentFilter === c.id ? 'active' : ''}" onclick="setFilter('${c.id}')">${c.name}</button>`
        ).join('')}
      </div>
      ${searched.length === 0
        ? `<div class="empty-state">
            <span class="empty-icon">🔍</span>
            <div class="empty-title">Nenhum produto encontrado</div>
            <div class="empty-desc">Tente ajustar os filtros ou a busca</div>
          </div>`
        : `<div class="products-grid">${searched.map(p => productCardHTML(p)).join('')}</div>`}
    </div>`;
}

function setFilter(cat) {
  state.currentFilter = cat;
  renderProductsPage();
  updateBadges();
}

// ── RENDER PRODUCT DETAIL ─────────────────────────────
function renderProductDetail() {
  const app = document.getElementById('app');
  const products = getProducts();
  const p = products.find(x => x.id === state.selectedProduct);

  if (!p) { renderProductsPage(); return; }

  const inWish = state.wishlist.includes(p.id);

  app.innerHTML = `
    <div class="product-detail">
      <div>
        <div class="product-detail-img">
          <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/280x320/1a2332/4dd4f0?text=B7'"/>
        </div>
      </div>
      <div class="product-detail-info">
        <div class="breadcrumb">
          <span onclick="navigateTo('home')">Início</span>
          <span class="sep">›</span>
          <span onclick="navigateTo('products')">Produtos</span>
          <span class="sep">›</span>
          <span style="color:var(--white3)">${p.name}</span>
        </div>
        <div class="detail-brand">${p.brand}</div>
        <h1 class="detail-name">${p.name}</h1>
        <div class="detail-pricing">
          <span class="detail-price">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="detail-old">${formatPrice(p.oldPrice)}</span>` : ''}
          ${p.discount > 0 ? `<span class="detail-disc">-${p.discount}%</span>` : ''}
        </div>
        <p class="detail-desc">${p.description}</p>

        ${p.flavors && p.flavors.length > 0 ? `
          <span class="option-label">Sabor</span>
          <div class="option-pills" id="flavor-pills">
            ${p.flavors.map((f,i) =>
              `<button class="option-pill ${i===0?'selected':''}" onclick="selectPill('flavor-pills',this)">${f}</button>`
            ).join('')}
          </div>` : ''}

        ${p.sizes && p.sizes.length > 0 ? `
          <span class="option-label">Tamanho</span>
          <div class="option-pills" id="size-pills">
            ${p.sizes.map((s,i) =>
              `<button class="option-pill ${i===0?'selected':''}" onclick="selectPill('size-pills',this)">${s}</button>`
            ).join('')}
          </div>` : ''}

        <span class="option-label">Quantidade</span>
        <div class="qty-control" style="margin-top:8px">
          <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>
          <span class="qty-val" id="detail-qty">1</span>
          <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
        </div>

        <div class="detail-actions">
          <button class="btn-detail-cart" onclick="addToCartDetail(${p.id})">🛒 Adicionar ao Carrinho</button>
          <button class="btn-detail-fav ${inWish ? 'active' : ''}" id="fav-btn-detail" onclick="toggleWishlist(${p.id}, true)">
            ${inWish ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>`;
}

let detailQty = 1;

function changeDetailQty(d) {
  detailQty = Math.max(1, detailQty + d);
  const el = document.getElementById('detail-qty');
  if (el) el.textContent = detailQty;
}

function selectPill(groupId, btn) {
  document.querySelectorAll(`#${groupId} .option-pill`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function getSelectedPill(groupId) {
  const el = document.querySelector(`#${groupId} .option-pill.selected`);
  return el ? el.textContent : '';
}

function addToCartDetail(pid) {
  const products = getProducts();
  const p = products.find(x => x.id === pid);
  if (!p) return;
  const flavor = getSelectedPill('flavor-pills') || (p.flavors[0] || '');
  const size = getSelectedPill('size-pills') || (p.sizes[0] || '');
  addToCart(p, flavor, size, detailQty || 1);
  detailQty = 1;
}

// ── CART ──────────────────────────────────────────────
function quickAddCart(pid) {
  const products = getProducts();
  const p = products.find(x => x.id === pid);
  if (!p) return;
  addToCart(p, p.flavors[0] || '', p.sizes[0] || '');
}

function addToCart(product, flavor, size, qty = 1) {
  const key = `${product.id}_${flavor}_${size}`;
  const existing = state.cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      key, id: product.id, name: product.name,
      brand: product.brand, img: product.img,
      price: product.price, flavor, size, qty
    });
  }
  saveCart();
  updateBadges();
  renderCartSidebar();
  showToast('Adicionado!', product.name, '🛒');
}

function openCart() {
  state.cartOpen = true;
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (sidebar) sidebar.classList.add('open');
  if (overlay) overlay.classList.remove('hidden');
  document.body.classList.add('no-scroll');
  renderCartSidebar();
}

function closeCart() {
  state.cartOpen = false;
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.add('hidden');
  document.body.classList.remove('no-scroll');
}

function renderCartSidebar() {
  const itemsEl = document.getElementById('cart-items');
  const footerEl = document.getElementById('cart-footer');
  if (!itemsEl || !footerEl) return;

  if (state.cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Seu carrinho está vazio.<br>Adicione produtos para continuar.</p>
        <button class="btn-outline" onclick="closeCart();navigateTo('products')" style="width:100%;justify-content:center">Ver Produtos</button>
      </div>`;
    footerEl.innerHTML = '';
    return;
  }

  itemsEl.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/64x64/1a2332/4dd4f0?text=B7'"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${[item.flavor, item.size].filter(Boolean).join(' · ')}</div>
        <div class="cart-qty-row">
          <button class="cart-qty-btn" onclick="changeCartQty('${item.key}', -1)">−</button>
          <span class="cart-qty-val">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeCartQty('${item.key}', 1)">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
        <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
        <button class="cart-item-remove" onclick="removeCartItem('${item.key}')">🗑️</button>
      </div>
    </div>`).join('');

  const total = cartTotal();

  footerEl.innerHTML = `
    <div class="cart-line"><span class="cart-line-label">Subtotal</span><span class="cart-line-val">${formatPrice(total)}</span></div>
    <div class="cart-line"><span class="cart-line-label">Frete</span><span class="cart-line-val" style="color:var(--gray)">Calcule no checkout</span></div>
    <div class="cart-line cart-total-line"><span class="cart-line-label">Total</span><span class="cart-line-val">${formatPrice(total)}</span></div>
    <button class="btn-checkout" onclick="checkout()">Finalizar Compra</button>
    <button class="btn-continue" onclick="closeCart()">Continuar Comprando</button>`;
}

function changeCartQty(key, delta) {
  const item = state.cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateBadges();
  renderCartSidebar();
}

function removeCartItem(key) {
  state.cart = state.cart.filter(i => i.key !== key);
  saveCart();
  updateBadges();
  renderCartSidebar();
  showToast('Removido', 'Item removido do carrinho', '🗑️');
}

function checkout() {
  showToast('Em breve!', 'Sistema de pagamento em integração', '🚀');
}

// ── WISHLIST ──────────────────────────────────────────
function toggleWishlist(pid, fromDetail = false) {
  const idx = state.wishlist.indexOf(pid);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast('Removido dos favoritos', '', '💔');
  } else {
    state.wishlist.push(pid);
    showToast('Adicionado aos favoritos!', '', '❤️');
  }
  saveWishlist();
  updateBadges();

  // Update card button if on products page or home
  const btns = document.querySelectorAll('.wishlist-btn');
  btns.forEach(btn => {
    const match = btn.getAttribute('onclick')?.includes(`${pid}`);
    if (match) {
      const inWish = state.wishlist.includes(pid);
      btn.classList.toggle('active', inWish);
      btn.textContent = inWish ? '❤️' : '🤍';
    }
  });

  if (fromDetail) {
    const fb = document.getElementById('fav-btn-detail');
    if (fb) {
      const inWish = state.wishlist.includes(pid);
      fb.classList.toggle('active', inWish);
      fb.textContent = inWish ? '❤️' : '🤍';
    }
  }
}

function renderWishlist() {
  const app = document.getElementById('app');
  const products = getProducts();
  const favs = products.filter(p => state.wishlist.includes(p.id));

  app.innerHTML = `
    <div class="page-hero">
      <div class="page-hero-inner">
        <span class="page-hero-tag">// Minha lista</span>
        <h1 class="page-hero-title">MEUS <span>FAVORITOS</span></h1>
      </div>
    </div>
    <div class="section">
      ${favs.length === 0
        ? `<div class="empty-state">
            <span class="empty-icon">🤍</span>
            <div class="empty-title">Sua lista está vazia</div>
            <div class="empty-desc">Favorite produtos para salvá-los aqui.</div>
            <br>
            <button class="btn-primary" onclick="navigateTo('products')">Explorar Produtos</button>
          </div>`
        : `<div class="products-grid">${favs.map(p => productCardHTML(p)).join('')}</div>`}
    </div>`;
}

// ── SEARCH ────────────────────────────────────────────
function liveSearch(query) {
  const dropdown = document.getElementById('search-dropdown');
  if (!dropdown) return;

  if (!query || query.length < 2) {
    dropdown.classList.add('hidden');
    return;
  }

  const products = getProducts();
  const results = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.brand.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  if (results.length === 0) {
    dropdown.classList.add('hidden');
    return;
  }

  dropdown.innerHTML = results.map(p => `
    <div class="search-result-item" onclick="dropdown.classList.add('hidden');navigateTo('product', ${p.id})">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/44/1a2332/4dd4f0?text=B7'"/>
      <div>
        <div class="sr-name">${p.name}</div>
        <div class="sr-price">${formatPrice(p.price)}</div>
      </div>
    </div>`).join('');

  dropdown.classList.remove('hidden');
}

// ── ABOUT ─────────────────────────────────────────────
function renderAbout() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page-hero">
      <div class="page-hero-inner">
        <span class="page-hero-tag">// Nossa história</span>
        <h1 class="page-hero-title">SOBRE A <span>B7</span></h1>
        <p class="page-hero-desc">Nascemos da paixão pelo esporte e pelo desejo genuíno de ajudar pessoas a alcançarem seus objetivos.</p>
      </div>
    </div>
    <div class="page-wrap">
      <div class="about-grid">
        <div class="about-card">
          <h3>Nossa História</h3>
          <p>A B7 Suplementos nasceu em 2022 em Belo Campo, no interior da Bahia, com um propósito claro: democratizar o acesso a suplementos de qualidade para praticantes de atividade física de toda a região e do Brasil. Fundada por atletas e entusiastas do esporte, nossa loja foi construída com dedicação, conhecimento e muita vontade de fazer a diferença.</p>
        </div>
        <div class="about-card">
          <h3>Nossa Missão</h3>
          <p>Oferecer os melhores suplementos nacionais e importados com preços justos, atendimento personalizado e entrega rápida para todo o território nacional. Acreditamos que cada pessoa tem um objetivo, e estamos aqui para ser o parceiro de jornada de cada um dos nossos clientes.</p>
        </div>
        <div class="about-card">
          <h3>Nosso Compromisso</h3>
          <p>Trabalhamos apenas com produtos originais, adquiridos de distribuidores autorizados e com certificação ANVISA. A sua saúde e segurança são nossa prioridade máxima. Cada produto que vendemos passa por rigoroso controle de qualidade antes de chegar até você.</p>
        </div>
        <div class="about-card">
          <h3>Atendimento Personalizado</h3>
          <p>Nossa equipe é formada por profissionais apaixonados por esporte e nutrição. Estamos sempre prontos para tirar dúvidas, recomendar os melhores produtos para seus objetivos e garantir que sua experiência de compra seja excelente do início ao fim.</p>
        </div>
      </div>

      <div class="section-header" style="margin-top:20px">
        <span class="section-tag">// O que nos move</span>
        <h2 class="section-title">NOSSOS <span>VALORES</span></h2>
      </div>
      <div class="values-grid">
        <div class="value-item"><span class="value-icon">🎯</span><div class="value-title">Foco nos Resultados</div><div class="value-desc">Produtos que realmente funcionam para seu objetivo</div></div>
        <div class="value-item"><span class="value-icon">🛡️</span><div class="value-title">Qualidade Garantida</div><div class="value-desc">Só produtos originais e certificados pela ANVISA</div></div>
        <div class="value-item"><span class="value-icon">💙</span><div class="value-title">Atendimento Humano</div><div class="value-desc">Equipe especializada pronta para ajudar você</div></div>
        <div class="value-item"><span class="value-icon">🚀</span><div class="value-title">Entrega Ágil</div><div class="value-desc">Enviamos para todo o Brasil com rastreamento</div></div>
        <div class="value-item"><span class="value-icon">💰</span><div class="value-title">Preço Justo</div><div class="value-desc">Melhor custo-benefício do mercado</div></div>
        <div class="value-item"><span class="value-icon">📍</span><div class="value-title">Raízes Locais</div><div class="value-desc">Orgulhosamente de Belo Campo, BA</div></div>
      </div>
    </div>`;
}

// ── CONTACT ───────────────────────────────────────────
function renderContact() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page-hero">
      <div class="page-hero-inner">
        <span class="page-hero-tag">// Fale conosco</span>
        <h1 class="page-hero-title">ENTRE EM <span>CONTATO</span></h1>
        <p class="page-hero-desc">Estamos aqui para ajudar! Entre em contato pelos nossos canais ou preencha o formulário.</p>
      </div>
    </div>
    <div class="page-wrap">
      <div class="contact-grid">
        <div class="contact-info">
          <div class="contact-card">
            <div class="contact-card-icon">📍</div>
            <div class="contact-card-text">
              <h4>Localização</h4>
              <p>Belo Campo, Bahia — BA<br>Atendemos presencialmente<br>e entregamos para todo o Brasil</p>
            </div>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">📱</div>
            <div class="contact-card-text">
              <h4>WhatsApp</h4>
              <p>(77) 9 9999-9999<br>Atendimento rápido e personalizado</p>
            </div>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">📧</div>
            <div class="contact-card-text">
              <h4>E-mail</h4>
              <p>contato@b7suplementos.com<br>Respondemos em até 24h úteis</p>
            </div>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">🕐</div>
            <div class="contact-card-text">
              <h4>Horário de Atendimento</h4>
              <p>Seg – Sex: 8h às 18h<br>Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>

        <div>
          <div class="about-card">
            <h3>Envie uma Mensagem</h3>
            <div class="contact-form">
              <div class="form-group">
                <label class="form-label">Seu nome</label>
                <input class="form-input" type="text" placeholder="Como devemos te chamar?"/>
              </div>
              <div class="form-group">
                <label class="form-label">E-mail</label>
                <input class="form-input" type="email" placeholder="seu@email.com"/>
              </div>
              <div class="form-group">
                <label class="form-label">Telefone</label>
                <input class="form-input" type="tel" placeholder="(00) 9 0000-0000"/>
              </div>
              <div class="form-group">
                <label class="form-label">Mensagem</label>
                <textarea class="form-textarea" placeholder="Como podemos te ajudar?"></textarea>
              </div>
              <button class="btn-primary" style="width:100%;justify-content:center" onclick="showToast('Mensagem enviada!','Entraremos em contato em breve ✨','📩')">
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

// ── FAQ ───────────────────────────────────────────────
function renderFAQ() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page-hero">
      <div class="page-hero-inner">
        <span class="page-hero-tag">// Tire suas dúvidas</span>
        <h1 class="page-hero-title">PERGUNTAS <span>FREQUENTES</span></h1>
        <p class="page-hero-desc">Respondemos as principais dúvidas dos nossos clientes.</p>
      </div>
    </div>
    <div class="page-wrap">
      <div class="faq-list">
        ${FAQ_DATA.map((item, i) => `
          <div class="faq-item" id="faq-${i}">
            <button class="faq-question" onclick="toggleFAQ(${i})">
              <span>${item.q}</span>
              <span class="faq-chevron">▾</span>
            </button>
            <div class="faq-answer"><p>${item.a}</p></div>
          </div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:60px;padding:40px;background:var(--black3);border:1px solid var(--border);border-radius:var(--r)">
        <p style="color:var(--gray);font-size:14px;margin-bottom:16px">Não encontrou o que procurava?</p>
        <button class="btn-primary" onclick="navigateTo('contact')">Falar com a B7</button>
      </div>
    </div>`;
}

function toggleFAQ(i) {
  const item = document.getElementById(`faq-${i}`);
  if (item) item.classList.toggle('open');
}

// ── ACCOUNT ───────────────────────────────────────────
function renderAccount() {
  const app = document.getElementById('app');

  if (state.user) {
    app.innerHTML = `
      <div class="account-wrap">
        <div class="account-header">
          <div class="account-avatar">${state.user.name ? state.user.name[0].toUpperCase() : 'U'}</div>
          <div>
            <div class="account-name">Olá, ${state.user.name || 'Cliente'}!</div>
            <div class="account-email">${state.user.email}</div>
          </div>
        </div>
        <div class="account-menu">
          <div class="account-menu-item" onclick="navigateTo('wishlist')"><span class="account-menu-icon">❤️</span> Meus Favoritos <span style="margin-left:auto;font-size:11px;color:var(--gray)">${state.wishlist.length} itens</span></div>
          <div class="account-menu-item" onclick="openCart()"><span class="account-menu-icon">🛒</span> Meu Carrinho <span style="margin-left:auto;font-size:11px;color:var(--gray)">${cartCount()} itens</span></div>
          <div class="account-menu-item" onclick="showToast('Em breve!','Histórico de pedidos em desenvolvimento','📦')"><span class="account-menu-icon">📦</span> Meus Pedidos</div>
          <div class="account-menu-item" onclick="showToast('Em breve!','Edição de dados em desenvolvimento','⚙️')"><span class="account-menu-icon">⚙️</span> Dados da Conta</div>
          ${state.user.isAdmin ? `<div class="account-menu-item" onclick="navigateTo('admin')"><span class="account-menu-icon">🛠️</span> Painel Admin</div>` : ''}
          <div class="account-menu-item" style="color:#ef4444;border-color:rgba(239,68,68,0.2)" onclick="logout()"><span class="account-menu-icon">🚪</span> Sair da Conta</div>
        </div>
      </div>`;
  } else {
    renderAuth();
  }
}

function renderAuth() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-card">
        <div class="auth-logo">
          <div class="logo-circle" style="width:52px;height:52px;margin:0 auto 12px">
            <span class="logo-b7" style="font-size:22px">B7</span>
          </div>
          <div class="auth-title">MINHA CONTA</div>
          <div class="auth-sub">Acesse sua conta B7 Suplementos</div>
        </div>
        <div class="auth-tabs">
          <button class="auth-tab active" id="tab-login" onclick="switchAuthTab('login')">Entrar</button>
          <button class="auth-tab" id="tab-register" onclick="switchAuthTab('register')">Criar Conta</button>
        </div>
        <div id="auth-form-wrap">
          ${loginFormHTML()}
        </div>
      </div>
    </div>`;
}

function loginFormHTML() {
  return `
    <div class="auth-form">
      <div class="form-group">
        <label class="form-label">E-mail</label>
        <input class="form-input" id="login-email" type="email" placeholder="seu@email.com"/>
      </div>
      <div class="form-group">
        <label class="form-label">Senha</label>
        <input class="form-input" id="login-pass" type="password" placeholder="••••••••"/>
      </div>
      <button class="btn-primary" style="width:100%;justify-content:center;margin-top:4px" onclick="doLogin()">
        Entrar na Conta
      </button>
      <div class="auth-divider">ou</div>
      <div style="text-align:center;font-size:12px;color:var(--gray)">
        <strong style="color:var(--cyan)">Admin:</strong> admin@b7.com / admin123
      </div>
    </div>`;
}

function registerFormHTML() {
  return `
    <div class="auth-form">
      <div class="form-group">
        <label class="form-label">Nome completo</label>
        <input class="form-input" id="reg-name" type="text" placeholder="Seu nome completo"/>
      </div>
      <div class="form-group">
        <label class="form-label">E-mail</label>
        <input class="form-input" id="reg-email" type="email" placeholder="seu@email.com"/>
      </div>
      <div class="form-group">
        <label class="form-label">Senha</label>
        <input class="form-input" id="reg-pass" type="password" placeholder="Mínimo 6 caracteres"/>
      </div>
      <button class="btn-primary" style="width:100%;justify-content:center;margin-top:4px" onclick="doRegister()">
        Criar Minha Conta
      </button>
    </div>`;
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  const el = document.getElementById(`tab-${tab}`);
  if (el) el.classList.add('active');
  const wrap = document.getElementById('auth-form-wrap');
  if (wrap) wrap.innerHTML = tab === 'login' ? loginFormHTML() : registerFormHTML();
}

function doLogin() {
  const email = document.getElementById('login-email')?.value?.trim();
  const pass = document.getElementById('login-pass')?.value;
  if (!email || !pass) { showToast('Preencha todos os campos', '', '⚠️'); return; }

  if (email === 'admin@b7.com' && pass === 'admin123') {
    state.user = { name: 'Admin B7', email, isAdmin: true };
    localStorage.setItem('b7_user', JSON.stringify(state.user));
    showToast('Bem-vindo, Admin!', '', '👑');
    navigateTo('account');
    return;
  }

  const users = JSON.parse(localStorage.getItem('b7_users') || '[]');
  const found = users.find(u => u.email === email && u.pass === pass);
  if (found) {
    state.user = { name: found.name, email: found.email, isAdmin: false };
    localStorage.setItem('b7_user', JSON.stringify(state.user));
    showToast(`Bem-vindo, ${found.name}!`, '', '👋');
    navigateTo('account');
  } else {
    showToast('Credenciais inválidas', 'Verifique email e senha', '❌');
  }
}

function doRegister() {
  const name = document.getElementById('reg-name')?.value?.trim();
  const email = document.getElementById('reg-email')?.value?.trim();
  const pass = document.getElementById('reg-pass')?.value;
  if (!name || !email || !pass) { showToast('Preencha todos os campos', '', '⚠️'); return; }
  if (pass.length < 6) { showToast('Senha muito curta', 'Mínimo 6 caracteres', '⚠️'); return; }

  const users = JSON.parse(localStorage.getItem('b7_users') || '[]');
  if (users.find(u => u.email === email)) { showToast('E-mail já cadastrado', '', '⚠️'); return; }

  users.push({ name, email, pass });
  localStorage.setItem('b7_users', JSON.stringify(users));
  state.user = { name, email, isAdmin: false };
  localStorage.setItem('b7_user', JSON.stringify(state.user));
  showToast(`Conta criada! Bem-vindo, ${name}!`, '', '🎉');
  navigateTo('account');
}

function logout() {
  state.user = null;
  localStorage.removeItem('b7_user');
  showToast('Até logo!', 'Você saiu da sua conta', '👋');
  navigateTo('home');
}

// ── ADMIN ─────────────────────────────────────────────
function renderAdmin() {
  const app = document.getElementById('app');
  if (!state.user || !state.user.isAdmin) {
    showToast('Acesso negado', 'Área restrita a administradores', '🔒');
    navigateTo('account');
    return;
  }

  const products = getProducts();
  const editId = state.editingProductId;
  const editProd = editId ? products.find(p => p.id === editId) : null;

  app.innerHTML = `
    <div class="page-hero">
      <div class="page-hero-inner">
        <span class="page-hero-tag">// Área administrativa</span>
        <h1 class="page-hero-title">PAINEL <span>ADMIN</span></h1>
      </div>
    </div>
    <div class="admin-wrap">
      <div class="admin-grid">
        <div class="admin-form-card">
          <h3>${editProd ? 'EDITAR PRODUTO' : 'NOVO PRODUTO'}</h3>
          <div class="contact-form">
            <div class="form-group"><label class="form-label">Nome do Produto</label><input class="form-input" id="adm-name" value="${editProd ? editProd.name : ''}"/></div>
            <div class="form-group"><label class="form-label">Marca</label><input class="form-input" id="adm-brand" value="${editProd ? editProd.brand : ''}"/></div>
            <div class="form-group"><label class="form-label">Categoria</label>
              <select class="form-input" id="adm-cat">
                ${CATEGORIES.map(c => `<option value="${c.id}" ${editProd && editProd.category===c.id?'selected':''}>${c.name}</option>`).join('')}
              </select>
            </div>
            <div class="form-group"><label class="form-label">Preço (R$)</label><input class="form-input" id="adm-price" type="number" step="0.01" value="${editProd ? editProd.price : ''}"/></div>
            <div class="form-group"><label class="form-label">Preço Antigo (R$)</label><input class="form-input" id="adm-oldprice" type="number" step="0.01" value="${editProd && editProd.oldPrice ? editProd.oldPrice : ''}"/></div>
            <div class="form-group"><label class="form-label">Desconto (%)</label><input class="form-input" id="adm-disc" type="number" value="${editProd ? editProd.discount : 0}"/></div>
            <div class="form-group"><label class="form-label">URL da Imagem</label><input class="form-input" id="adm-img" value="${editProd ? editProd.img : ''}"/></div>
            <div class="form-group"><label class="form-label">Descrição</label><textarea class="form-textarea" id="adm-desc">${editProd ? editProd.description : ''}</textarea></div>
            <div style="display:flex;gap:10px;align-items:center">
              <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:var(--ice)">
                <input type="checkbox" id="adm-featured" ${editProd && editProd.featured?'checked':''}/> Destaque
              </label>
              <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:var(--ice)">
                <input type="checkbox" id="adm-best" ${editProd && editProd.bestseller?'checked':''}/> Mais Vendido
              </label>
            </div>
            <div style="display:flex;gap:10px">
              <button class="btn-primary" style="flex:1;justify-content:center" onclick="${editProd ? `adminUpdateProduct(${editId})` : 'adminAddProduct()'}">
                ${editProd ? 'Salvar Alterações' : '+ Adicionar Produto'}
              </button>
              ${editProd ? `<button class="btn-outline" onclick="state.editingProductId=null;renderAdmin()">Cancelar</button>` : ''}
            </div>
          </div>
        </div>

        <div>
          <div style="font-family:'Space Mono',monospace;font-size:10px;letter-spacing:3px;color:var(--cyan);text-transform:uppercase;margin-bottom:16px">
            ${products.length} produtos cadastrados
          </div>
          <div class="admin-product-list">
            ${products.map(p => `
              <div class="admin-product-item">
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/52/1a2332/4dd4f0?text=B7'"/>
                <div class="admin-item-info">
                  <div class="name">${p.name}</div>
                  <div class="price">${formatPrice(p.price)} ${p.featured ? '⭐' : ''}</div>
                </div>
                <div class="admin-item-actions">
                  <button class="btn-admin-edit" onclick="adminEditProduct(${p.id})">Editar</button>
                  <button class="btn-admin-del" onclick="adminDeleteProduct(${p.id})">Del</button>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

function adminAddProduct() {
  const products = getProducts();
  const newId = Math.max(...products.map(p => p.id), 0) + 1;
  const name = document.getElementById('adm-name')?.value?.trim();
  const brand = document.getElementById('adm-brand')?.value?.trim();
  if (!name || !brand) { showToast('Preencha nome e marca', '', '⚠️'); return; }

  const newProd = {
    id: newId,
    name, brand,
    category: document.getElementById('adm-cat')?.value || 'proteinas',
    price: parseFloat(document.getElementById('adm-price')?.value) || 0,
    oldPrice: parseFloat(document.getElementById('adm-oldprice')?.value) || null,
    discount: parseInt(document.getElementById('adm-disc')?.value) || 0,
    img: document.getElementById('adm-img')?.value || 'https://via.placeholder.com/300/1a2332/4dd4f0?text=B7',
    description: document.getElementById('adm-desc')?.value || '',
    flavors: [], sizes: [],
    featured: document.getElementById('adm-featured')?.checked || false,
    bestseller: document.getElementById('adm-best')?.checked || false,
    badge: 'new', sales: 0
  };

  products.push(newProd);
  saveProducts(products);
  showToast('Produto adicionado!', name, '✅');
  renderAdmin();
}

function adminEditProduct(id) {
  state.editingProductId = id;
  renderAdmin();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function adminUpdateProduct(id) {
  const products = getProducts();
  const idx = products.findIndex(p => p.id === id);
  if (idx < 0) return;

  products[idx] = {
    ...products[idx],
    name: document.getElementById('adm-name')?.value?.trim() || products[idx].name,
    brand: document.getElementById('adm-brand')?.value?.trim() || products[idx].brand,
    category: document.getElementById('adm-cat')?.value || products[idx].category,
    price: parseFloat(document.getElementById('adm-price')?.value) || products[idx].price,
    oldPrice: parseFloat(document.getElementById('adm-oldprice')?.value) || null,
    discount: parseInt(document.getElementById('adm-disc')?.value) || 0,
    img: document.getElementById('adm-img')?.value || products[idx].img,
    description: document.getElementById('adm-desc')?.value || products[idx].description,
    featured: document.getElementById('adm-featured')?.checked || false,
    bestseller: document.getElementById('adm-best')?.checked || false,
  };

  saveProducts(products);
  state.editingProductId = null;
  showToast('Produto atualizado!', '', '✅');
  renderAdmin();
}

function adminDeleteProduct(id) {
  if (!confirm('Confirmar exclusão do produto?')) return;
  const products = getProducts().filter(p => p.id !== id);
  saveProducts(products);
  showToast('Produto removido', '', '🗑️');
  renderAdmin();
}

// ── FOOTER ────────────────────────────────────────────
function renderFooter() {
  const footer = document.getElementById('main-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="logo" style="margin-bottom:16px">
          <div class="logo-circle"><span class="logo-b7">B7</span></div>
          <div class="logo-text">
            <span class="logo-name">B7</span>
            <span class="logo-sub">SUPLEMENTOS</span>
          </div>
        </div>
        <p class="footer-desc">Suplementos nacionais e importados com qualidade premium e os melhores preços. Desde 2022 fazendo história em Belo Campo, BA.</p>
        <div class="footer-social">
          <a class="social-btn" href="#" title="Instagram">📷</a>
          <a class="social-btn" href="#" title="WhatsApp">💬</a>
          <a class="social-btn" href="#" title="Facebook">👥</a>
          <a class="social-btn" href="#" title="TikTok">🎵</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Categorias</h4>
        <ul class="footer-links">
          ${CATEGORIES.map(c => `<li><a onclick="filterAndGo('${c.id}')">${c.name}</a></li>`).join('')}
        </ul>
      </div>

      <div class="footer-col">
        <h4>Institucional</h4>
        <ul class="footer-links">
          <li><a onclick="navigateTo('about')">Sobre Nós</a></li>
          <li><a onclick="navigateTo('contact')">Contato</a></li>
          <li><a onclick="navigateTo('faq')">Perguntas Frequentes</a></li>
          <li><a onclick="showToast('Em breve!','','📄')">Política de Privacidade</a></li>
          <li><a onclick="showToast('Em breve!','','📄')">Termos de Uso</a></li>
          <li><a onclick="showToast('Em breve!','','🔄')">Trocas e Devoluções</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Atendimento</h4>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📍</span>
          <span class="footer-contact-text">Belo Campo, BA</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📱</span>
          <span class="footer-contact-text">(77) 9 9999-9999</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📧</span>
          <span class="footer-contact-text">contato@b7suplementos.com</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">🕐</span>
          <span class="footer-contact-text">Seg–Sex: 8h–18h<br>Sáb: 8h–12h</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-copy">
        © 2025 <strong>B7 Suplementos</strong>. Todos os direitos reservados. |
        Fazendo <strong>HISTÓRIA</strong> desde 2022!
      </div>
      <div class="payment-methods">
        <span class="payment-badge">💳 CARTÃO</span>
        <span class="payment-badge">⚡ PIX</span>
        <span class="payment-badge">📄 BOLETO</span>
      </div>
    </div>`;
}

// ── EVENT LISTENERS ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      liveSearch(e.target.value);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.value.trim()) {
        document.getElementById('search-dropdown')?.classList.add('hidden');
        navigateTo('products');
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrapper')) {
        document.getElementById('search-dropdown')?.classList.add('hidden');
      }
    });
  }

  // Search button
  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const q = document.getElementById('search-input')?.value?.trim();
      if (q) {
        document.getElementById('search-dropdown')?.classList.add('hidden');
        navigateTo('products');
      }
    });
  }

  // Hamburger
  const hambBtn = document.getElementById('hamburger-btn');
  if (hambBtn) {
    hambBtn.addEventListener('click', () => {
      document.getElementById('mobile-nav')?.classList.toggle('open');
    });
  }

  // Init
  renderPage();
  renderCartSidebar();
});

function closeMobileNav() {
  document.getElementById('mobile-nav')?.classList.remove('open');
}
