export class Cuenta{
    constructor(
        totalpago = 0,
        feccuenta = null,
        estadocuenta =  "",
        idpersonal = 0) 
    {  
        this.totalpago = totalpago,
        this.feccuenta = feccuenta,
        this.estadocuenta =  estadocuenta,
        this.idpersonal = idpersonal
    }
      totalpago: Number
      feccuenta: Date | any
      estadocuenta: String
      idpersonal: Number
}