// ---------------------------------------CONSTRUTOR DE PRODUTOS

class produto {
    construtor(id, nome, imagem, categoria, preço, estoque, vendido) {
        this.id = id
        this.nome = nome;
        this.imagem = imagem;
        this.categoria = categoria;
        this.preço = preço;
        this.estoque = estoque;
        this.vendido = vendido;
    }
    tela() {
        console.log("Restam apenas " + this.estoque + " do produto " + this.nome);
    }
}

const cadeiraComfy = new produto(1, "Cadeira Comfy", "../imagem/produtos/outline-sofa/outline-sofa.png", "cadeira", 1490.90, 16, false);

console.log(cadeiraComfy)


const produtos = [{
    id: 1,
    imagem: "imagem/produtos/outline-sofa/outline-sofa.png",
    produto: "Cadeira Comfy",
    categoria: "cadeira",
    preço: 1490.90,
    estoque: 16,
    vendido: false
},
{
    id: 2,
    imagem: "imagem/produtos/sofa-phillip/sofa-phillip.png",
    produto: "Sofa Outline",
    categoria: "sofa",
    preço: 6390.90,
    estoque: 8,
    vendido: false
},
{
    id: 3,
    imagem: "imagem/produtos/cadeira-comfy/cadeira-confy.jpg",
    produto: "Sofa Phillip",
    categoria: "sofa",
    preço: 4190.90,
    estoque: 3,
    vendido: false
},
{
    id: 4,
    imagem: "imagem/produtos/cadeira-quad/cadeira-quad.jpg",
    produto: "Cadeira Quad",
    categoria: "cadeira",
    preço: 1860.90,
    estoque: 15,
    vendido: false
}];