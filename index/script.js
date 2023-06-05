// JavaScript para exibir ou ocultar a lista de categorias ao clicar no botão "Categorias"
document.querySelector('.dropdown').addEventListener('click', function() {
  var dropdownContent = this.querySelector('.dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
// Array de categorias
var categorias = ['Livros', 'Categoria 2', 'Categoria 3'];

// Função para criar a lista suspensa de categorias
function criarListaCategorias() {
  var dropdownContent = document.querySelector('.dropdown-content');

  // Limpar a lista suspensa de categorias
  dropdownContent.innerHTML = '';

  // Adicionar cada categoria à lista suspensa
  categorias.forEach(function(categoria) {
    var link = document.createElement('a');
    link.href = '#';
    link.textContent = categoria;
    dropdownContent.appendChild(link);
  });
}

// Evento de clique no botão "Categorias"
var categoriasBtn = document.querySelector('.dropbtn');
categoriasBtn.addEventListener('click', function() {
  var dropdownContent = document.querySelector('.dropdown-content');

  // Alternar a exibição da lista suspensa de categorias
  dropdownContent.classList.toggle('show');
});

// Chamar a função para criar a lista suspensa de categorias inicialmente
criarListaCategorias();

function buscarProdutos() {
  var termoPesquisa = document.getElementById('barra-pesquisa').value;
  var resultados = []; // Array vazio para armazenar os resultados da pesquisa

  // Aqui você deve implementar a lógica de busca adequada ao seu caso
  // Por exemplo, você pode fazer uma requisição a uma API ou buscar em um conjunto de dados local

  // Exemplo de lógica de busca simples
  if (termoPesquisa.trim() !== '') {
    // Limpar os resultados anteriores
    document.getElementById('resultados-pesquisa').innerHTML = '';

    // Simular resultados da pesquisa
    resultados = [
      { nome: 'Produto 1', preco: 'R$ 10,00' },
      { nome: 'Produto 2', preco: 'R$ 20,00' },
      { nome: 'Produto 3', preco: 'R$ 30,00' }
    ];
  }

  // Exibir os resultados da pesquisa
  var resultadosHTML = '';
  resultados.forEach(function(produto) {
    resultadosHTML += '<div class="produto-pesquisa">' +
                      '<h3>' + produto.nome + '</h3>' +
                      '<p>Preço: ' + produto.preco + '</p>' +
                      '</div>';
  });

  document.getElementById('resultados-pesquisa').innerHTML = resultadosHTML;
}


