import { IFatture } from "src/app/interfaces/fatture/ifatture";
import { Customer } from "../customer/customer";
import { StatoFatture } from "../stato-fatture/stato-fatture";

export class Fatture implements IFatture {
    id!:number;
    data!:string;
    numero!:string;
    anno!:string;
    importo!:string;
    stato:StatoFatture = new StatoFatture;
    cliente: Customer = new Customer;
}
