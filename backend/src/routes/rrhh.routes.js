const { Router } = require("express");
const {
  getPerson,  
  getOnePerson,
  createPerson
  } = require("../controller/rrhh.controller");

const router = Router();

router.get('/personal', getPerson);
router.get('/:apellido', getOnePerson);

module.exports = router;