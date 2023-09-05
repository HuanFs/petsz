//declarção das variáveis
let wid = window.innerWidth;
let greetings = document.querySelector("span");
let buttons = document.querySelectorAll("nav button");
let closeBtn = document.querySelector("#dialog button");
let cont = 0;
let openClose = 0;
let img = document.querySelector("main img");
//adição dos eventos
buttons[0].addEventListener("click", showHide);
buttons[1].addEventListener("click",remv);
buttons[2].addEventListener("click",add);
buttons[3].addEventListener("click",ajuda);
//função mostra/esconde botões
function showHide(){
    if(openClose==1){
        for(let i = 1; i<4; i++){
            buttons[i].style.display="none";
        }
        openClose=0;
    }
    else if(openClose==0){
        for(let i = 1; i<4; i++){
            buttons[i].style.display="block";
        }
        openClose=1;
    }
}
//função de adicionar
function add(){
    cont++;
    if(cont>7){
        cont=7;
        img.src="assets/img/dog7.png";
        alert("Você adicionou o número máximo de cachorros");
    }
    else{
        img.src=`assets/img/dog${cont}.png`;
        let latido = new Audio("assets/latido.mp3");
        latido.play();
    }
    
}
//função de remover
function remv(){
    cont--;
    if(cont<0){
        cont=0;
        alert("Nenhum cachorro para remover")
    }
    else{
        img.src=`assets/img/dog${cont}.png`;
        let latido = new Audio("assets/latido2.mp3");
        latido.play();
    };
    
}
//função de criar e abrir a caixa de ajuda
function ajuda(){
    let container = document.querySelector("main");
    let dialog = document.createElement("div");
    dialog.id="dialog";
    let dialogMsg = document.createElement("p");
    dialogMsg.innerHTML='clique em "Adicionar" para inserir cachorros no pet shop. Clique em Remover para tirar os cachorros do petshop!';
    let closeDialog = document.createElement("button");
    closeDialog.innerHTML="Entendi!";
    container.appendChild(dialog);
    dialog.appendChild(dialogMsg);
    dialog.appendChild(closeDialog);
    closeDialog.addEventListener("click",close);
}
//função que fecha a caixa de ajuda
function close(){
    let dialog = document.getElementById("dialog");
    dialog.remove();
}
//função que execute uma animação de boas vindas;
function welcome(){
    let screen = document.querySelector("header");
    let welcomeMsg = document.querySelector("header h1");
    setTimeout(x=>{
        welcomeMsg.style.opacity="1";
    },1000);
    setTimeout(y=>{
        screen.style.opacity="0";
    },2500);
    setTimeout(z=>{
        screen.remove();
    },3500);
}
