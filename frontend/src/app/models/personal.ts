export class Staff{
    constructor(nombre = "", apellido = "", ci = "", telefeno = "", correo = "", direccion = "", fecnac = null, genpersonal = "", antecedentes = "", decpsicologico = "", idcargo = 0, idarea = 0, idprofesion = 0) 
    {  
        this.nombre = nombre;
        this.apellido = apellido;
        this.ci = ci;
        this.telefeno = telefeno;
        this.correo = correo;
        this.direccion = direccion;
        this.fecnac = fecnac;
        this.genpersonal = genpersonal;
        this.antecedentes = antecedentes;
        this.decpsicologico = decpsicologico;
        this.idcargo = idcargo;
        this.idarea = idarea;
        this.idprofesion = idprofesion;
    }
      nombre: String
      apellido: String
      ci: String
      telefeno: String
      correo: String
      direccion: String
      fecnac: Date | any
      genpersonal: String
      antecedentes: String
      decpsicologico: String
      idcargo: Number
      idarea: Number
      idprofesion: Number
}