const openCloseNav = () => {
    let sidebar = document.getElementById("mySidebar");
    let main = document.getElementById("main");
    if (sidebar.style.width == "0px" || sidebar.style.width == '') {
        sidebar.style.width = "200px";
        sleep(500);
        document.getElementById("i").innerHTML = "Atividade 1";
        document.getElementById("ii").innerHTML = "Atividade 2";
        document.getElementById("iii").innerHTML = "Atividade 3";
    }
    else {
        sidebar.style.width = "0px";
        sleep(500);
        document.getElementById("i").innerHTML = "";
        document.getElementById("ii").innerHTML = "";
        document.getElementById("iii").innerHTML = "";
    }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
