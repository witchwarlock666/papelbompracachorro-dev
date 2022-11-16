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

const changeImg = e => {
    let arr = e.src.split('/')
    let arr2 = arr[arr.length - 1].split('.')
    let val = arr2[0][arr2[0].length - 1]

    if (val == 'a') {
        val = 'b'
    }
    else {
        val = 'a'
    }

    let arr3 = arr2[0].slice(0, -1)
    arr3 += val
    arr2[0] = arr3
    arr2 = arr2.join('.')
    arr[arr.length - 1] = arr2
    arr = arr.join('/')

    e.src = arr
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
