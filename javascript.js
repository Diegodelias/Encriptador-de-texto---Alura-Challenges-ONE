
const texto1 = document.getElementById('texto1');
const texto2 = document.getElementById('texto2');
const botonEncriptar = document.getElementById('btn_encriptar');
const botonDesencriptar = document.getElementById('btn_desencriptar');
const botonCopiar = document.getElementById('copiar');
 //navigator clipboard meto write text

 


const encriptarLetras = (letra) => {
    let letraFinal = '';
    //definir variable a retornar
    //si letra igual a e convertir a "enter"
    if (letra === 'e') {
       letraFinal = "enter"
    } 
     
    else  if (letra === 'i'){
        letraFinal = 'imes'
    }
    
    else  if (letra === 'a'){
        letraFinal = 'ai'
    }
    else  if (letra === 'o'){
        letraFinal = 'ober'
    }
    else  if (letra === 'u'){
        letraFinal = 'ufat'
    }
    
    
    
    else {
        letraFinal = letra;
    }
   
   return letraFinal;
   
   
   } ;



   


const encriptar = (texto) => {
     //definir variable de resultado
    //pasar texto a minusculas
    let arrayLetras = [];
    let textoMinusculas = texto.toLowerCase();
     //iterar cada letra de la palabra y pasarla a funcion que haga las comparaciones
    for (let i= 0; i < textoMinusculas.length ; i++){
          arrayLetras.push(encriptarLetras(textoMinusculas[i]));
          

    }
    texto2.value = arrayLetras.join('');
    return arrayLetras.join('');
    //guardar nueva palabra en variable resultado
    //retornar  texto encriptado

};

const desencriptar = (texto) => {
    
    let resultado = texto.replace(/enter/g, "e").replace(/ai/g, "a").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");;
    texto2.value = resultado;
    return resultado



};


const copiarClipBoard = async (texto) => {
    try {
        await navigator.clipboard.writeText(texto);

    }
    catch (err) {
    console.error('Failed to copy text: ', err);
}

}


botonEncriptar.addEventListener("click", () => {
    if (texto1.value.length === 0) {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Debe ingresar texto a encriptar ',
            showConfirmButton: false,
            timer: 1500
            })

    
    } else {
        encriptar(texto1.value);

    }
});


botonDesencriptar.addEventListener("click", ()=>{
    if (texto1.value.length === 0) {
        
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Debe ingresar texto a desencriptar ',
            showConfirmButton: false,
            timer: 1500
            })


    } else {

        desencriptar(texto1.value);

    }



    
})

botonCopiar.addEventListener("click" , ()=> {
    
    if (texto2.value.length === 0) {

        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'No hay texto para copiar ',
            showConfirmButton: false,
            timer: 1500
            })


    } else  {
        copiarClipBoard(texto2.value);

        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Texto copiado al portapapeles',
        showConfirmButton: false,
        timer: 1500
        })



    }
    
})

function borrarTextAreaOnClick(textareaId) {
    let textarea = document.getElementById(textareaId);
    textarea.addEventListener("click", function() {
        textarea.value = "";
    });
}