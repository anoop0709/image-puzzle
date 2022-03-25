var row = 5;
var column = 5;
 
var currTile;
var otherTile;
var turns = 0;


window.onload = function(){

    for(var r = 0; r < row; r++){
        for(var c = 0; c < column; c++){
    let tile = document.createElement("img");
    tile.src = "./images/blank1.jpg";
    
        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);

        document.getElementById("board").append(tile);
        }
    }
    let pieces = [];
   
    for(let i = 1;i <= row*column; i++){
        pieces.push(i.toString());
    }
    for(let i = 0; i < pieces.length; i++){
        let j = Math.floor(Math.random()*pieces.length);
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }
    for(let i = 0;i < pieces.length; i++){
        let tile = document.createElement("img");
        tile.src = "./images/" + pieces[i] + ".jpg";
     

        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);
        document.getElementById("pieces").append(tile);
    }
   
}
function dragStart() {
    currTile = this;
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave() {
    
}
function dragDrop(){
    otherTile = this;
}

function dragEnd(){
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile .src = currImg;

    turns += 1;
    document.getElementById("turns").innerHTML = turns;
}

