const salarioInput = document.getElementById("sal");
const tabela = {
    820: {percentagem : 0.00},
    935: {percentagem : 0.1325,
        valor: 2.6,
        valor2: 1135.39
    },
    1001: {percentagem : 0.18,
        valor: 1.4,
        valor2: 1385.20
    },
    1123: {percentagem : 0.18,
        valor: 96.82
    },
    1765: {percentagem : 0.26,
        valor: 186.66
    },
    2057: {percentagem : 0.3275,
        valor: 305.80
    },
    2664: {percentagem : 0.37,
        valor: 393.23
    },
    3193: {percentagem : 0.3872,
        valor: 439.05
    },
    4173: {percentagem : 0.4005,
        valor: 481.52
    },
    5470: {percentagem : 0.41,
        valor: 521.17
    },
    6540: {percentagem : 0.4270,
        valor: 614.16
    },
    20067: {percentagem : 0.4495,
        valor: 761.31 
    },
    20068: {percentagem : 0.4717,
        valor: 1206.80
    }
};
const resultado = document.getElementById("result");

function calcirs(){
    const salario = parseFloat(salarioInput.value);

    if (salario <= 820) {
        resultado.innerHTML = "O valor a descontar é 0€";
    } else if (salario <= 935) {
        const percentagem = tabela[935].percentagem;
        const valor = tabela[935].valor;
        const valor2 = tabela[935].valor2;
        const result = (salario * parseFloat(percentagem) * parseFloat(valor) * (parseFloat(valor2) - salario) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario <= 1001) {
        const percentagem = tabela[1001].percentagem;
        const valor = tabela[1001].valor;
        const valor2 = tabela[1001].valor2;
        const result = (salario * parseFloat(percentagem) * parseFloat(valor) * (parseFloat(valor2) - salario) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario <= 1123) {
        const percentagem = tabela[1123].percentagem;
        const valor = tabela[1123].valor;
        const result = (salario * parseFloat(percentagem) - parseFloat(valor) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario <= 1765) {
        const percentagem = tabela[1765].percentagem;
        const valor = tabela[1765].valor;
        const result = (salario * parseFloat(percentagem) - parseFloat(valor) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario <= 2057) {
        const percentagem = tabela[2057].percentagem;
        const valor = tabela[2057].valor;
        const result = (salario * parseFloat(percentagem) - parseFloat(valor) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario <= 2664) {
        const percentagem = tabela[2664].percentagem;
        const valor = tabela[2664].valor;
        const result = (salario * parseFloat(percentagem) - parseFloat(valor) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario <= 3193) {
        const percentagem = tabela[3193].percentagem;
        const valor = tabela[3193].valor;
        const result = (salario * parseFloat(percentagem) - parseFloat(valor) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario <= 4173) {
        const percentagem = tabela[4173].percentagem;
        const valor = tabela[4173].valor;
        const result = (salario * parseFloat(percentagem) - parseFloat(valor) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario <= 5470) {
        const percentagem = tabela[5470].percentagem;
        const valor = tabela[5470].valor;
        const result = (salario * parseFloat(percentagem) - parseFloat(valor) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario <= 6540) {
        const percentagem = tabela[6540].percentagem;
        const valor = tabela[6540].valor;
        const result = (salario * parseFloat(percentagem) - parseFloat(valor) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario <= 20067) {
        const percentagem = tabela[20067].percentagem;
        const valor = tabela[20067].valor;
        const result = (salario * parseFloat(percentagem) - parseFloat(valor) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    } else if (salario >= 20068) {
        const percentagem = tabela[20068].percentagem;
        const valor = tabela[20068].valor;
        const result = (salario * parseFloat(percentagem) - parseFloat(valor) / 1000);
        resultado.innerHTML = `O valor a descontar é ${parseFloat(result)}€`;
    }
}