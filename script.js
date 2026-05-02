// ============================================================
// B.1. Base de dados (JSON)
// ============================================================
const data = {
    produtos: [
        {
            id: 1,
            nome: "iPhone 15 Pro",
            preco: 8999.90,
            categoria: "Celulares",
            imagem: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
            descricao: "Smartphone Apple com tela Super Retina XDR de 6.1 polegadas e chip A17 Pro.",
            emEstoque: true
        },
        {
            id: 2,
            nome: "Samsung Galaxy S24",
            preco: 6499.00,
            categoria: "Celulares",
            imagem: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
            descricao: "Smartphone Samsung com câmera de 50MP e processador Snapdragon 8 Gen 3.",
            emEstoque: true
        },
        {
            id: 3,
            nome: "Notebook Dell Inspiron 15",
            preco: 4299.00,
            categoria: "Notebooks",
            imagem: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
            descricao: "Notebook com processador Intel Core i5, 8GB RAM e SSD de 512GB.",
            emEstoque: true
        },
        {
            id: 4,
            nome: "MacBook Air M3",
            preco: 12500.00,
            categoria: "Notebooks",
            imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
            descricao: "Notebook Apple com chip M3, 16GB de memória unificada e SSD de 512GB.",
            emEstoque: false
        },
        {
            id: 5,
            nome: "Fone Bluetooth JBL",
            preco: 299.90,
            categoria: "Acessórios",
            imagem: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
            descricao: "Fone de ouvido sem fio com bateria de até 40 horas e som puro JBL.",
            emEstoque: true
        },
        {
            id: 6,
            nome: "Mouse Logitech MX Master 3",
            preco: 749.00,
            categoria: "Acessórios",
            imagem: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
            descricao: "Mouse sem fio ergonômico com rolagem MagSpeed e até 70 dias de bateria.",
            emEstoque: true
        },
        {
            id: 7,
            nome: "PlayStation 5",
            preco: 3999.00,
            categoria: "Games",
            imagem: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
            descricao: "Console Sony PS5 com SSD ultrarrápido e controle DualSense.",
            emEstoque: true
        },
        {
            id: 8,
            nome: "Xbox Series X",
            preco: 4499.00,
            categoria: "Games",
            imagem: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop",
            descricao: "Console Microsoft com 1TB SSD, 4K nativo e até 120 fps.",
            emEstoque: false
        },
        {
            id: 9,
            nome: "Teclado Mecânico Redragon",
            preco: 349.90,
            categoria: "Acessórios",
            imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
            descricao: "Teclado mecânico gamer com switches blue e iluminação RGB.",
            emEstoque: true
        }
    ]
};

// ============================================================
// B.2. Seleção de elementos (DOM)
// ============================================================
const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const modalOverlay = document.getElementById("modal-overlay");
const closeModalBtn = document.getElementById("closeModal");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender = document.getElementById("btnRender");

// ============================================================
// B.3. Funções obrigatórias
// ============================================================

// formata o preço para o padrão brasileiro
function formatPrice(preco) {
    return "R$ " + preco.toFixed(2).replace(".", ",");
}

// cria um card de produto e retorna o elemento pronto
function createProductCard(produto) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", produto.id);
    card.setAttribute("data-categoria", produto.categoria);

    // ajuste visual via style (obrigatório pelo menos 1)
    card.style.padding = "12px";
    card.style.borderRadius = "8px";

    const img = document.createElement("img");
    img.setAttribute("src", produto.imagem);
    img.setAttribute("alt", produto.nome);

    const titulo = document.createElement("h3");
    titulo.classList.add("card-title");
    titulo.textContent = produto.nome;

    const categoria = document.createElement("span");
    categoria.classList.add("card-category");
    categoria.textContent = produto.categoria;

    const preco = document.createElement("p");
    preco.classList.add("card-price");
    preco.textContent = formatPrice(produto.preco);

    const botoes = document.createElement("div");
    botoes.classList.add("card-buttons");

    const btnDetalhes = document.createElement("button");
    btnDetalhes.classList.add("btn-details");
    btnDetalhes.textContent = "Ver detalhes";
    btnDetalhes.addEventListener("click", function () {
        showProductDetails(produto);
    });

    const btnDestacar = document.createElement("button");
    btnDestacar.classList.add("btn-highlight");
    btnDestacar.textContent = "Destacar";
    btnDestacar.addEventListener("click", function () {
        card.classList.add("highlight");
        // alternativa opcional para alternar:
        // card.classList.toggle("highlight");
    });

    botoes.appendChild(btnDetalhes);
    botoes.appendChild(btnDestacar);

    card.appendChild(img);
    card.appendChild(titulo);
    card.appendChild(categoria);
    card.appendChild(preco);
    card.appendChild(botoes);

    return card;
}

