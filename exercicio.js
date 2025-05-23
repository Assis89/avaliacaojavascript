// Função: calculadoraAvancada()
// Descrição:
// Peça dois números e a operação desejada (+, -, *, /, %, **). Use if/else para realizar a operação. Mostre o resultado com 
// document.write().

function calculadoraAvancada() {
    // Passo 1: Pedir os números
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));

    // Passo 2: Validar se são números válidos
    if (isNaN(n1) || isNaN(n2)) {
        document.wr("Erro: Você digitou um valor inválido.");
        return;
    }

    // Passo 3: Pedir a operação
    let operacao = prompt("Digite a operação desejada (+, -, *, /, %, **):");

    // Passo 4: Calcular o resultado
    let resultado;

    if (operacao === "+") {
        resultado = n1 + n2;
    } else if (operacao === "-") {
        resultado = n1 - n2;
    } else if (operacao === "*") {
        resultado = n1 * n2;
    } else if (operacao === "/") {
        resultado = n1 / n2;
    } else if (operacao === "%") {
        resultado = n1 % n2;
    } else if (operacao === "**") {
        resultado = n1 ** n2;
    } else {
        document.write("Operação inválida.");
        return;
    }

    // Passo 5: Mostrar o resultado
    document.write(`O resultado de ${n1} ${operacao} ${n2} é: <strong>${resultado}</strong>`);
}


// Questão 2 – Classificação Etária
// Função: classificarIdade()
// Descrição:
// Peça a idade do usuário e classifique em:
// • Até 12: Criança
// • 13 a 17: Adolescente
// • 18 a 59: Adulto
// • 60 ou mais: Idoso




function classificarIdade() {
    let idade = parseFloat(prompt("Digite sua idade:"));

    // Verifica se o valor digitado é um número
    if (isNaN(idade)) {
        document.write("Erro: você digitou uma idade inválida.");
        return;
    }

    // Verifica a faixa etária
    if (idade <= 12) {
        document.write("Classificação: Criança");
    } else if (idade >= 13 && idade <= 17) {
        document.write("Classificação: Adolescente");
    } else if (idade >= 18 && idade <= 59) {
        document.write("Classificação: Adulto");
    } else {
        document.write("Classificação: Idoso");
    }
}

// Questão 3 – Tabuada com Intervalo
// Função: tabuadaPersonalizada()
// Descrição:
// Peça um número base e um número final. Mostre a tabuada do número base até o limite escolhido usando for.

function tabuadaPersonalizada() {
    let base = parseFloat(prompt("Digite um número:"));
    let final = parseFloat(prompt("Digite até que número quer que a tabuada va"));

    if (isNaN(base) || isNaN(final)) {
        document.writeln("Erro: Você digitou um valor inválido.");
        return;
    }
    for (let i = 1; i <= final; i++) {
        let resultado = base * i;
        document.write(`${base} x ${i} = ${resultado} <br>`);
    }
}

// Questão 4 – Soma de Pares com while
// Função: somaParesWhile()
// Descrição:
// Peça um número limite e some todos os pares de 1 até ele usando while. Mostre a soma com document.write().


function somaParesWhile() {
    let numero = parseInt(prompt("Digite um número limite:"));
    
    if (isNaN(numero) || numero < 1) {
        document.writeln("Digite um número válido maior ou igual a 1!");
        return;
    }
    
    let soma = 0;
    let i = 1;
    
    while (i <= numero) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;
    }
    
    document.writeln(`A soma dos números pares de 1 até ${numero} é: ${soma}`);
}

// Questão 5 – Validação de Senha com Tentativas
// Função: validaSenha()
// Descrição:
// Peça uma senha via prompt(). Permita até 3 tentativas. Senha correta: "senai123". Mostre "Acesso permitido" ou 
// "Acesso bloqueado".

