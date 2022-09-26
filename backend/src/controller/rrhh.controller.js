const connection = require('../db');


/* VISUALIZACION DE CARGO */
const getCargo = async (req, res, next) => {
    try {
        const allCargo = await connection.query('SELECT * from rrhh_cargo');
        res.json(allCargo.rows);
    } catch (error) {
        next(error)
    }
}
/* VISUALIZACION DE AREA */
const getArea = async (req, res, next) => {
    try {
        const allArea = await connection.query('SELECT * from rrhh_area');
        res.json(allArea.rows);
    } catch (error) {
        next(error)
    }
}
/* VISUALIZACION DE PROFESION */
const getPro = async (req, res, next) => {
    try {
        const allPro = await connection.query('SELECT * from rrhh_profesion');
        res.json(allPro.rows);
    } catch (error) {
        next(error)
    }
}

/* VISUALIZACIÓN DE TODO EL PERSONAL */
const getPerson = async (req, res, next) => {
    try {
        const allPerson = await connection.query('SELECT * FROM rrhh_personal p inner join rrhh_contacto c on p.id = c.id inner join rrhh_cargo ca on p.idcargo = ca.id');
        res.json(allPerson.rows);
    } catch (error) {
        next(error);
    }
}


/* CREACIÓN DE UN NUEVO PERSONAL REVISAR */
const createPerson = async (req, res, next) => {
    try {
        const { nombre, apellido, ci, telefeno, correo, direccion, fecnac,
            genpersonal, antecedentes, decpsicologico, idcargo, idarea, idprofesion } = req.body;

        const existe = await connection.query('SELECT * from rrhh_contacto WHERE ci = $1', [ci]);
        console.log(existe.rowCount)

        /* Validación si existe el contacto */
        if (existe != null) {
            const personal = await connection.query('SELECT * from rrhh_personal WHERE id = $1', [existe.fields[0]]);
            /* Validación si existe el personal */
            if (personal.rowCount > 0) {
                return res.json('The staff is alredy registered')
            } else {
                const id_contact = existe.rows[0].id;
                console.log(decpsicologico)
                const newPerson = await connection.query('INSERT INTO rrhh_personal (id, genpersonal, antecedentes, decpsicologico, idcargo, idarea, idprofesion) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                    [id_contact, genpersonal, antecedentes, decpsicologico, idcargo, idarea, idprofesion]);

                res.json(newPerson.rows[0]);
            }
        } else {
            const newContact = await connection.query('INSERT INTO rrhh_contacto (nombre, apellido, ci, telefeno, correo, direccion, fecnac) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [nombre, buscar, ci, telefeno, correo, direccion, fecnac]);

            const newPerson = await connection.query('INSERT INTO rrhh_personal (id, genpersonal, antecedentes, decpsicologico, idcargo, idarea, idprofesion) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [newContact.rows[0].id, genpersonal, antecedentes, decpsicologico, idcargo, idarea, idprofesion]);

            res.json(newContact.rows[0], newPerson.rows[0]);
        }

    } catch (error) {
        next(error)
    }
}

/* INSERCIÓN DE CONTACTO Y PERSONAL */
const createPerson2 = async (req, res, next) => {
    try {
        const { nombre, apellido, ci, telefeno, correo, direccion, fecnac,
            genpersonal, antecedentes, decpsicologico, idcargo, idarea, idprofesion } = req.body;

            const newContact = await connection.query('INSERT INTO rrhh_contacto (nombre, apellido, ci, telefeno, correo, direccion, fecnac) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [nombre, apellido, ci, telefeno, correo, direccion, fecnac]);

            const newPerson = await connection.query('INSERT INTO rrhh_personal (id, genpersonal, antecedentes, decpsicologico, idcargo, idarea, idprofesion) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [newContact.rows[0].id, genpersonal, antecedentes, decpsicologico, idcargo, idarea, idprofesion]);

            res.json({
                message: "Staff create successfully"
            })

    } catch (error) {
        next(error)
    }
}

/* BÚSQUEDA DE PERSONAL */
const getOnePerson = async (req, res, next) => {
    try {
        const { apellido } = req.params;

        const result = await connection.query("SELECT * FROM rrhh_personal p inner join rrhh_contacto c on p.id = c.id inner join rrhh_cargo ca on p.idcargo = ca.id WHERE c.apellido = $1", [apellido]);
        if(result.rows.length === 0){
            return res.status(404).json({message: "Staff not found"});
        }
        res.json(result.rows[0]);

    } catch (error) {
        next(error);
    }
}

/* BÚSQUEDA DE PERSONAL POR APELLIDOS */
const getPersonByLastName = async (req, res, next) => {
    try {
        const { apellido } = req.params;

        const result = await connection.query("SELECT * FROM rrhh_personal p inner join rrhh_contacto c on p.id = c.id inner join rrhh_cargo ca on p.idcargo = ca.id WHERE c.apellido like $1", ['%'+apellido+'%']);
        if(result.rows.length === 0){
            return res.status(404).json({message: "Staff not found"});
        }
        res.json(result.rows);

    } catch (error) {
        next(error);
    }
}

/* BUSCAR CONTRATO */
const getContrato = async (req, res, next) => {
    try {
        const { apellido } = req.params;
        const contrato = await connection.query("SELECT * FROM rrhh_contrato c inner join rrhh_personal p on p.id = c.idpersonal inner join rrhh_contacto co on co.id = p.id WHERE co.apellido = $1", [apellido]);
        if(contrato.rows.length === 0){
            return res.status(404).json({message: "Staff without contract"});
        }
        res.json(contrato.rows[0]);
    } catch (error) {
        next(error)
    }
}

/* CREACIÓN DE LA CUENTA GESTION */
const createCuentaGestion = async (req, res, next) => {
    try {
        const { totalpago, feccuenta, idpersonal } = req.body;
        
        const cuentaPago = await connection.query("INSERT INTO rrhh_cuentagestion (totalpago, feccuenta, estadocuenta, idpersonal) VALUES ($1, $2, $3, $4) RETURNING *", 
        [totalpago, feccuenta, '1',idpersonal]);
        //Estado de la cuenta 1 = iniciado, 2 = pendiente, 3 = finalizado

        res.json(
            {message: "Create successfully"}
        );

    } catch (error) {
        next(error);
    }
}

/* REGISTRO DE ANTICIPOS */
const newAnticipo = async (req, res, next) => {
    try {
        const { fecanticipo, montoanticipo, detalleanticipo, apellido } = req.body;
        const contrato = await connection.query("SELECT * FROM rrhh_personal p inner join rrhh_cuentagestion cg on p.id = cg.idpersonal WHERE p.apellido = $1", [apellido]);
        const anticipo = await connection.query("INSERT INTO rrhh_anticipo (fecanticipo, montoanticipo, detalleanticipo, idcuentagestion) VALUES ($1, $2, $3, $4) RETURNING *",
        [fecanticipo, montoanticipo, detalleanticipo, contrato.field.id]);
        
        const total = contrato.fields.sueldo - anticipo.fields.montoanticipo;

        await connection.query('UPDATE rrhh_cuentagestion c inner join rrhh_anticipo a on c.id = a.idcuentagestion set totalpago = $1', [total])

        res.json(anticipo.rows[0]);

    } catch (error) {
        next(error);
    }
}
const newDescuento = async (req, res, next) => {
    try {
        const { fecmonto, montodescuento, idcategoria, apellido } = req.body;
        const contrato = await connection.query("SELECT * FROM rrhh_personal p inner join rrhh_cuentagestion cg on p.id = cg.idpersonal WHERE p.apellido = $1", [apellido]);
        const descuento = await connection.query("INSERT INTO rrhh_descuento (fecmonto, montodescuento, idcuentagestion, idcategoria) VALUES ($1, $2, $3, $4) RETURNING *",
        [fecmonto, montodescuento, contrato.fields.id, idcategoria]);
        
        const total = contrato.fields.sueldo - anticipo.fields.montoanticipo;

        await connection.query('UPDATE rrhh_cuentagestion c inner join rrhh_descuento d on c.id = d.idcuentagestion set totalpago = $1', [total])

        res.json(descuento.rows[0]);

    } catch (error) {
        next(error);
    }
}
const newBono = async (req, res, next) => {
    try {
        const { fecbono, montobono, detallebono, idcategoria, apellido } = req.body;
        const contrato = await connection.query("SELECT * FROM rrhh_personal p inner join rrhh_cuentagestion cg on p.id = cg.idpersonal WHERE p.apellido = $1", [apellido]);
        const bono = await connection.query("INSERT INTO rrhh_bono (fecbono, montobono, detallebono, idcuentagestion, idcategoria) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [fecbono, montobono, detallebono, contrato.fields.id, idcategoria]);
        
        const total = contrato.fields.sueldo + bono.fields.montoanticipo;

        await connection.query('UPDATE rrhh_cuentagestion c inner join rrhh_bono b on c.id = b.idcuentagestion set totalpago = $1', [total])

        res.json(bono.rows[0]);

    } catch (error) {
        next(error);
    }
}

const getCuenta = async (req, res, next) => {
    try {
        const { apellido, fecini, fecfin } = req.params;
        const pago = await connection.query('SELECT * from rrhh_cuentagestion cu inner join rrhh_personal p on p.id = cu.idpersonal inner join rrhh_contacto co on p.id = co.id WHERE co.apellido = $1 AND feccuenta between $2 AND $3', [apellido, fecini, fecfin]);
        const anticipo = await connection.query('SELECT * from rrhh_anticipo a inner join rrhh_cuentagestion cu on a.idcuentagestion = cu.id WHERE a.idcuentagestion = $1 AND fecanticipo between $2 AND $3', [pago.fields.id, fecini, fecfin]);
        const descuento = await connection.query('SELECT * from rrhh_descuento d inner join rrhh_cuentagestion cu on d.idcuentagestion = cu.id WHERE d.idcuentagestion = $1 AND fecmonto between $2 AND $3', [pago.fields.id, fecini, fecfin]);
        const bono = await connection.query('SELECT * from rrhh_bono b inner join rrhh_cuentagestion cu on b.idcuentagestion = cu.id WHERE b.idcuentagestion = $1 AND fecbono between $2 AND $3', [pago.fields.id, fecini, fecfin]);

        res.json(pago.rows, anticipo.rows, descuento.rows, bono.rows) 
    } catch (error) {
        next(error)
    }
}

const updateCuenta = async (req , res, next) => {
    try {
        const { estadocuenta1 } = req.params;
        const { totalpago, feccuenta, estadocuenta2 } = req.body;
        const response = await connection.query("UPDATE rrhh_cuentagestion set totalpago = $3, feccuenta = $4, estadocuenta = $2 WHERE estadocuenta = $1", ["'"+estadocuenta1+"'", estadocuenta2, totalpago, feccuenta]);

        console.log(estadocuenta2)
        res.json({
            message: 'Cuentagestion Updated Successully'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getPerson,
    getOnePerson,
    getPersonByLastName,
    newAnticipo,
    createCuentaGestion,
    createPerson2,
    createPerson,
    getCargo,
    getArea,
    getPro,
    getCuenta,
    getContrato,
    newDescuento,
    newBono,
    updateCuenta
};