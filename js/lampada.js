
const sortearInterruptor = () =>  {
    const interruptor01 = document.getElementById("interruptor01");
    const interruptor02 = document.getElementById("interruptor02");
    const interruptor03 = document.getElementById("interruptor03");
    const num = [interruptor01, interruptor02 , interruptor03];
    const indice = Math.floor(Math.random() * num.length);
    const interruptor = num[indice];
    return interruptor;
}

document.addEventListener("DOMContentLoaded", function() {
    window.interruptor = sortearInterruptor();
});



const acendeApaga = () => {
    const lampada = document.getElementById("lampada");
    const lampadaDesligada = "img/lampadaDesligada.jpg";
    const lampadaLigada = "img/lampadaLigada.jpg";
 
    if(interruptor.checked){
        lampada.src = lampadaLigada;
        quenteOuFrio();
    }else {
        lampada.src = lampadaDesligada;    
    }  
}


const abrirPorta = () =>{
    document.getElementById('lampada').style.display = 'block';
    document.getElementById('porta').style.display = 'none';
}


const fecharPorta = () =>{
    document.getElementById('lampada').style.display = 'none';
    document.getElementById('porta').style.display = 'block';
}


const resposta = () =>{
     const resposta = document.getElementById('resposta');

     if(resposta.style.display === 'none'){
        resposta.style.display = 'block';
     }else{
        resposta.style.display = 'none';
     } 
}


let cont = 0;
const quenteOuFrio = () =>{
    cont += 1;
    if(cont>0){
        mensagemFrioOuQuente("A lampada esta Quente");
    }  
}


const mensagemFrioOuQuente = (mensagem) => {
    const lampada = document.getElementById("lampada");
    const mensagemQuente = document.getElementById('mensagemQuente');
    lampada.addEventListener('mouseover' , function (){
        mensagemQuente.textContent = mensagem;
        mensagemQuente.style.display = 'block';
    });

    lampada.addEventListener('mouseout', function (){
        mensagemQuente.style.display = 'none';
    })
}

  



