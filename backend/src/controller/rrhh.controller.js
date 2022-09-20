const connection = require('../db');


/* VISUALIZACIÓN DE TODO EL PERSONAL */
const getPerson = async (req, res, next) => {
    try {
        const allPerson = await connection.query('SELECT * from rrhh_personal p inner join rrhh_contacto c on c.id = p.id');
        res.json(allPerson.rows);
    } catch (error) {
        next(error);
    }
}


/* CREACIÓN DE UN NUEVO PERSONAL */
const createPerson = async (req, res, next) => {
    try {
        const { nombre, apellido, ci, telefono, correo, direccion, fecnac,
            genpersonal, antecedentes, descpsicologica, idcargo, idarea, idprofesion } = req.body;

        const existe = await connection.query('SELECT * from rrhh_contacto WHERE apellido = $1', [apellido]);
        
        /* Validación si existe el contacto */
        if (existe != null) {
            const personal = await connection.query('SELECT * from personal WHERE id = $1', [existe.fields[0]]);
            /* Validación si existe el personal */
            if (personal != null) {
                return res('The staff is alredy registered')
            } else {
                const id = existe.fields[0];
                const newPerson = await connection.query('INSERT INTO rrhh_personal (id, genpersonal, antecedentes, descpsicologico, idcargo, idarea, idprofesion) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                    [id, genpersonal, antecedentes, descpsicologica, idcargo, idarea, idprofesion]);

                res.json(newPerson.rows[0]);
            }
        } else {
            const newContact = await connection.query('INSERT INTO rrhh_contacto (nombre, apellido, ci, telefono, correo, direccion, fecnac) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [nombre, apellido, ci, telefono, correo, direccion, fecnac]);

            const newPerson = await connection.query('INSERT INTO rrhh_personal (id, genpersonal, antecedentes, descpsicologico, idcargo, idarea, idprofesion) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [newContact.fields[0], genpersonal, antecedentes, descpsicologica, idcargo, idarea, idprofesion]);

            res.json(newContact.rows[0], newPerson.rows[0]);
        }

    } catch (error) {
        next(error)
    }
}

const getOnePerson = async (req, res, next) => {
    try {
        const { apellido } = req.params;

        const result = await connection.query("SELECT * FROM rrhh_personal p inner join rrhh_contacto c on p.id = c.id WHERE c.apellido = $1", [apellido]);
        if(result.rows.length === 0){
            return res.status(404).json({message: "Staff not found"});
        }
        res.json(result.rows[0]);

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getPerson,
    createPerson,
    getOnePerson
};