const CPF = '736.111.970-09'

function validarCPF(cpf) {
    /* 
        Retorna true se o cpf for valido
        Retorna false se o cpf for invalido
    */
    // limpar string cpf 
    cpfLimpo = cpf.replace(/\D+/g, '')
    // Transformar cpf de string para um array
    cpfArray = Array.from(cpfLimpo)
    // Calculo do primeiro digito
    resultado = cpfArray.slice(0, 9).reduce(
        (acu, curr, ind) => {
            acu += Number(curr) * (10 - ind)
            return acu
        }, 0
    );
    resto = resultado % 11
    digito1 = 11 - resto
    if (digito1 > 9) digito1 = 0
    // Calculo do segundo digito

    resultado2 = cpfArray.slice(0, 9).concat(digito1).reduce(
        (acu, curr, ind, arr) => {
            acu += Number(curr) * (11 - ind)
            return acu
        }, 0
    );
    resto2 = resultado2 % 11
    digito2 = 11 - resto2
    if (digito2 > 9) digito2 = 0
    // Validacao do cpf
    const cpfGerado = cpfArray.slice(0, 9).concat(digito1).concat(digito2).join('')

    if (cpfGerado === cpfLimpo) {
        return true
    } else {
        return false
    }
}

console.log(validarCPF(CPF))