// renderiza a lista de produtos na página
function renderProducts(produtos) {
    productList.innerHTML = "";

    if (produtos.length === 0) {
        productList.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#777'>Nenhum produto encontrado.</p>";
        return;
    }

    produtos.forEach(function (produto) {
        const card = createProductCard(produto);
        productList.appendChild(card);
    });

    // B.5. Uso de querySelectorAll (obrigatório)
    const todosOsCards = document.querySelectorAll(".card");
    console.log("Total de cards renderizados:", todosOsCards.length);
    todosOsCards.forEach(function (cardEl) {
        console.log("Card data-id:", cardEl.getAttribute("data-id"));
        // efeito visual extra via style
        cardEl.style.transition = "transform 0.15s ease";
    });
}

// preenche o select de categorias dinamicamente
function renderCategories() {
    categorySelect.innerHTML = '<option value="Todas">Todas</option>';

    const categorias = [];
    data.produtos.forEach(function (produto) {
        if (categorias.indexOf(produto.categoria) === -1) {
            categorias.push(produto.categoria);
        }
    });

    categorias.forEach(function (cat) {
        const option = document.createElement("option");
        option.setAttribute("value", cat);
        option.textContent = cat;
        categorySelect.appendChild(option);
    });
}

// mostra os detalhes completos do produto em um modal
function showProductDetails(produto) {
    const estoqueClasse = produto.emEstoque ? "in-stock" : "out-stock";
    const estoqueTexto = produto.emEstoque ? "Em estoque" : "Indisponível";

    productDetails.innerHTML = `
        <button id="closeModal" class="close-modal" aria-label="Fechar">&times;</button>
        <h2>${produto.nome}</h2>
        <img src="${produto.imagem}" alt="${produto.nome}">
        <p><strong>Categoria:</strong> ${produto.categoria}</p>
        <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
        <p><strong>Status:</strong> <span class="${estoqueClasse}">${estoqueTexto}</span></p>
        <p><strong>Descrição:</strong> ${produto.descricao}</p>
    `;

    modalOverlay.classList.remove("hidden");
    document.querySelector("#closeModal").addEventListener("click", closeModal);
}

// fecha o modal de detalhes
function closeModal() {
    modalOverlay.classList.add("hidden");
}

// filtra a lista a partir do texto de busca e categoria selecionada
function filterProducts() {
    const texto = searchInput.value.trim().toLowerCase();
    const categoria = categorySelect.value;

    const filtrados = data.produtos.filter(function (produto) {
        const nomeBate = produto.nome.toLowerCase().includes(texto);
        const categoriaBate = categoria === "Todas" || produto.categoria === categoria;
        return nomeBate && categoriaBate;
    });

    return filtrados;
}

// ============================================================
// B.4. Eventos (addEventListener)
// ============================================================
searchInput.addEventListener("input", function () {
    renderProducts(filterProducts());
});

categorySelect.addEventListener("change", function () {
    renderProducts(filterProducts());
});

btnRender.addEventListener("click", function () {
    searchInput.value = "";
    categorySelect.value = "Todas";
    renderProducts(data.produtos);
    closeModal();
    console.log("Catálogo recarregado!");
});

// fechar modal ao clicar fora ou no botão X
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
});
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
        closeModal();
    }
});

// ============================================================
// Inicialização
// ============================================================
renderCategories();
renderProducts(data.produtos);
