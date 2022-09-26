export class Cuenta{
    constructor(
        totalpago = 0,
        feccuenta = null,
        estadocuenta =  "",
        idpersonal = 0,
        fecini = "",
        fecfin = "") 
    {  
        this.totalpago = totalpago,
        this.feccuenta = feccuenta,
        this.estadocuenta =  estadocuenta,
        this.idpersonal = idpersonal,
        this.fecini = fecini,
        this.fecfin = fecfin
    }
      totalpago: Number
      feccuenta: Date | any
      estadocuenta: String
      idpersonal: Number
      fecini: string
      fecfin: string
}