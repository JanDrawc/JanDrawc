

function gettitle() {
    let pagetitle= document.title
    document.getElementById("pagetitle").innerText=pagetitle
}


class specialheader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="specialheader" id="specialheader">
        <div class="miniheader">
            <p class="jan" onclick="gotohome()">Jan</p>
        
            <div id="topliniks" class="toplinks">
                
                <a href="digitalpaintings.html">Digital Paintings</a>
                <a href="oilpaintings.html">Oil Paintings</a>
                <a href="conceptart.html">Concept Art</a>
                <a href="graphite.html">Graphite</a>
                <a href="photos.html">Photography</a>
                <a href="music.html">Music</a>
                <a href="hobgob.html">Hob Gob</a>
                <a href="blabbering.html">Blabbering</a>
                <a href="https://www.youtube.com/watch?v=uHgt8giw1LY&ab_channel=Licale" target="_blank">Porn</a>
                <a href="contact.html">Contact</a>
            </div>
        </div>
        <div class="pagetitle">
            <h2 class="bunchof">─────────────</h2>
            <h2 class="pagetitlein" id="pagetitle"></h2>
        </div>
        </div>
        `
    }
}
customElements.define('special-header', specialheader)

class specialfooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="specialfooter" id="specialfooter">
       
    </div>
        `
    }
}
customElements.define('special-footer', specialfooter)

//set variables for modal
var modal = document.getElementById("modal")
var modalimg = document.getElementById("modal-content")
//open modal
function fullimage(element) {

    var elementsrc = element.getAttribute("src")
    modal.style.display = "block";
    modalimg.src = elementsrc;
}
//Close modal on click on window


function closemodal() {

    modal.style.display = "none";

}

function gotohome() {
    window.location.href="index.html"
}

window.onload = gettitle();
