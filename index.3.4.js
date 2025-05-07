const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`
    <form method="post" action="/login">
        <div>
            <label>Username:</label>
            <input id="username-input" name="username" type="text">
        </div>
        <div>
            <label>Password:</label>
            <input id="password-input" name="password" type="password">
        </div>
        <div>
            <div>Introduce yourself</div>
            <textarea id="introduction-input" name="introduction"></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>`);
});

app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    res.send(`username:${username} password:${password}`);
});

app.listen(3000,(req,res)=>{
    console.log("running");
})