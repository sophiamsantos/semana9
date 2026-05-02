# Semana 9 — Mini Ecommerce (Catálogo em Cards)

## Identificação
- **Nome:** _preencher com seu nome_
- **Matrícula:** _preencher com seu número de matrícula_

## Sobre a atividade
Aplicação simples no estilo eCommerce que lista produtos em cards a partir de um array de objetos (JSON), praticando funções em JavaScript e manipulação do DOM.

## Estrutura de arquivos
- `index.html` — estrutura da página (controles, lista, detalhes)
- `styles.css` — estilos do layout, cards e destaque
- `script.js` — lógica: dados, funções, eventos, render dos cards

## Como executar
1. Abra a pasta no Visual Studio Code.
2. Abra o arquivo `index.html` no navegador (clique duplo ou via Live Server).
3. Use os controles:
   - **Busca:** filtra cards pelo nome do produto
   - **Categoria:** filtra cards pela categoria
   - **Renderizar:** recarrega o catálogo do zero
   - **Ver detalhes:** preenche a área lateral com os dados completos
   - **Destacar:** adiciona um destaque visual ao card

## Recursos do DOM utilizados
- `getElementById`, `querySelector`, `querySelectorAll`
- `innerHTML`
- `createElement`, `setAttribute`, `appendChild`
- `classList.add`, `style`
- `addEventListener` (click, input, change)

## Prints

### Tela com os cards renderizados
![Catálogo de produtos](imagens/imagemsiteecommerc.png)

### Detalhes do produto (modal aberto)
![Detalhes do produto](imagens/detalheseccomerce.png)

### Console do navegador (data-id via querySelectorAll)
![Console DevTools](imagens/imagemconsoleccomerce.png)
