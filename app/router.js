const express = require ('express');

const controller = require ('./controller');
const app = express();
const router = express.Router();

router.get('/',controller.homePage);
router.get ('/poke/:numero', controller.pokePage);


module.exports=router;