//Enlarges the image
function enlarge(element) {
    console.log(element);
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";

}

$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        document.getElementById("modal01").style.display = "none";
   }
});