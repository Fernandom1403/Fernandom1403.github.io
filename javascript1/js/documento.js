document.getElementById('btnMostrar').addEventListener('click', mostrar);

function mostrar(){
    document.getElementById('parrafo').style.display="block";
    document.getElementById('btnOcultar').style.display="block";
    document.getElementById('btnMostrar').style.display='none';
}

document.getElementById('btnOcultar').addEventListener('click', ocultar);

function ocultar(){
    document.getElementById('parrafo').style.display="none";
    document.getElementById('btnOcultar').style.display="none";
    document.getElementById('btnMostrar').style.display='block';
}