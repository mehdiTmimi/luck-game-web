//recuperation des elements
let input=document.getElementById("input");
let btn=document.getElementById("btn");
let win=document.getElementById("win");
let lose=document.getElementById("lose");
let err=document.getElementById("erreur");
// attacher un evenement click a notre button 
btn.addEventListener('click',()=>
{
    console.log("CLICK reussi")
    if(input.value=="")
    {
        err.innerHTML="champ obligatoire";
        return;
    }
    if(isNaN(parseInt(input.value)))
    {
        err.innerHTML="veuillez saisir un nombre";
        return;
    }
    if(parseInt(input.value)>9 || parseInt(input.value)<0)
    {
        err.innerHTML="un nombre entre 0 et 9";
        return;
    }
    err.innerHTML="";
// generate random number
let random=Math.floor(Math.random()*10);
// compare this random number with the number (input)
if(random==input.value)
    {
        let val=win.innerHTML;
        let nbrWin=parseInt(val);
        nbrWin++;
        win.innerHTML=nbrWin;
    }
else
    {
        let val=lose.innerHTML;
        let nbrLose=parseInt(val);
        nbrLose++;
        lose.innerHTML=nbrLose;
    }
    input.value="";
// if equal -> increment wins
// elese increment loses
});