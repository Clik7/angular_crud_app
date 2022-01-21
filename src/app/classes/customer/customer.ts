import { ICustomer } from "src/app/interfaces/customer/icustomer";
import { Sede } from "../sede/sede"; 
import { ISede } from "src/app/interfaces/sede/isede";

export class Customer implements ICustomer {
    id!: number;
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!: string;
    email!: string;
    pec!: string;
    telefono!: string;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: string;
    emailContatto!: string;
    indirizzoSedeOperativa:Sede = new Sede();
    indirizzoSedeLegale:Sede = new Sede();
    dataInserimento!: string;
    dataUltimoContatto!: string;
    fatturatoAnnuale!:string;
    
    
}


//* UNA CLASSE E UN'INTERFACCIA SEDE E ISEDE 
