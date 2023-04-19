
document.addEventListener("keydown", function (event) {
    if (event.code == "Akey" || event.key == "a") {
        console.log("The 'A' key is pressed.");
        let a = new Audio("Music/A.mp3");
        a.play();
    }
    else if (event.code == "Skey" || event.key == "s") {
        console.log("The 'S' key is pressed.");
        let s = new Audio("Music/S.mp3");
        s.play();
    }
    else if (event.code == "Dkey" || event.key == "d") {
        console.log("The 'D' key is pressed.");
        let d = new Audio("Music/D.mp3");
        d.play();
    }
    else if (event.code == "Fkey" || event.key == "f") {
        console.log("The 'F' key is pressed.");
        let f  = new Audio("Music/F.mp3");
        f.play();
    }
    else if (event.code == "Gkey" || event.key == "g") {
        console.log("The 'G' key is pressed.");
        let g  = new Audio("Music/G.mp3");
        g.play();
    }
    else if (event.code == "Hkey" || event.key == "h") {
        console.log("The 'h' key is pressed.");
        let h = new Audio("Music/H.mp3");
        h.play();
    }
    else if (event.code == "Jkey" || event.key == "j") {
        console.log("The 'J' key is pressed.");
        let j =new Audio("Music/J.mp3");
        j.play();
    }
    else if (event.code == "Ekey" || event.key == "e") {
        console.log("The 'E' key is pressed.");
        let j =new Audio("Music/E.mp3");
        j.play();
    }
    else if (event.code == "Wkey" || event.key == "w") {
        console.log("The 'W' key is pressed.");
        let j =new Audio("Music/W.mp3");
        j.play();
    }
    else if (event.code == "Tkey" || event.key == "t") {
        console.log("The 'T' key is pressed.");
        let j =new Audio("Music/T.mp3");
        j.play();
    }
    else if (event.code == "Ykey" || event.key == "y") {
        console.log("The 'Y' key is pressed.");
        let j =new Audio("Music/Y.mp3");
        j.play();
    }
    else if (event.code == "Ukey" || event.key == "u") {
        console.log("The 'U' key is pressed.");
        let j =new Audio("Music/U.mp3");
        j.play();
    }
    else {
        console.log("Warning Invalid input")
    }
})