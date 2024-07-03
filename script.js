const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Eu gosto de ir para eventos?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "Sim"
            },
            {
                texto: "Não horrível",
                afirmacao: "Sim maravilhoso"
            }           
        ]
    },
    {
        enunciado: "Fazer churrasco no final de semana?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "Sim"
            },
            {
                texto: "Churrasco com amigos",
                afirmacao: "Churrasco com família"
            }
        ]
    },
    {
        enunciado: "Eu gosto de ir no shopping?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "Sim"
            },
            {
                texto: "Ficar em casa",
                afirmacao: "Ir no shopping"
            }
        ]
    },
    {
        enunciado: "Você toma alguma bebida?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "Sim"
            },
            {
                texto: "Sempre",
                afirmacao: "Às vezes"
            }
        ]
    },
    {
        enunciado: "Você toma alguma bebida no final de semana?",
        alternativas: [
            {
                texto: "Não",
                afirmacao: "Sim"
            },
            {
                texto: "Tomar refrigerante",
                afirmacao: "Tomar bebida alcoólica"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpa o conteúdo anterior das alternativas
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = ""; // Limpa o conteúdo das alternativas
}

mostraPergunta();

