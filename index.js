const express = require('Express');
const axios = require('axios');
const app = express();
const path = require('path');
const { dirname } = require('path');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/champions/:champion', async (req, res) => {
    let { champion } = req.params;
    champion = champion.charAt(0).toUpperCase() + champion.slice(1);
    try {
        const reqDDragon = await axios("http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json?api-key=RGAPI-52196e30-a662-4dfd-9ad8-e53dc023a0fc");
        const { name, title, blurb, tags, image, stats} = reqDDragon.data.data[champion];

        const champImg = image.full;
 
        console.log(stats);
        res.render('champTest', { name, title, champImg, blurb, stats});
    } catch(e){
        console.log(`ERROR: Try messing with the code. MAKE SURE YOU'RE NOT OVER-REQUESTING! error: ${e}`);
    }
})

app.get('/*', (req, res) => {
    res.send("Hey you stinky! This is the default page! Put in an actual fucking address");
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})