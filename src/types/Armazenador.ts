export class Armazenador{

        private constructor() {}

        // constructor criado para salvar no local storage 

     static   salvar(chave: string, valor: any) : void {

        // o método static permite que chame os métodos em outro arquivo sem precisar criar um objeto 

            const valorComoString  = JSON.stringify(valor); 
            // aqui serve para transaformar o valor em uma string 

            localStorage.setItem(chave, valorComoString); 

            //  aqui estamos setando o valor no local storage

        } // este é um método de salvamento  que usanmos  lembrando que isso apenas serve para o front end 
        // basicamente este método transforma os dados em json e salva no local storage

      static  obter<T>(chave: string, reviver?: (this: any, key: string, value: any) => any): T | null {

        // a  tag t ali é como se fosse pra definir um tipo mas funciona com qualque letra do alfabeto 

                const valor = localStorage.getItem(chave); 

                if (valor === null ){

                    return null 
                }

                if (reviver){

                    return JSON.parse(valor, reviver) as T ;
                }

                
                return JSON.parse(valor) as T ; 

                // aqui dentro foi feito uma validação na obtenção dos dados



        }
                
     // aqui é para obter os dados no local  storage  neste caso aqui esta buscando o extratos
     // o  revier ali é para fazer a conversão de um valor 

     // e recebe varias coisas como any pois pode receber vários valores sendo bem reutilizado.


}