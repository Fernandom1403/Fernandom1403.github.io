const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/, 
    password:/^.{4,12}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ 
}

const validarMail = () => {
    const mail = document.getElementById('mail').value;
    const dominiosPermitidos = /(@hotmail\.com|@gmail\.com|@outlook\.com)$/i;

    if (expresiones.correo.test(mail) && dominiosPermitidos.test(mail)) {
        document.querySelector('#grupo__mail .input-error').classList.remove('input-error-activo');
    } else {
        document.querySelector('#grupo__mail .input-error').classList.add('input-error-activo');
    }
}

const validarCelular = () => {
    const celular = document.getElementById('celular').value;
    
    if (expresiones.telefono.test(celular) && celular.length === 10) {
        document.querySelector('#grupo__celular .input-error').classList.remove('input-error-activo');
    } else {
        document.querySelector('#grupo__celular .input-error').classList.add('input-error-activo');
    }
}


const validarFormulario = (e)=>{
    switch(e.target.name){
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.querySelector('#grupo__usuario .input-error').classList.remove('input-error-activo'); 
            }else{
                document.querySelector('#grupo__usuario .input-error').classList.add('input-error-activo'); 
            }
        break;
        case "re-password":
            validarPassword2();
        break;
        case "mail":
            validarMail();
        break
        case "celular":
            validarCelular();
        break
    }
}

const validarPassword2 = ()=>{
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('re-password');

    if(pass1.value !== pass2.value){
        document.querySelector('#grupo__password2 .input-error').classList.add('input-error-activo'); 
    }else{
        document.querySelector('#grupo__password2 .input-error').classList.remove('input-error-activo'); 
    }
}

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    let user = document.getElementById('usuario').value;
    let mail = document.getElementById('mail').value;
    let celular = document.getElementById('celular').value;
    let password1 = document.getElementById('password').value;
    let password2 = document.getElementById('re-password').value;

    if(user==''|| mail==''||celular==''||password1==''||password2==''){
        document.getElementById('alertGeneral').style.display = 'block';
    }else{
        document.getElementById('alertGeneral').style.display = 'none';
    }

})

//Activar los eventos al presionar una tecla
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur',validarFormulario);
})