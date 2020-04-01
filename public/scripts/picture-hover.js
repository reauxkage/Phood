const contentContainers = document.querySelectorAll('.post-container')
const contentImages = document.querySelectorAll('.post-image')

let contentShare
let contentRecipe
let contentBottom
let contentTitle
let contentDate
let contentUnderline


const imageHoverEnterHandler = (contentContainer) => {
    contentShare = contentContainer.querySelector('.post-container-content-share')
    contentRecipe = contentContainer.querySelector('.post-container-content-recipe')
    contentBottom = contentContainer.querySelector('.post-container-bottom')
    contentTitle = contentContainer.querySelector('.post-title')
    contentDate = contentContainer.querySelector('.post-date')
    contentUnderline = contentContainer.nextElementSibling

    contentShare.style.display = 'flex'
    contentRecipe.style.display = 'flex'
    contentBottom.style.display = 'flex'
    contentShare.style.animation = 'appear 750ms'
    contentRecipe.style.animation = 'appear 750ms'
    contentBottom.style.animation = 'appear 750ms'
    contentTitle.style.marginLeft = '3.425em'
    contentTitle.style.marginLeft = '3.425em'
    contentContainer.style.border = '3px solid #2B8EF5'
    contentContainer.style.marginTop = '19px'
    contentDate.style.display = 'none'
}


const containerHoverLeaveHandler = (contentContainer) => {
    contentShare = contentContainer.querySelector('.post-container-content-share')
    contentRecipe = contentContainer.querySelector('.post-container-content-recipe')
    contentBottom = contentContainer.querySelector('.post-container-bottom')
    contentTitle = contentContainer.querySelector('.post-title')
    contentDate = contentContainer.querySelector('.post-date')
    contentUnderline = contentContainer.nextElementSibling

    contentBottom.style.display = 'none'
    contentShare.style.display = 'none'        
    contentRecipe.style.display = 'none'
    event.target.style.borderRadius = '10px'
    contentTitle.style.marginLeft = 0
    contentContainer.style.border = 'none'
    contentDate.style.display = 'block'
}

// Added this event listener to the window as sometimes getBoundingClientRect would return incorrect values for the image based on how quickly it gets rendered

addEventListener('load', () => {
    for(let i = 0; i < contentContainers.length; i++) {
        contentImages[i].addEventListener('mouseenter', function() {imageHoverEnterHandler(contentContainers[i])}) 
        contentContainers[i].addEventListener('mouseleave', function() {containerHoverLeaveHandler(contentContainers[i])})
        if(i === contentContainers.length - 1) {
            container = document.querySelector('.container')
            container.style.marginBottom = '5em';
        }
    }
})
