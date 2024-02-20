export class Armazenador {
    constructor() { }
    // constructor criado para salvar no local storage 
    static salvar(chave, valor) {
        // o método static permite que chame os métodos em outro arquivo sem precisar criar um objeto 
        const valorComoString = JSON.stringify(valor);
        // aqui serve para transaformar o valor em uma string 
        localStorage.setItem(chave, valorComoString);
        //  aqui estamos setando o valor no local storage
    } // este é um método de salvamento  que usanmos  lembrando que isso apenas serve para o front end 
    // basicamente este método transforma os dados em json e salva no local storage
    static obter(chave, reviver) {
        // a  tag t ali é como se fosse pra definir um tipo mas funciona com qualque letra do alfabeto 
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
        // aqui dentro foi feito uma validação na obtenção dos dados
    }
}
