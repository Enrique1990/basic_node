const postsJSON = require('../posts.json');


exports.test = (req, res) => {
    
    res.render('test', {
        title: "this is a test",
    });
}
exports.home = (req, res) => {
    const posts = postsJSON.posts
    res.render('home', {
        title: "Post",
        posts
    });
}