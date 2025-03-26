function toggleContent() {
    var content = document.getElementById("moreContent");
    var button = document.getElementById("toggleButton");
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.innerText = "See Less";
    } else {
        content.style.display = "none";
        button.innerText = "See More";
    }
}