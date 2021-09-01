const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/test', (req,res)=> {
    res.send('pineapple');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> {
    console.log('listening to port ' + PORT);
});