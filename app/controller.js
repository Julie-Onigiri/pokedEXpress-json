const pokedex = require ('../data/pokedex.json');

const controller = {
// methode pour la page d'accueil
homePage: (req, res) => {
    res.render('index', { pokedex });
},

pokePage: (req,res) => {
    const pokeNum = req.params.numero;
    console.log(pokeNum);
    const findPoke = pokedex.find(poke => poke.numero === parseInt(pokeNum))
    res.render('pokePage', { poke:findPoke});
}

};

module.exports = controller;
