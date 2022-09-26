const { Router } = require("express");
const {
  getPerson,
  createPerson,
  getOnePerson,
  newAnticipo,
  createCuentaGestion,
  createPerson2,
  getCargo,
  getArea,
  getPro,
  getCuenta
  } = require("../controller/rrhh.controller");

const router = Router();

router.get('/personal', getPerson);
router.get('/:apellido', getOnePerson);
router.post('/personal', createPerson2);
router.get('/personal/cargo', getCargo);
router.get('/personal/area', getArea);
router.get('/personal/pro', getPro);
router.get('/personal/cuenta', getCuenta);

module.exports = router;