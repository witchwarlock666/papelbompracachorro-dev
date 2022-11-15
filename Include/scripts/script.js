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
    console.log(arr)
    let arr2 = arr[arr.length - 1].split('.')
    console.log(arr2)
    let val = arr2[0][arr2[0].length - 1]

    if (val == 'a') {
        val = 'b'
    }
    else {
        val = 'a'
    }

    let arr3 = arr2[0].slice(0, -1)
    arr3 += val
    console.log(arr3)
    arr2[0] = arr3
    console.log(arr2)
    arr2 = arr2.join('.')
    arr[arr.length - 1] = arr2
    arr = arr.join('/')
    console.log(arr)

    e.src = arr
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
