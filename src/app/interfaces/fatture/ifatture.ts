import { ICustomer } from "../customer/icustomer";
import { IStatoFatture } from "../stato-fatture/istato-fatture";

export interface IFatture {
    id:number,
    data:string,
    numero:string,
    anno:string,
    importo:string,
    stato:IStatoFatture
    cliente: ICustomer;
}