function validaSenha() {
    const senhaCorreta = "senai123";
    let tentativas = 3;
    let acessoPermitido = false;

    while (tentativas > 0) {
        let senha = prompt("Digite a senha:");

        if (senha === senhaCorreta) {
            acessoPermitido = true;
            break;
        } else {
            tentativas--;
            alert(`Senha incorreta! Tentativas restantes: ${tentativas}`);
        }
    }

    if (acessoPermitido) {
        document.writeln("Acesso permitido");
    } else {
        document.writeln("Acesso bloqueado");
    }
}




// Questão 6 – Fatorial com Validação
// Função: calcularFatorial()
// Descrição:
// Peça um número inteiro positivo e calcule o fatorial usando for. Valide a entrada e exiba o resultado.


function calcularFatorial() {
    let num = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(num) || num < 0) {
        document.writeln("Número inválido. Por favor, digite um inteiro positivo.");
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }

    document.writeln(`O fatorial de ${num} é: ${fatorial}`);
}


// Questão 7 – Verificação de Número Primo
// Função: verificarPrimo()
// Descrição:
// Peça um número inteiro. Verifique se é primo e mostre uma mensagem com document.write().


function verificarPrimo() {
    let num = parseInt(prompt("Digite um número inteiro:"));

    if (isNaN(num) || num < 2) {
        document.writeln("Digite um número inteiro maior ou igual a 2.");
        return;
    }

    let primo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        document.writeln(`${num} é um número primo.`);
    } else {
        document.writeln(`${num} não é um número primo.`);
    }
}




// Questão 8 – Média com Entradas Ilimitadas
// Função: mediaAritmetica()
// Descrição:
// Peça números até o usuário digitar "fim". Calcule a média dos números inseridos com while.


function mediaAritmetica() {
    let soma = 0;
    let contador = 0;
    let entrada;

    while (true) {
        entrada = prompt("Digite um número (ou 'fim' para terminar):");

        if (entrada.toLowerCase() === "fim") {
            break;
        }

        let num = parseFloat(entrada);

        if (!isNaN(num)) {
            soma += num;
            contador++;
        } else {
            alert("Entrada inválida! Digite um número ou 'fim'.");
        }
    }

    if (contador > 0) {
        let media = soma / contador;
        document.writeln(`A média dos números digitados é: ${media.toFixed(2)}`);
    } else {
        document.writeln("Nenhum número válido foi digitado.");
    }
}



// Questão 9 – Contador Regressivo
// Função: contadorRegressivo()
// Descrição:
// Peça um número maior que zero. Mostre contagem regressiva até 0 com while.

function contadorRegressivo() {
    let num = parseInt(prompt("Digite um número maior que zero:"));

    if (isNaN(num) || num <= 0) {
        document.writeln("Número inválido! Deve ser maior que zero.");
        return;
    }

    document.writeln("Contagem regressiva:<br>");
    while (num >= 0) {
        document.writeln(num + "<br>");
        num--;
    }
}




// Questão 10 – Verificação de múltiplos critérios com for e operadores lógicos
// Peça ao usuário um número inicial e um número final. Use um laço for para percorrer esse intervalo e:
// Exibir apenas os números que sejam pares e múltiplos de 3 ao mesmo tempo.
// Exiba uma mensagem se nenhum número satisfizer a condição.
// Utilize os operadores lógicos (&&, ||) para aplicar a regra.

// Exemplo:
// Se o usuário informar início = 1 e fim = 15, o script deve exibir:
// 6 e 12 (são pares e múltiplos de 3).


function verificarParesMultiplos() {
    let inicio = parseInt(prompt("Digite o número inicial:"));
    let fim = parseInt(prompt("Digite o número final:"));

    if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
        document.writeln("Intervalo inválido!");
        return;
    }

    let encontrou = false;
    document.writeln(`Números pares e múltiplos de 3 entre ${inicio} e ${fim}:<br>`);

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            document.writeln(i + "<br>");
            encontrou = true;
        }
    }

    if (!encontrou) {
        document.writeln("Nenhum número satisfaz a condição.");
    }
}


// Exemplo:
// Se o usuário informar início = 1 e fim = 15, o script deve exibir:
// 6 e 12 (são pares e múltiplos de 3).