const { Router } = require("express");
const {
  getPerson,
  getOnePerson,
  getPersonByLastName,
  newAnticipo,
  newDescuento,
  newBono,
  createCuentaGestion,
  createPerson2,
  createPerson,
  getCargo,
  getArea,
  getPro,
  getCuenta,
  getContrato
  } = require("../controller/rrhh.controller");

const router = Router();

router.get('/personal', getPerson);
router.get('/:apellido', getOnePerson);
router.get('/personal/lastname/:apellido', getPersonByLastName);
router.post('/personalPrueba', createPerson2);
router.post('/personal', createPerson);
router.get('/personal/cargo', getCargo);
router.get('/personal/area', getArea);
router.get('/personal/pro', getPro);
router.get('/cuenta/:apellido/:fecini/:fecfin', getCuenta);
router.get('/contrato/:ci', getContrato);
router.post('/cuenta', createCuentaGestion);
router.post('/cuenta/anticipo', newAnticipo);
router.post('/cuenta/descuento', newDescuento);
router.post('/cuenta/bono', newBono); 

module.exports = router;