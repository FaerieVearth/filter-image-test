//Enlarges the image
let currentSelection;

function enlarge(element) {
    currentSelection = element;
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '27') {
        console.log("esc");
        document.getElementById("modal01").style.display = "none";
        return;
    }

    if(document.getElementById("modal01").style.display != "block"){
        console.log("not in modal ret");
        return;
    }
    else if (e.keyCode == '37') {
        var visibleBox = [];

        $.each($("img"), function(){ 
            if($(this).is(":hidden")) {
                return;
            }else{
                visibleBox.push(this);
            }
        });
        if(visibleBox.indexOf(currentSelection) == 1){
            document.getElementById("img01").src = visibleBox[visibleBox.length-1].src;
            currentSelection = visibleBox[visibleBox.length-1];
        }else{
            document.getElementById("img01").src = visibleBox[visibleBox.indexOf(currentSelection) -1].src;
            currentSelection = visibleBox[visibleBox.indexOf(currentSelection) -1];
        }
    }
    else if (e.keyCode == '39') {
        var visibleBox = [];

        $.each($("img"), function(){ 
            if($(this).is(":hidden")) {
                return;
            }else{
                visibleBox.push(this);
            }
        });
        if(visibleBox.indexOf(currentSelection) == visibleBox.length-1){
            document.getElementById("img01").src = visibleBox[1].src;
            currentSelection = visibleBox[1];
        }else{
            document.getElementById("img01").src = visibleBox[visibleBox.indexOf(currentSelection) +1].src;
            currentSelection = visibleBox[visibleBox.indexOf(currentSelection) +1];
        }
    }

}