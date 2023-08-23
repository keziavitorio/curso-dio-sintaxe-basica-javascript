function calculadora() {

  if (!operacao || operacao >= 5) {
    alert('operação invalida')
    calculadora()
  } else {
    let n1 = parseInt(prompt('insira um numero'))
    let n2 = parseInt(prompt('insira um numero'))
    let resultado;

    const operacao = prompt('escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-)\n 3 - Multiplicação (x)\n 4- Divisão (/)')

    function som() {
      resultado = n1 + n2
      alert(`o resultado é ${resultado}`)
      novaOperacao()
    }
    function sub() {
      resultado = n1 - n2
      alert(`o resultado é ${resultado}`)
      novaOperacao()
    }
    function mult() {
      resultado = n1 * n2
      alert(`o resultado é ${resultado}`)
      novaOperacao()
    }
    function div() {
      resultado = n1 / n2
      alert(`o resultado é ${resultado}`)
      novaOperacao()
    }
    
  
    if (operacao == 1) {
      som()
    } else if (operacao == 2) {
      sub()
    } else if (operacao == 3) {
      mult()
    } else if (operacao == 4) {
      div()
    }
  
    function novaOperacao() {
      let opcao = prompt('deseja fazer outra operação?\n 1- Sim\n 2- Não')
  
      if (opcao == 1) {
        calculadora()
      } else if (opcao == 2) {
        alert('tchau!')
      } else {
        alert('ops, não entendi. tente de novo!')
        novaOperacao()
      }
    }
  }
} 

calculadora()

/* // escolhendo operação
    // usand if && else
    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } */


/*     // usando switch case
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }
}

calculadora(); */