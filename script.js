const btn_encriptar = document.getElementById("btn-encriptar");
const btn_desencriptar = document.getElementById("btn-desencriptar");
const btn_copiar = document.getElementById("btn-copiar");
const btn_borrar_1 = document.getElementById("btn-borrar-1");
const btn_borrar_2 = document.getElementById("btn-borrar-2");
const filtro = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;


//Funcion verificar.
function verificar(){
    let texto_nuevo = document.getElementById("texto-encriptar").value;
    if(texto_nuevo.match(filtro) != null){
        limpiar();
        foco();
        //Alerta de error.
        Swal.fire({
            title: 'Error!',
            text: 'Solo letras minúsuclas y sin acentos',
            imageUrl: './images/DrawKit Vector Illustration Fun & Playful Finn Character (14).svg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Imagen de alerta',
        });
    }
}

//funcion encriptar.
function encriptar(){
    let texto_nuevo = document.getElementById("texto-encriptar").value.trimStart();
    texto_nuevo;
    texto_nuevo = texto_nuevo
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    texto_nuevo;

    document.getElementById("texto-desencriptar").value = texto_nuevo;
    document.getElementById("texto-desencriptar").style.color = "#000000";
    ocultarImagen();
}

//Funcion desencriptar.
function desencriptar(){
    let texto_nuevo = document.getElementById("texto-encriptar").value;
    texto_nuevo;
    texto_nuevo = texto_nuevo
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        texto_nuevo;

    document.getElementById("texto-desencriptar").value = texto_nuevo;
    document.getElementById("texto-desencriptar").style.color = "#000000";
    ocultarImagen();
}

//Funcion copiar.
function copiar(){
    let texto_vacio = "";
    let texto_des = document.getElementById("texto-desencriptar").value;
    document.getElementById("texto-encriptar").placeholder = "";

    let text_copi = document.getElementById("texto-desencriptar");
    text_copi.select();
    document.execCommand("copy");

    if(texto_vacio !== texto_des){
        limpiar();
        foco();
        //Alerta de completado.
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Texto copiado",
            showConfirmButton: false,
            timer: 1500,
        });
        ocultarImagen();
    }else{
        //Alerta de error.
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "No se encotrado ningún texto a copiar",
            showConfirmButton: false,
            timer: 1500,
        });
    }
}

//Funcion ocultar imagen.
function ocultarImagen(){
    let texto_vacio = "";
    let text_area = document.getElementById("texto-desencriptar").value;
    text_area;
    if (texto_vacio !== text_area){
        document.getElementById("cubierta").style.display = "none";
        $(".animacion").fadeIn(1000, function(){
            $(".animacion").fadeOut(2000);
        });
    }else document.getElementById("cubierta").style.display = "";
}

//funcion limpiar.
function limpiar(){
    document.getElementById("texto-encriptar").value = "";
    document.getElementById("texto-desencriptar").value = "";
}

//Funcion focus.
function foco(){
    document.getElementById("texto-encriptar").focus();
}

//Funcion focus
function borrar(){
    document.getElementById("texto-encriptar").placeholder = "Ingrese el texto aqui";
    document.getElementById("texto-desencriptar").placeholder = "";
    document.getElementById("texto-desencriptar").style.color = "#495057";
    limpiar();
    foco();
    ocultarImagen();
}

foco();
btn_encriptar.addEventListener("click", verificar);
btn_encriptar.addEventListener("click", encriptar);

btn_desencriptar.addEventListener("click", verificar);
btn_desencriptar.addEventListener("click", desencriptar);

btn_copiar.addEventListener("click", copiar);
btn_borrar_1.addEventListener("click", borrar);
btn_borrar_2.addEventListener("click", borrar);