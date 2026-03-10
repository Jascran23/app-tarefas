    class Todos {
    constructor() {
        // não capturamos nenhum parâmetro aqui
        // estamos definindo uma matriz de afazeres com dois exemplos de afazeres
        this.afazeres = [{
        titulo: "Curso de JavaScript",
        categoria: "trabalho"
        }, {
        titulo: "Meditação",
        categoria: "pessoal"
        }];
    }

    obterTudo() {
        //TODO: implemente este método
        return this.afazeres;
    }

    obterContagem() {
        //TODO: implemente este método
        return this.afazeres.length;
    }

    adicionar(titulo, categoria) {
        //TODO: implemente este método
        return this.afazeres.push({
            titulo: titulo,
            categoria: categoria,
            });

        
    }

    obterTrabalho() {
        //TODO: implemente este método
        const trampo = this.afazeres.filter(fazer => {
            return fazer.categoria === "trabalho";
        })

        return trampo
    }

    obterContagemDeTrabalho() {
        //TODO: implemente este método
        const trampo = this.afazeres.filter(fazer => {
            return fazer.categoria === "trabalho";
        })

        return trampo.length;
    }

    obterPessoal() {
        //TODO: implemente este método
        const pessoal = this.afazeres.filter(fazer => {
            return fazer.categoria === "pessoal";
        })
        return pessoal;
    }

    obterContagemPessoal() {
        return this.obterPessoal().length;
    }
    }

    const form = document.querySelector("#form-dos-afazeres");
    const titulo = document.querySelector("#titulo-dos-afazeres");
    const categoria = document.querySelector("#categoria-de-afazeres");
    const lista = document.querySelector("#lista-de-afazeres");
    const filtro = document.querySelector("#filtro-do-afazeres");
    const contagem = document.querySelector("#contagem-de-afazeres");

    const render = (itens, contagemDeItens) => {
    contagem.textContent = `(${contagemDeItens})`;
    lista.innerHTML = itens.map(todo => `<li>${todo.titulo} [${todo.categoria}]</li>`).join("");
    }

    const afazeres = new Todos();

    try {
    render(afazeres.obterTudo(), afazeres.obterContagem());
    } catch (error) {
    console.error(error);
    }

    form.addEventListener("submit", event => {
    event.preventDefault();
    try {
    afazeres.adicionar(titulo.value, categoria.value);
    render(afazeres.obterTudo(), afazeres.obterContagem());
    } catch (error) {
    console.error(error);
    }
    titulo.value = "";
    });

    filtro.addEventListener("change", () => {
    try {
    if (filtro.value === "trabalho") {
        // filtro trabalho
        render(afazeres.obterTrabalho(), afazeres.obterContagemDeTrabalho());
    } else if (filtro.value === "pessoal") {
        // filtro pessoal
        render(afazeres.obterPessoal(), afazeres.obterContagemPessoal());
    } else {
        // mostrar tudo
        render(afazeres.obterTudo(), afazeres.obterContagem());
    }
    } catch (error) {
    console.error(error);
    }
    });
