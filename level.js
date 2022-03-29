// level clear & create (LCC)
function LLC() {
    if (LEVEL == 1) {
        p.newPos(5,5);
    }
    //end screen
    if (LEVEL == 999) {
        document.getElementById("endScreen").style.display = "flex";
        document.getElementById("player_map").style.display = "none";
        document.getElementById("images_map").style.display = "none";
        if (event.keyCode == 82) {
            LEVEL = 1;
            document.getElementById("endScreen").style.display = "none";
            document.getElementById("player_map").style.display = "flex";
            document.getElementById("images_map").style.display = "flex";
        }
    }
}