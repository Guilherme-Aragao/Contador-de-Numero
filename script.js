function contar() {
   let ini = document.getElementById('txtinicio')

    let fim = document.getElementById('txtfim')
    
    let passo = document.getElementById('txtpasso')

    let resultado = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
         resultado.innerHTML = 'Impossivel contar'
         window.alert('[ERRO] Preencha todos os campos.')
    
    }
    
    else {
       resultado.innerHTML = 'Contando: <br>' 
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }

       if (i < f) {
        //contagem crescente
       for(let c = i; c <= f; c += p) {
        resultado.innerHTML += `${c} \u{1F449}`
       }

       } 
       else {
        //contagem regresciva
        for(let c = i; c>= f; c -= p){
        resultado.innerHTML += `${c} \u{1F449}`
       
        }

    }
      
    resultado.innerHTML += `\u{1F3C1}`
    }

}
    