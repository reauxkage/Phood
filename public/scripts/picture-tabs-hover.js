const shareTabs = document.querySelectorAll('.post-container-content-share')
const recipeTabs = document.querySelectorAll('.post-container-content-recipe')

const shareTabEnterHandler = (shareTab) => {
    const shareTabLetters = shareTab.children

    for (const letter of shareTabLetters) {
        letter.style.color = 'rgba(245, 146, 43, .90)'
        // letter.style.paddingRight = 0
        // if(!letter.nextElementSibling) {
        //     letter.style.borderBottom = '1px solid rgba(245, 146, 43, .90)'
        //     letter.style.width = '50%';
        //     letter.style.marginLeft = '1em'
        //     letter.style.paddingBottom = '1em'
        // }
    }

    // shareTab.style.borderTop = '1px solid #2B8EF5'
    // shareTab.style.borderBottom = '1px solid #2B8EF5'

    const image = shareTab.nextElementSibling
    // image.style.borderTopLeftRadius = 0
    // image.style.borderBottomLeftRadius = 0

    const shareArrow = shareTab.previousElementSibling
    shareArrow.style.display = 'flex'

    const title = shareTab.parentElement.previousElementSibling
    title.style.marginLeft = '5em'

    // const bottom = shareTab.parentElement.nextElementSibling
    // bottom.style.marginLeft = '5em'

}

const shareTabLeaveHandler = (shareTab) => {
    shareTabLetters = shareTab.children

    for (const letter of shareTabLetters) {
        letter.style.color = '#C3D6DD'
        if(!letter.nextElementSibling) {
            letter.style.borderBottom = 'none'
            letter.style.width = '4em';
            letter.style.marginLeft = 0
            letter.style.paddingBottom = 0
        }
    }

    shareTab.style.border = 'none'

    const image = shareTab.nextElementSibling
    image.style.borderTopLeftRadius = '10px'
    image.style.borderBottomLeftRadius = '10px'
    
    const shareArrow = shareTab.previousElementSibling
    shareArrow.style.display = 'none'

    const title = shareTab.parentElement.previousElementSibling
    title.style.marginLeft = '3.45em'
}

const recipeTabEnterHandler = (recipeTab) => {
    const recipeTabLetters = recipeTab.children

    for (const letter of recipeTabLetters) {
        letter.style.color = 'rgba(245, 146, 43, .90)'
    }

    const recipeArrow = recipeTab.nextElementSibling
    recipeArrow.style.display = 'flex'

}

const recipeTabLeaveHandler = (recipeTab) => {
    const recipeTabLetters = recipeTab.children

    for (const letter of recipeTabLetters) {
        letter.style.color = '#C3D6DD'
    }

    const recipeArrow = recipeTab.nextElementSibling
    recipeArrow.style.display = 'none'
}

for (let i = 0; i < shareTabs.length; i++) {
    shareTabs[i].addEventListener('mouseenter', function() {shareTabEnterHandler(shareTabs[i])})
    shareTabs[i].addEventListener('mouseleave', function() {shareTabLeaveHandler(shareTabs[i])})
    recipeTabs[i].addEventListener('mouseenter', function() {recipeTabEnterHandler(recipeTabs[i])})
    recipeTabs[i].addEventListener('mouseleave', function() {recipeTabLeaveHandler(recipeTabs[i])})
}