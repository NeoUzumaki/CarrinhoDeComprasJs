let total;
limpar();

function adicionar (){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade<1){
        quantidade=1;
    }
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML +`<section class="carrinho__produtos__produto">
                            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
                            </section>`
    total = total + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = '';
}   

function limpar(){
    total=0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
