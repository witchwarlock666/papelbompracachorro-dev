const openCloseNav = () => {
    let sidebar = document.getElementById("mySidebar");
    let main = document.getElementById("main");
    if (sidebar.style.width == "0px" || sidebar.style.width == '') {
        sidebar.style.width = "200px";
        sleep(500);
        document.getElementById("fade").style.display = "block"
        document.getElementById("i").innerHTML = " Home";
        document.getElementById("ii").innerHTML = " Adoções";
        document.getElementById("iii").innerHTML = " Sobre";
    }
    else {
        sidebar.style.width = "0px";
        sleep(500);
        document.getElementById("fade").style.display = "none"
        document.getElementById("i").innerHTML = "";
        document.getElementById("ii").innerHTML = "";
        document.getElementById("iii").innerHTML = "";
    }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
