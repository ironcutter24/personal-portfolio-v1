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
        `;
    }
}
customElements.define("head-content", Head);


class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="header">
                <div class="vertical-center" style="right: 120px;">
                    <a href="#top" class="headerElement">About Me</a>
                    <a href="#projects" class="headerElement">Projects</a> 
                    <a href="#gamejams" class="headerElement">Game Jams</a>
                </div>
            </div>
        `;
    }
}
customElements.define("custom-header", Header);