let abierto = false;

function menuHamburguesa(){
    if(abierto){
        abierto = false;
        document.getElementById('hamburguesaNav').style.display = "none";
    } else{
        abierto = true;
        document.getElementById('hamburguesaNav').style.display = "flex";
    }
}