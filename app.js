var btt = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight,
    isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// Calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight)
if (docHeight != 'undefined') {
    offset = docHeight / 4;
}

// Add scroll event Listener
window.addEventListener('scroll', () => {
    scrollPos = docElem.scrollTop || body.scrollTop

    btt.className = (scrollPos > offset) ? 'visible' : ''
})

btt.addEventListener('click', ( event ) => {
    event.preventDefault();

    if (isFirefox) {
        body.scrollTop = 0
    } else {
        docElem.scrollTop = 0
    }
})
