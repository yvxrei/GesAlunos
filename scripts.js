
function fillDiv1 (){
    let frase = document.getElementById('frase').value
    const c = document.querySelector('.div1')
    const cbVermelho = document.getElementById('cbVermelho')
    const cbVerde = document.getElementById('cbVerde')

    if(cbVermelho.checked && !cbVerde.checked) {
        div1.style.color = 'red'
        document.getElementById('div1').innerHTML = frase
    }
    else if(!cbVermelho.checked && cbVerde.checked) {
        div1.style.color = 'green'
        document.getElementById('div1').innerHTML = frase
    }
    else if(cbVermelho,checked && cbVerde.checked){
        div1.style.color = 'black'
        document.getElementById('div1').innerHTML = frase
    }
    else {
        div1.style.color = 'blue'
        document.getElementById('div1').innerHTML = frase
    }
    
} 

function clearDiv1 (){
    document.getElementById('frase').value = '';
    document.getElementById('div1').innerHTML = '';
}