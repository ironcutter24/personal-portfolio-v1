class Head extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <title>GameDev Portfolio</title>

            <meta charset="UTF-8">
            <meta name="keywords" content="portfolio, gamedev, game development, videogames">
            <meta name="description" content="Personal portfolio">
            <meta name="author" content="Damiano Tagliaferri">
        
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" href="main.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        `;
    }
}
customElements.define("head-content", Head);


class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="header" class="topnav">
                <a href="#top">About Me</a>
                <a href="#projects">Projects</a> 
                <a href="#gamejams">Game Jams</a>
                <a href="javascript:void(0);" class="icon" onclick="toggleResponsiveHeader()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        `;
    }
}
customElements.define("custom-header", Header);


function toggleResponsiveHeader() {
    var x = document.getElementById("header");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function showTopnavDropdown() {
    var x = document.getElementById("header");
    x.className = "topnav responsive";
}

function hideTopnavDropdown() {
    var x = document.getElementById("header");
    x.className = "topnav";
}