window.onload = function(){
    //Capturando elementos del DOM.
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let title = document.getElementById("titulo");

    //Manipulando elementos del DOM.
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    //--------------------------------------------------------
    let secret = "";//Aquí se va guardando el mensaje secreto.
    /* Con el contador y el evento de teclado, se van validando el estado de la variable
    secret y se progresa, o bien reinicia el proceso, según sea el caso. */
    let contador = 0;

    //Eventos del DOM.
    titulo.addEventListener("mouseover", ()=>{
        titulo.style.color = "red";
    })
    //Evento Secret
    title.addEventListener("keypress", e =>{
        
        console.log(e.key);
        console.log(contador);
        
        if(contador === 0 && e.key === "s"){
            secret = secret + e.key;
            contador = contador + 1;
            console.log("secret: "+ secret + "\ncontador: "+ contador);
        } else if(contador === 1 && e.key === "e"){
            secret = secret + e.key;
            contador = contador + 1;
            console.log("secret: "+ secret + "\ncontador: "+ contador);
        }else if(contador === 2 && e.key === "c"){
            secret = secret + e.key;
            contador = contador + 1;
            console.log("secret: "+ secret + "\ncontador: "+ contador);
        }else if(contador === 3 && e.key === "r"){
            secret = secret + e.key;
            contador = contador + 1;
            console.log("secret: "+ secret + "\ncontador: "+ contador);
        }else if(contador === 4 && e.key === "e"){
            secret = secret + e.key;
            contador = contador + 1;
            console.log("secret: "+ secret + "\ncontador: "+ contador);
        }else if(contador === 5 && e.key === "t"){
            secret = secret + e.key;
            contador = contador + 1;
            console.log("secret: "+ secret + "\ncontador: "+ contador);
            
        }else if(contador === 6 && e.key === "o"){
            alert("SECRETO MÁGICO");
            console.log("secret: "+ secret + "\ncontador: "+ contador);
        }
        else {
            contador = 0;
            secret = "";
            console.log("secret: "+ secret + "\ncontador: "+ contador);
        }
        
        console.log(e.key);
        console.log(contador);
    })
}