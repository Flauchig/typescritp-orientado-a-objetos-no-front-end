export function ValidaDebito(target, propertykey, descriptor) {
    // o valida debito está como any  pois recebe vários formatos 
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
        if (valorDoDebito < 0) {
            throw new Error("O valor do debito deve ser positivo");
        }
        if (valorDoDebito > this.saldo) {
            throw new Error("O saldo é insuficiente para realizar esta operação");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    };
    return descriptor;
}
export function ValidaDeposito(target, propertykey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (ValorDoDeposito) {
        if (ValorDoDeposito <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        return originalMethod.apply(this, [ValorDoDeposito]);
    };
    return descriptor;
}
// aqui foi aplicado um decorator para validar o debito usado  podemos usar varios decoratos lembrando que precisamos colcoar o suporte dele no JSON 
