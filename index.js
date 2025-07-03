var random1 = Math.round(Math.random()*5)+1;
var random2 = Math.round(Math.random()*5)+1;
document.querySelector(".img1").setAttribute("src",`/images/dice${random1}.png`);
document.querySelector(".img2").setAttribute("src",`/images/dice${random2}.png`);
if (random1>random2){
    document.querySelector(".container h1").textContent="Player 1 wins 🔥";
}else if(random1<random2){
    document.querySelector(".container h1").textContent="Player 2 wins 👌";
}else{
    document.querySelector(".container h1").textContent="Draw 🤣";
}
