document.addEventListener("DOMContentLoaded", () => {
  const whatsappNumber = "5511959624815";

  const products = [
    {
      name: "Camisa Brasil ",
      category: "selecoes",
      categoryLabel: "Seleções",
      oldPrice: "R$239,90",
      price: "R$209,90",
      description: "Camisa premium da seleção brasileira em promoção.",
      image: "catalogorfct/brasilfrente.png",
      promo: true
    },
    {
      name: "Camisa Argentina Edição Especial ",
      category: "selecoes",
      categoryLabel: "Seleções",
      oldPrice: "R$239,90",
      price: "R$209,90",
      description: "Modelo especial com visual de destaque.",
      image: "catalogorfct/Camisa Argentina Edição Especial 2025 Jogador Masculina.png",
      promo: true
    },
    {
      name: "Camisa França ",
      category: "selecoes",
      categoryLabel: "Seleções",
      oldPrice: "R$239,90",
      price: "R$209,90",
      description: "Versão jogador com ótimo acabamento.",
      image: "catalogorfct/franca26.png",
      promo: true
    },
    {
      name: "Camisa Portugal ",
      category: "selecoes",
      categoryLabel: "Seleções",
      oldPrice: "R$239,90",
      price: "R$209,90",
      description: "Modelo de seleção com visual moderno.",
      image: "catalogorfct/portugalverde.png",
      promo: true
    },
    {
      name: "Camisa Flamengo ",
      category: "clubes",
      categoryLabel: "Clubes",
	  oldPrice: "179,90",
      price: "R$144,90",
      description: "Modelo de clube premium para o dia a dia.",
      image: "catalogorfct/camisaflamengo.png"
    },
    {
      name: "Camisa Corinthians ",
      category: "clubes",
      categoryLabel: "Clubes",
	  oldPrice: "179,90",
      price: "R$144,90",
      description: "Modelo clássico com ótimo visual.",
      image: "catalogorfct/camisacorinthians26preta.png"
    },
    {
      name: "Camisa Real Madrid ",
      category: "clubes",
      categoryLabel: "Clubes",
	  oldPrice:"179,90",
      price: "R$144,90",
      description: "Camisa premium do gigante espanhol.",
      image: "catalogorfct/camisarealmadridbranca.png"
    },
    {
      name: "Camisa São Paulo ",
      category: "clubes",
      categoryLabel: "Clubes",
	  oldPrice: "179,90",
      price: "R$149,90",
      description: "Modelo torcedor com caimento confortável.",
      image: "catalogorfct/saopaulo2526.png"
    },
    {
      name: "Regata Lakers",
      category: "nba",
      categoryLabel: "NBA",
	  oldPrice: "199,90",
      price: "R$159,90",
      description: "Modelo NBA com visual forte e confortável.",
      image: "catalogorfct/Camisa De Basquete Nba Lakers - 77 Luka Doncic.png"
    },
    {
      name: "Regata Bulls",
      category: "nba",
      categoryLabel: "NBA",
	  oldPrice: "199,90",
      price: "R$159,90",
      description: "Peça clássica e muito procurada.",
      image: "catalogorfct/bulls.png"
    },
    {
      name: "Camisa Brasil Feminina ",
      category: "feminino",
      categoryLabel: "Feminino",
	  oldPrice: "209,90",
      price: "R$199,90",
      description: "Modelo feminino premium com ótimo caimento.",
      image: "catalogorfct/brasil2feminina.png"
    },
    {
      name: "Kit Infantil Barcelona ",
      category: "infantil",
      categoryLabel: "Infantil",
	  oldPrice: "209,90",
      price: "R$169,90",
      description: "Kit infantil confortável e estiloso.",
      image: "catalogorfct/infantilbarcelona26.png"
    },
	{
      name: "Camisa São Paulo Feminina ",
      category: "feminino",
      categoryLabel: "feminino",
	  oldPrice: "179,90",
      price: "R$149,90",
      description: "Modelo torcedor com caimento confortável.",
      image: "catalogorfct/saopaulofem2.png"
    },
	{
		name: "Brasil edição especial",
		category: "selecoes",
		categoryLabel: "Seleções",
		oldPrice: "299,90",
		price: "199,90",
		description: "Modelo especial favela seleção brasileira retrô",
		image: "catalogorfct/brasilfavela.png"
	},
	{
		name:"Santos edição especial CharlieBrown",
		category:"clubes",
		categoryLabel:"Clubes",
		oldPrice:"229,90",
		price:"189,90",
		description:"Modelo especial homenagem CharlieBrown",
		image:"catalogorfct/santoscharliebrown.png"
	},
	{
		name:"Corinthians-AllBlack ",
		category:"clubes",
		categoryLabel:"Clubes",
		oldPrice:"249,90",
		price:"189,90",
		description:"Modelo Jogador de alta qualidade e conforto",
		image:"catalogorfct/corinthiansallblack.png"
	},
	{
		name:"Camisa Alemanhã ",
		category:"selecoes",
		categoryLabel:"Seleções",
		oldPrice:"249,90",
		price:"209,90",
		description:"Modelo torcedor com caimento confortável.",
		image:"catalogorfct/alemanha26.png"
	},
	{
		name:"Camisa Vasco Branca",
		category:"clubes",
		categoryLabel:"Clubes",
		oldPrice:"169,90",
		price:"149,90",
		description:"Modelo Jogador com caimento confortável.",
		image:"catalogorfct/vasco26bran.png"
	},
	{
		name:"Camisa Fluminense Branca",
		category:"clubes",
		categoryLabel:"Clubes",
		oldPrice:"169,90",
		price:"149,90",
		description:"Modelo torcedor com caimento confortável.",
		image:"catalogorfct/flu27.png"
	},
	{
		name:"Camisa Fluminense Feminina Branca",
		category:"feminino",
		categoryLabel:"feminino",
		oldPrice:"169,90",
		price:"149,90",
		description:"Modelo torcedor com caimento confortável.",
		image:"catalogorfct/flufem2.png"
	},
  ];


  const productsGrid = document.getElementById("productsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const faqItems = document.querySelectorAll(".faq-item");

  if (!productsGrid) {
    console.error("Elemento #productsGrid não encontrado.");
    return;
  }

  function createWhatsAppLink(product) {
    const message =
      `Olá! Tenho interesse na ${product.name}.\n` +
      `Valor: ${product.price}.\n` +
      `Pode me passar tamanhos e disponibilidade?`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image-box">
        ${product.promo ? '<span class="promo-badge">PROMOÇÃO</span>' : ""}
        <img class="product-image produto" src="${product.image}" alt="${product.name}">
      </div>

      <div class="product-content">
        <span class="product-category">${product.categoryLabel}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>

        <div class="price-row">
          ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ""}
          <span class="product-price">${product.price}</span>
        </div>

        <a
          class="product-button"
          href="${createWhatsAppLink(product)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar no WhatsApp
        </a>
      </div>
    `;

    return card;
  }

  function renderProducts(category = "todos") {
    productsGrid.innerHTML = "";

    const filteredProducts =
      category === "todos"
        ? products
        : products.filter((product) => product.category === category);

    filteredProducts.forEach((product) => {
      productsGrid.appendChild(createProductCard(product));
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.category || "todos");
    });
  });

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });

  renderProducts();
});
