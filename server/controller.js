const fortunes = [
  { fortune: `Good things will come if you stay on your path`, 
    id: 1 },
  { fortune: `You help more than you would ever know!`, 
    id: 2 },
  { fortune: `A dubious friend may be an enemy in camouflage.`, 
    id: 3 },
  {
    fortune: `A person of words and not deeds is like a garden full of weeds.`,
    id: 4,
  },
  { fortune: `A lifetime of happiness lies ahead of you.`, 
    id: 5 },
];
globalId = 6



module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortunes = fortunes[randomIndex].fortune;
    res.status(200).send(randomFortunes);
  },
  addFortune: (req, res) => {
    const { newFortune } = req.body;
    const newFortuneObj = {
        newFortune,
        id: globalId
    }
    fortunes.push(newFortuneObj);
    res.status(200).send(fortunes);
    globalId++
  },
  deleteFortune: (req, res) => {
    let thisSucks = false
        fortunes.forEach((el, index) => {
        if (el.id === +req.params.id){
            fortunes.splice(index, 1)
            thisSucks = true
        }          
    }) 

    if (thisSucks === true) {
        return res.status(200).send(fortunes), console.log(fortunes)
    } else {
        return res.status(400).send(`Shoot this is not working!`)
    }
  },
  changeFortune: (req, res) => {
    let iAmSlowlyCatchingOn = false
    fortunes.forEach((el, index) => {
        if (el.id === +req.params.id){
            el.fortune = req.body.newFortune
            iAmSlowlyCatchingOn = true
        }
    })
    if (iAmSlowlyCatchingOn) {
        return console.log(fortunes), res.status(200).send(fortunes)
    } else {
        return res.status(400).send(req.body.newFortune)
    }
  },
  getAllFortunes: (req, res) => {
    const fortune = fortunes
    res.status(200).send(fortune)
  }
};
// `This is also not working!`