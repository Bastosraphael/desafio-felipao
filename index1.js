function somar(vitorias, derrotas) {
    return [vitorias - derrotas];
}

let resultado = somar(5, 3);

function classificacaoDoResultado(resultado){
    if (resultado <= 10 ) {
        return "guerreiro nivel Ferro"
    } else if (resultado < 11 >= 20){
        return "guerreiro nivel Bronze"
    } else if ( resultado < 21 >= 50){
        return "guerreiro nivel Prata"
    } else if ( resultado < 51 >= 80){
        return "guerreiro nivel Ouro"
    } else if ( resultado < 81 >= 90){
        return "guerreiro nivel Diamante"
    } else if ( resultado < 91 <= 100){
        return " guerreiro nivel Lendario"
    } else if ( resultado <= 101){
        return "guerreiro nivel imortal"
    }   
}

let nivelHeroi= classificacaoDoResultado (diferencaViteoriasDerrotas)

console.log ("O Herói tem de saldo de" + resultado + "está no nível de "+ diferencaViteoriasDerrotas)




