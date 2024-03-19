let boox=document.querySelectorAll(".boxes");
let rset=document.querySelector("#butt");
let win=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#Nbutt");
let resetbtn=document.querySelector("#Rbutt");

let turnx=true;

const winpatterns = [
   [0, 1, 2 ],
   [0, 3, 6 ],
   [0, 4, 8 ],
   [1, 4, 7 ],
   [2, 5, 8 ],
   [2, 4, 6 ],
   [3, 4, 5 ],
   [6, 7, 8 ]
];

const resetgame = () =>{
    turnx =true;
    enablebox();
    win.classList.add("hide");
}
const enablebox = () =>{
    for(let box of boox){
        box.disabled=false;
        box.innerText="";
    }
}

const disableboxes = () =>{
    for(let box of boox){
        box.disabled=true;
    }
}

boox.forEach((box) =>
{
    box.addEventListener("click",()=>
    {
        console.log("box was clicked");
        if(turnx){
            box.innerText="O";
            turnx=false;
        }
        else{
            box.innerText="X";
            turnx=true;
        }
 box.disabled=true;

 checkwinner();
        
    } 
    )
}
);
const showwinner= (winner) =>{
 msg.innerText=`Congratulations, Winner is ${winner}`;
 win.classList.remove("hide");
 disableboxes();
 
}

const checkwinner = () => {

    for( let patterns of winpatterns){
       // console.log(patterns);
        let pos1 = boox[patterns[0]].innerText;
        let pos2 = boox[patterns[1]].innerText;
        let pos3 = boox[patterns[2]].innerText;
       
        if(pos1 !="" && pos2 !="" && pos3 !="")
        {
            if(pos1===pos2 && pos2===pos3){
                console.log("Congratulations You Won the game",pos1);
                showwinner(pos1);
            }
        }
    }

}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
