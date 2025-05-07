const express = require('express');
const app = express();

app.get('/factorial', (req, res) => {
  const num = req.query.number;
  res.redirect(`/factorial/${num}`);
});

app.get("/factorial/:number",(req,res)=>{
    const num=parseInt(req.params.number);
    let result=1;
    for(let i=2;i<=num;i++){
        result*=i;
    }
    res.send(result);
});

app.listen(3000, () => {
  console.log('running');
});
