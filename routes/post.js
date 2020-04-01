const express = require('express')
const Router = express.Router()
const postController = require('../controllers/post')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        console.log(req.body.description)
        cb(null, req.body.description + '.jpeg')
    }
})
   
const upload = multer({ storage: storage })

Router.get('/', postController.getPosts)
Router.get('/create-post', postController.getCreatePost)
Router.get('/recipes', postController.getRecipes)
Router.post('/create-post', upload.single('image'), postController.postCreatePost)

module.exports = Router
