let div = document.getElementById('info-1');

document.getElementById('img-1').addEventListener('click', info);

function info(){
    let click = document.getElementById('valor').value;

    if(click == 1){
        div.style.display="block";
        div.style.opacity= 0.7;
        document.getElementById('valor').value= 2;
    }else{
        div.style.display='none';
        document.getElementById('valor').value = 1;
    }
}

