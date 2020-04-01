const Post = require('../models/post')
const fs = require('fs')
const path = require('path')

exports.getPosts = (req, res, next) => {
    Post.find()
        .then(posts => {
            res.render('pheed', {
                posts: posts
            })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getCreatePost = (req, res, next) => {
    res.render('create-post', {
        pageTitle: 'create-post'
    })
}

exports.postCreatePost = (req, res, next) => {
    const description = req.body.description
    const date = getDate()
    const imageUrl = 'uploads/' + req.body.description + '.jpeg'

    const post = new Post({
        description: description,
        date: date,
        imageUrl: imageUrl
    })

    post
        .save()
        .then(result => {
            console.log('Reloading!')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getRecipes = (req, res, next) => {
    res.render('recipes', {
        pageTitle: 'recipes' 
    })
}

const getDate = () => {

    let date = new Date()
    date = date.toString().split('')
    const spaceAfterYear = 4
    let spaceCount = 0
    let letterAfterFirstSpaceIndex
    let thirdSpaceIndex
    for (let i = 0; spaceCount < spaceAfterYear; i++) {
        if(date[i] === ' ') {
            spaceCount++
            if(spaceCount === 1) {
                letterAfterFirstSpaceIndex = i + 1
            }
            if(spaceCount === 3) {
                date[i] = ','
                thirdSpaceIndex = i + 1
            }
            if(spaceCount === spaceAfterYear) {
                date = date.slice(letterAfterFirstSpaceIndex, i)
            }
        }
    }

    date.splice(thirdSpaceIndex - letterAfterFirstSpaceIndex, 0, ' ')
    const dateCopy = date

    switch (dateCopy.slice(0, 3).join('')) {
        case 'Jan':
            date.splice(0, 3, 'January')
            break
        case 'Feb':
            date.splice(0, 3, 'February')
            break
        case 'Mar':
            date.splice(0, 3, 'March')
            break
        case 'Apr':
            date.splice(0, 3, 'April')
            break
        case 'Jun':
            date.splice(0, 3, 'June')
            break
        case 'Jul':
            date.splice(0, 3, 'July')
            break;
        case 'Aug':
            date.splice(0, 3, 'August')
            break
        case 'Sep':
            date.splice(0, 3, 'September')
            break
        case 'Oct':
            date.splice(0, 3, 'October')
            break
        case 'Nov': 
            date.splice(0, 3, 'November')
            break
        case 'Dec': 
            date.splice(0, 3, 'December')
        }

    return date.join('')
}