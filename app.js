var btt = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight;

// Calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight)
if (docHeight != 'undefined') {
    offset = docHeight / 4;
}

// Add scroll event Listener
window.addEventListener('scroll', () => {
    scrollPos = body.scrollTop || docElem.scrollTop

    if (scrollPos > offset) {
        btt.classList.add('visible')
    } else {
        btt.classList.remove('visible')
    }
})

btt.addEventListener('click', () => {
    
})
