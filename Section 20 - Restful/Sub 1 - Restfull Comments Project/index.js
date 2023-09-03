const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

const comments = [
    {
        id : 1,
        username : 'arkan adli',
        comment : 'hohoho that is so funny man!'
    },
    {
        id : 2,
        username : 'jimmy',
        comment : 'indeed i was fly'
    },
    {
        id : 3,
        username : 'gordon',
        comment : 'Lets make something to eat!'
    },
    {
        id : 4,
        username : 'evelyn',
        comment : 'my CATS just DIED! :('
    }
]

app.use(express.urlencoded({extended: true})); // to compile the request data for post method

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/comments' , (req,res) => {
    res.render('comments/index',{comments});
});

app.get('/comments/new',(req,res) =>{
    res.render('comments/new');
});

app.get('/comments/:id',(req,res) => {
    const {id} = req.params;
    const comment = comments.find((c) => c.id === parseInt(id));
    console.log(comment);
    res.render('comments/show', {comment});
})

app.post('/comments', (req,res) => {
    const {username , comment} = req.body;
    const newComment ={username , comment} ;
    // console.log(newComment);
    comments.push(newComment);
    // console.dir(comments);
    res.redirect('/comments') // it will redirect to get /comments 
});

app.get('/',(req,res) => {
    res.render('home');
});

app.listen(port, ()=> {
    console.log(`LISTENING PORT ${port}`);
});