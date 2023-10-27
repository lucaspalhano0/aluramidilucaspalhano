
function TocasSom (iDElementoAudio)  {
}

const listadeteclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listadeteclas.length; contador++) {
     
    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList [1];
    const idaudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        TocasSom (idAudio);
    }
}