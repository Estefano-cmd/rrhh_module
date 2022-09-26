const { Router } = require("express");
const {
  getPerson,
  getOnePerson,
  newAnticipo,
  newDescuento,
  newBono,
  createCuentaGestion,
  createPerson2,
  getCargo,
  getArea,
  getPro,
  getCuenta,
  getContrato,
  updateCuenta
  } = require("../controller/rrhh.controller");

const router = Router();

router.get('/personal', getPerson);
router.get('/:apellido', getOnePerson);
router.post('/personal', createPerson2);
router.get('/personal/cargo', getCargo);
router.get('/personal/area', getArea);
router.get('/personal/pro', getPro);
router.get('/cuenta/:apellido/:fecini/:fecfin', getCuenta);
router.get('/contrato/:apellido', getContrato);
router.post('/cuenta', createCuentaGestion);
router.post('/cuenta/anticipo', newAnticipo);
router.post('/cuenta/descuento', newDescuento);
router.post('/cuenta/bono', newBono);
router.put('/:estadocuenta', updateCuenta);

module.exports = router;