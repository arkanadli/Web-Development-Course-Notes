const express = require('express');
const port = 3000;
const methodOverride= require('method-override') // initiate other method like delete, patch, etc
const app = express(); //initiate express
const path = require('path'); 
const { v4: uuid } = require('uuid'); // to make unique identifier


let comments = [
    {
        id : uuid(),
        username : 'arkan adli',
        comment : 'hohoho that is so funny man!'
    },
    {
        id : uuid(),
        username : 'jimmy',
        comment : 'indeed i was fly'
    },
    {
        id : uuid(),
        username : 'gordon',
        comment : 'Lets make something to eat!'
    },
    {
        id : uuid(),
        username : 'evelyn',
        comment : 'my CATS just DIED! :('
    }
]

app.use(express.urlencoded({extended: true})); // to compile the request data for post method
app.use(express.json()); // to compile the request data for post method
app.use(methodOverride('_method')) //add other method to html like delete,patch ,etc

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

//show all COmments
app.get('/comments' , (req,res) => {
    res.render('comments/index',{comments});
});
//Create
app.get('/comments/new',(req,res) =>{
    res.render('comments/new');
});
// Upload Create
app.post('/comments', (req,res) => {
    const {username , comment} = req.body;
    const newComment ={username , comment, id:uuid()} ;
    // console.log(newComment);
    comments.push(newComment);
    // console.dir(comments);
    res.redirect('/comments') // it will redirect to get /comments 
});
// Read by id
app.get('/comments/:id',(req,res) => {
    const {id} = req.params;
    const comment = comments.find((c) => c.id === id);
    console.log(comment);
    res.render('comments/show', {comment});
})


//edit by id
app.get('/comments/:id/edit', (req,res) => {
    const {id} = req.params;
    const comment = comments.find((c) => c.id === id);
    res.render('comments/edit', {comment});
})
// upload edit
app.patch('/comments/:id', (req,res) => {
    const {id} = req.params;
    const {newText : updateComment} =  req.body; //collect data from request, var newText into updateComment
    console.log(updateComment);
    const foundComment = comments.find((c) => c.id === id)
    foundComment.comment = updateComment;
    // res.send('success')
    res.redirect(`/comments/${id}`) // it will redirect to get /comments 
})

//Delete by id note!: you can delete something with javascript script like axios
app.delete('/comments/:id', (req,res) => { 
    const {id} = req.params;
    comments = comments.filter(comment => comment.id !== id);
    res.redirect(`/comments`)
})

// set home routes
app.get('/',(req,res) => {
    res.render('home');
});

app.listen(port, ()=> {
    console.log(`LISTENING PORT ${port}`);
});