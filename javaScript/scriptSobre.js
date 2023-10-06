/* ---- Slides ---- */

const images = [
    { 'id': '1', 'url':'./../imagem/sala de estar.jpg'},
    { 'id': '2', 'url':'./../imagem/dan-gold-4HG3Ca3EzWw-unsplash.jpg' },
    { 'id': '3', 'url':'./../imagem/di_an_h-g_8MrEZAvyE-unsplash.jpg' },
    { 'id': '4', 'url':'./../imagem/dan-gold-Q1zJtNdMEQY-unsplash.jpg' },
    { 'id': '5', 'url':'./../imagem/toa-heftiba-FV3GConVSss-unsplash.jpg' },
    { 'id': '6', 'url':'./../imagem/tormius-VtppxC-GfZs-unsplash.jpg' },
    { 'id': '7', 'url':'./../imagem/kam-idris-_HqHX3LBN18-unsplash.jpg' },
    { 'id': '8', 'url':'./../imagem/hadi-yazdi-aznaveh-FoTZazW3WxY-unsplash.jpg' },
]

const containerItems = document.querySelector('#container-items');
const containerIndicators = document.querySelector('.indicators');

const createIndicators = (images, container) => {
    images.forEach ( image => {
        container.innerHTML += `<span data-number=${image.id}>${image.id}</span>`
    })
}

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item' data-number=${image.id}>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );
createIndicators(images, containerIndicators);

let items = document.querySelectorAll('.item');

const removeClassSelected = () => {
    const indicators = document.querySelectorAll('span');
    indicators.forEach( indicator => indicator.classList.remove ('selected'));
} 

const selectIndicator = (number) => {
    removeClassSelected();
    const indicator = document.querySelector(`span[data-number="${number}"]`)
    indicator.classList.add('selected')
} 

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    selectIndicator (items[1].dataset.number)
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
    selectIndicator (items[1].dataset.number)
}

const clickIndicators = ({target}) => {

    if ( target.tagName == 'SPAN') {
        const selectedIndicator = target.dataset.number;
        let visibleSlide = items[1].dataset.number
        if (selectedIndicator !== visibleSlide){
            
            const autoNext = setInterval ( () => {
                document.querySelector('#next').click();
                visibleSlide = items[1].dataset.number;
                if (selectedIndicator == visibleSlide) clearInterval(autoNext);
            }, 100);
        }
    }

}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
document.getElementById('indicators').addEventListener('click',clickIndicators);

// GOOGLE MAP //

let map;
const portoAlegre = { lat: 41.85, lng: -87.65 };

/**
 * Creates a control that recenters the map on Chicago.
 */

function createCenterControl(map) {
  const controlButton = document.createElement("button");

  // Set CSS for the control.
  controlButton.classList.add('buttonStyle');
  controlButton.textContent = "Center Map";
  controlButton.title = "Click to recenter the map";
  controlButton.type = "button";
  // Setup the click event listeners: simply set the map to Chicago.
  controlButton.addEventListener("click", () => {
    map.setCenter(chicago);
  });
  return controlButton;
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 49.496675, lng: -102.65625 },
  });

  let georssLayer = new google.maps.KmlLayer({
    url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=pt-BR&format=feed-georss",
  });
  georssLayer.setMap(map);

  // Create the DIV to hold the control.
  const centerControlDiv = document.createElement("div");
  // Create the control.
  const centerControl = createCenterControl(map);

  // Append the control to the DIV.
  centerControlDiv.appendChild(centerControl);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    centerControlDiv
  );
}

window.initMap = initMap;
