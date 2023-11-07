// GENERATE CUSTOM ELEMENTS
class LoadingOverlay extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="loading-overlay">
                <div class="vertical-center" style="width: 100%;">
                    <div style="width: 108px; margin: auto;">
                        <div id="load-ball" style="width: 8px; height: 8px; border-radius: 4px; background-color: white;">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("loading-overlay", LoadingOverlay);


class ProjectCard extends HTMLElement {
    connectedCallback() {
        var title = this.getAttribute('title') || undefined;
        var href = this.getAttribute('href') || undefined;
        var src = this.getAttribute('src') || undefined;

        this.innerHTML = `
            <div class="cardContainer">
                <a href="${href}">
                    <p class="cardBand" style="z-index: 1; background-color: black;"></p>
                    <p class="cardTitle" style="z-index: 2;">${title}</p>
                    <img class="cardImage" src="img/projects/${src}" alt="${title}">
                </a>
            </div>
        `;
    }
}
customElements.define("project-card", ProjectCard);


class Badge extends HTMLElement {
    connectedCallback() {
        var text = this.getAttribute('text') || undefined;
        var color = this.getAttribute('color') || undefined;

        this.innerHTML = `
            <span class="badge" style="background-color: ${color}">${text}</span>
        `;
    }
}
customElements.define("custom-badge", Badge);


class ProjectDetails extends HTMLElement {
    connectedCallback() {
        var head = this.getAttribute('head') || undefined;
        var listContents = (this.getAttribute('list') || undefined).split(";");

        var listHtml = "";
        listContents.forEach(item => listHtml += "<li>" + item + "</li>");

        this.innerHTML = `
            <div>
                <!--p>${head}</p-->
                <ul class="cardDetails">${listHtml}</ul> 
            </div>
        `;
    }
}
customElements.define("project-details", ProjectDetails);



// CARD CONTAINERS ANIMATIONS
const cards = document.querySelectorAll('.cardContainer');

cards.forEach(card => {
    card.addEventListener('mouseover', function handleHover(event) {
        const time = 550;

        var band = card.querySelector('.cardBand');
        tweenOpacity(band, .4, time);

        var title = card.querySelector('.cardTitle');
        tweenOpacity(title, 1, time);

        var image = card.querySelector('.cardImage');
        tweenScale(image, 1.05, time, 'cubicBezier(.5, .05, .1, .3)');
    });
});

cards.forEach(card => {
    card.addEventListener('mouseout', function handleHover(event) {
        const time = 200;

        var band = card.querySelector('.cardBand');
        tweenOpacity(band, 0, time);

        var title = card.querySelector('.cardTitle');
        tweenOpacity(title, 0, time);

        var image = card.querySelector('.cardImage');
        tweenScale(image, 1, time);
    });
});



// BUTTON ICONS ANIMATIONS
const iconButtons = document.querySelectorAll('.iconButton');

iconButtons.forEach(icon => {
    icon.addEventListener('mouseover', function handleHover(event) {
        tweenOpacity(icon, .5, 120);
    });
});

iconButtons.forEach(icon => {
    icon.addEventListener('mouseout', function handleHover(event) {
        tweenOpacity(icon, 1, 120);
    });
});



// ANIMATION HELPERS
function tweenOpacity(obj, to, time, ease = 'linear') {
    anime.remove(obj);
    anime({
        targets: obj,
        opacity: to,
        duration: time,
        easing: ease,
    });
}

function tweenScale(obj, to, time, ease = 'linear') {
    anime.remove(obj);
    anime({
        targets: obj,
        scale: to,
        duration: time,
        easing: ease,
    });
}


// HIDE LOADING SCREEN ON LOAD
window.addEventListener("load", (event) => {
    document.getElementById("body").classList.remove("stop-scrolling");
    document.body.style.display = "block";
    document.getElementById("loading-overlay").hidden = true;
});


// LOADING SCREEN ANIMATION
const timeScale = 60;
anime({
    targets: '#load-ball',
    translateX: [
        { value: 100, duration: timeScale * 10, delay: timeScale * 5 },
        { value: 0, duration: timeScale * 10, delay: timeScale * 5 }
    ],
    scaleX: [
        { value: 4, duration: timeScale, delay: timeScale * 5, easing: 'easeOutExpo' },
        { value: 1, duration: timeScale * 9 },
        { value: 4, duration: timeScale, delay: timeScale * 5, easing: 'easeOutExpo' },
        { value: 1, duration: timeScale * 9 }
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: true
});


// BG PARALLAX SCROLL
// https://stackoverflow.com/questions/29240028/css-make-a-background-image-scroll-slower-than-everything-else
document.getElementById("body").onscroll = function myFunction() {
    var target = document.getElementById("html");
    
    var scrolltotop = document.scrollingElement.scrollTop;
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    
    var xvalue = "center";
    //target.style.backgroundPosition = xvalue + " " + yvalue + "px";

    target.style.backgroundPositionY = yvalue + "px";
}