
export class Numbers{
    totale: number;
    nClick: number;
    constructor(totale: number,nClick: number )
    {
        this.totale = totale; this.nClick = nClick
    }

    piu(numero: number):boolean
    {
        this.nClick +=1
        this.totale =  this.totale + numero
        return false
    }

    meno(numero: number):boolean
    {
        this.nClick +=1
        this.totale =  this.totale - numero
        return false
    }
}