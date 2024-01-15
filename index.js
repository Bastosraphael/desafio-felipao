let xpHeroi = 0
let nickHeroi = "Raphael"
let niveis = ["ferro, bronze, brata, ouro, platina, ascendente, imortal, raridade"]
let faixasExperiencia = [1000, 2000, 5000, 7000, 8000, 9000, 10000, Infinity]
let nivelHeroi = null
let mensagem = "o heroi de nome" + nickHeroi + "esta no nivel" + nivelHeroi

for(let i = 0; i < faixasExperiencia; i++){
    if (xpHeroi < faixasExperiencia[i]){
        nivelHeroi = niveis[i]
        break
    }
}

console.log(mensagem)