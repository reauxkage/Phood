const icons = document.querySelectorAll('.icon')
const thumbsUp = icons[0]
const thumbsDown = icons[1]

const urlOrigin = location.origin

const thumbsUpClickHandler = () => {
    if (thumbsUp.src === urlOrigin + '/images/thumbs-up.png' && thumbsDown.src !== urlOrigin + '/images/thumbs-down-dark.png') {
        thumbsUp.src = urlOrigin + '/images/thumbs-up-dark.png'
    }
    else if (thumbsUp.src === urlOrigin + '/images/thumbs-up.png' && thumbsDown.src === urlOrigin + '/images/thumbs-down-dark.png') {
        thumbsUp.src = urlOrigin + '/images/thumbs-up-dark.png'
        thumbsDown.src = urlOrigin + '/images/thumbs-down.png'
    }
    else {
        thumbsUp.src = urlOrigin + '/images/thumbs-up.png'
    }
}

const thumbsDownClickHandler = () => {
    if (thumbsDown.src === urlOrigin + '/images/thumbs-down.png' && thumbsUp.src !== urlOrigin + '/images/thumbs-up-dark.png') {
        thumbsDown.src = urlOrigin + '/images/thumbs-down-dark.png'
    }
    else if (thumbsDown.src === urlOrigin + '/images/thumbs-down.png' && thumbsUp.src === urlOrigin + '/images/thumbs-up-dark.png') {
        thumbsDown.src = urlOrigin + '/images/thumbs-down-dark.png'
        thumbsUp.src = urlOrigin + '/images/thumbs-up.png'
    }
    else {
        thumbsDown.src = urlOrigin + '/images/thumbs-down.png'
    }
}

thumbsUp.addEventListener('click', thumbsUpClickHandler)
thumbsDown.addEventListener('click', thumbsDownClickHandler)