const navLinkContainer = document.querySelectorAll('a')
// const pheedLink = navLinkContainer.firstElementChild
// const createPostLink = pheedLink.nextElementSibling
// const recipeLink = createPostLink.lastElementChild

let defaultColor = 'rgba(2, 8, 36, .7)'
let highlightColor = '#F5922B'

addEventListener('load', () => {

    if (location.href === 'http://localhost:3000/') {
        navLinkContainer[0].style.color = highlightColor
        navLinkContainer[0].style.border = '3px solid #2B8EF5'
        navLinkContainer[0].style.backgroundColor = 'rgba(2, 8, 36, .9)'
    }
    else if (location.href === 'http://localhost:3000/create-post') {
        navLinkContainer[1].style.color = highlightColor
        navLinkContainer[1].style.border = '3px solid #2B8EF5'
        navLinkContainer[1].style.backgroundColor = 'rgba(2, 8, 36, .9)'
    }
    else if (location.href === 'http://localhost:3000/recipes') {
        navLinkContainer[2].style.color = highlightColor
        navLinkContainer[2].style.border = '3px solid #2B8EF5'
        navLinkContainer[2].style.backgroundColor = 'rgba(2, 8, 36, .9)'
    }

    // if (location.href === 'http://localhost:3000') {
    //     pheedLink.firstElementChild.style.color = highlightColor
    //     createPostLink.firstElementChild.style.color = defaultColor
    //     recipeLink.firstElementChild.style.color = defaultColor
    // }
    // else if (location.href === 'http://localhost:3000/create-post') {
    //     pheedLink.firstElementChild.style.color = defaultColor
    //     createPostLink.firstElementChild.style.color = highlightColor
    //     recipeLink.firstElementChild.style.color = defaultColor
    // }
    // else if (location.href === 'http://localhost:3000/recipes') {
    //     pheedLink.firstElementChild.style.color = defaultColor
    //     createPostLink.firstElementChild.style.color = defaultColor
    //     recipeLink.firstElementChild.style.color = highlightColor
    // }
})

// pheedLink.addEventListener('click', () => {
//     location.href = 'http://localhost:3000'
// })

// createPostLink.addEventListener('click', () => {
//     location.href = 'http://localhost:3000/create-post'
// })

// recipeLink.addEventListener('click', () => {
//     location.href = 'http://localhost:3000/recipes'
// })