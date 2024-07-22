//------Asignacion de elementos----//

const botonEncriptar = document.querySelector(".botonEncriptar");
const txtEncriptar = document.querySelector(".txtTexto");
const txtInformativo = document.querySelector(".texto_informativo");
const respuesta = document.querySelector(".evaluar");
const muñeco = document.querySelector(".contenedor_de_muñeco");
const botonCopiar = document.querySelector(".botonCopiar");
const botonDesencriptar = document.querySelector(".botonDesencriptar");

//----Funcionalidad del boton encriptar----//

botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,""); //cambia caracteres especiales y acentos por espacios en blanco
    
    if(texto == ""){
        txtInformativo.style.background = "#0A3871";
        txtInformativo.style.color = "#FFFF";
        txtInformativo.style.fontweight = "800";
        txtInformativo.textContent = "El texto no puede estar vacio";

        setTimeout(()=>{
            txtInformativo.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        txtInformativo.style.background = "#0A3871";
        txtInformativo.style.color = "#FFFF";
        txtInformativo.style.fontweight = "800";
        txtInformativo.textContent = "El texto no puede tener acentos ni caracteres especiales";

        setTimeout(()=>{
            txtInformativo.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        txtInformativo.style.background = "#0A3871";
        txtInformativo.style.color = "#FFFF";
        txtInformativo.style.fontweight = "800";
        txtInformativo.textContent = "El texto no puede contener mayusculas";

        setTimeout(()=>{
            txtInformativo.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter"); // En todo el texto la letra e se cambia por enter
        texto = texto.replace(/i/mg, "imes"); // En todo el texto la letra i se cambia por imes
        texto = texto.replace(/a/mg, "ai"); // En todo el texto la letra a se cambia por ai
        texto = texto.replace(/o/mg, "ober"); // En todo el texto la letra o se cambia por ober
        texto = texto.replace(/u/mg, "ufat"); // En todo el texto la letra u se cambia por ufat

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        muñeco.remove();
    }
});

//----Funcionalidad del boton desencriptar----//

botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g,""); //cambia caracteres especiales y acentos por espacios en blanco
    
    if(texto == ""){
        txtInformativo.style.background = "#0A3871";
        txtInformativo.style.color = "#FFFF";
        txtInformativo.style.fontweight = "800";
        txtInformativo.textContent = "El texto no puede estar vacio";

        setTimeout(()=>{
            txtInformativo.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        txtInformativo.style.background = "#0A3871";
        txtInformativo.style.color = "#FFFF";
        txtInformativo.style.fontweight = "800";
        txtInformativo.textContent = "El texto no puede tener acentos ni caracteres especiales";

        setTimeout(()=>{
            txtInformativo.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        txtInformativo.style.background = "#0A3871";
        txtInformativo.style.color = "#FFFF";
        txtInformativo.style.fontweight = "800";
        txtInformativo.textContent = "El texto no puede contener mayusculas";

        setTimeout(()=>{
            txtInformativo.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e"); 
        texto = texto.replace(/imes/mg, "i"); 
        texto = texto.replace(/ai/mg, "a"); 
        texto = texto.replace(/ober/mg, "o"); 
        texto = texto.replace(/ufat/mg, "u"); 

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        muñeco.remove();
    }
});

//----Funcionalidad del boton copiar----//

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});