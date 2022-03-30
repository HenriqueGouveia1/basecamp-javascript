class ContaBanc {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this._saldo = 0;
        this.tipo = tipo;
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (valor > this._saldo) return;
        this._saldo -= valor;
    }
    depositar(valor){
        if (valor < 0) return;
        this._saldo += valor;
    }

}

class ContaCorrente extends ContaBanc{
    constructor(cartaoCredito){
        super(agencia, numero, tipo,cartaoCredito)
        this.tipo = 'corrente'
        this.cartaoCredito = cartaoCredito
    }

    get cartaoCredito(){
        return this.cartaoCredito
    }
    set cartaoCredito(valor){
        this.cartaoCredito = valor
    }
}

class ContaPoupanca extends ContaBanc{
    constructor(){
        super(agencia, numero, tipo)
        this.tipo = 'poupanca'
    }

}

class ContaUniversitaria extends ContaBanc{
    constructor(){
        super(agencia, numero, tipo)
        this.tipo = 'universitaria'
    }

    sacar(valor) {
        if (valor > 500) return;
        this._saldo -= valor;
    }
}

