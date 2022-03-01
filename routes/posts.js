const express = require ('express');
const router = express.Router();
const Post = require('../models/Posts');

//GET DATA
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err})
    }
});

//INSERT DATA
router.post('/', async (req,res) => {
    console.log(JSON.stringify(req.body));
    const post = new Post({
        name: req.body.name
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err})
    }
});

//GET SPECIFIC DATA
router.get('/:postId', async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err})
    }
});

//DELETE DATA
router.delete('/:postId', async (req,res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postId});
        res.json(removePost);
        console.log(removePost);
    }catch(err){
        res.json({message: err})
    }
});

//UPDATE DATA
router.patch('/:postId', async (req,res) => {
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set : {name: req.body.name}
            });
            res.json(updatePost);
    }catch(err){
        res.json({message: err})
    }
});

module.exports = router;
