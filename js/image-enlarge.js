//Enlarges the image

window.onload = function () { 
    let overlay = document.getElementById("spin-overlay");
    overlay.style.visibility = "hiddem";
    overlay.style.opacity = "0";
    overlay.style.transition = "visibility 0s 0.4s, opacity 0.4s linear";

    setTimeout(function(){ 
        overlay.style.display = "none";
    }, 1000);
}

let currentSelection;
let VisibleBox;

function enlarge(element) {
    currentSelection = element;
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    fillVisibleBox();
}

function enlargeVideo(link) {
    console.log("enlarge video");
    document.getElementById("iframe-video").src = "https://www.youtube.com/embed/" + link;
    document.getElementById("modal02").style.display = "block";
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '27') {
        console.log("esc");
        document.getElementById("modal01").style.display = "none";
        document.getElementById("modal02").style.display = "none";
        return;
    }

    if(document.getElementById("modal01").style.display != "block"){
        console.log("not in modal ret");
        return;
    }
    else if (e.keyCode == '39') {
        goNextImg();
    }
    else if (e.keyCode == '37') {
        goBackImg();
    }

}



function fillVisibleBox(){
    visibleBox = [];
    $.each($(".gallery"), function(){ 
        if($(this).is(":hidden")) {
            return;
        }else{
            visibleBox.push(this);
        }
    });
}

function goNextImg(){
    if(visibleBox.indexOf(currentSelection) == visibleBox.length-1){
        document.getElementById("img01").src = visibleBox[0].src;
        currentSelection = visibleBox[0];
    }else{
        document.getElementById("img01").src = visibleBox[visibleBox.indexOf(currentSelection) +1].src;
        currentSelection = visibleBox[visibleBox.indexOf(currentSelection) +1];
    }
}

function goBackImg(){
    if(visibleBox.indexOf(currentSelection) == 0){
        document.getElementById("img01").src = visibleBox[visibleBox.length-1].src;
        currentSelection = visibleBox[visibleBox.length-1];
    }else{
        document.getElementById("img01").src = visibleBox[visibleBox.indexOf(currentSelection) -1].src;
        currentSelection = visibleBox[visibleBox.indexOf(currentSelection) -1];
    }
}

function closeModal(){
    document.getElementById("modal01").style.display = "none";
    document.getElementById("modal02").style.display = "none";
}

function closeVideo(){
    closeModal();
    $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
    });
}

let touchstartX = 0;
let touchendX = 0;

const slider = document.getElementById('img01');

function handleGesture() {
  if (touchendX < touchstartX - 30){
    goBackImg();
  } 
  if (touchendX > touchstartX + 30){
    console.log("right swipe");
    goNextImg();
  }
}

slider.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
})

slider.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
})

function openSite(url){
    window.open(url, '_blank');
  }

function scrollToGallery() {
    let scroll = this.scrollY;
    if (scroll == 0){
        document.getElementById("filter-button-group").scrollIntoView({behavior: 'smooth', block: 'center'});
    }
}
