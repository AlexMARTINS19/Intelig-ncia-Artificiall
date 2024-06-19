const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: Eu gosto ir pro eventos?
        alternativas: [
            {
                texto: Não
                afirmacao: Sim
            },
            {
                texto: Não horrível 
                afirmacao: Sim maravilhoso 
            }           
            
        ]
    },
    {
        enunciado: Fazer churrasco final de semana?
        alternativas: [
            {
                texto: Não
                afirmacao: Sim
            },
            {
                texto: Churrasco com amigos
                afirmacao: Churrasco com família 
            }
        ]
    },
    {
        enunciado: Eu gosto ir no shopping?
        alternativas: [
            {
                texto:Não 
                afirmacao:Sim
            },
            {
                texto: ficar em casa
                afirmacao:ir no shopping 
            }
            
        ]
    },
    {
        enunciado: você toma uma bebida?
        alternativas: [
            {
                texto:Não 
                afirmacao:Sim
            },
            {
                texto: Sempre 
                afirmacao: As vezes 
            }
            
        ]
    },
    {
        enunciado: você toma uma bebida final de semana?
        alternativas: [
                texto: Não 
                afirmacao: Sim
            },
            {
                texto: tomar refrigerante 
                afirmacao:tomar bebida de álcool 
            }
            
            


let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
