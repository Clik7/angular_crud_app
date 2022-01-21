import { Comuni } from './../../../classes/comuni/comuni';
import { ISede } from './../../../interfaces/sede/isede';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/classes/customer/customer';
import { ICustomer } from 'src/app/interfaces/customer/icustomer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import Swal from 'sweetalert2';
import { Sede } from 'src/app/classes/sede/sede';
import { IComuni } from 'src/app/interfaces/comuni/icomuni';
import { ActivatedRoute, Router } from '@angular/router';
import { ComuniService } from 'src/app/services/comuni/comuni.service';
import { ProvinceService } from 'src/app/services/province/province.service';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { Province } from 'src/app/classes/province/province';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  
  newCustomer:ICustomer = new Customer();

  newSedeLeg: ISede = new Sede;
  newSedeOpe: ISede = new Sede;
  newComune: IComuni = new Comuni;
  newProvincia: IProvince = new Province();

  province: IProvince[] = [];
  comuni: IComuni[] = [];

  showLegale: boolean = false;
  showOperativa: boolean = false;

  constructor(
    private customerService:CustomerService,
    private provinceService: ProvinceService,
    private comuniService: ComuniService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { 
    this.provinceService.getAllProvince().subscribe((prov:any) => {
      this.province = prov.content
    });
    this.comuniService.getAllComuni().subscribe((com:any) => {
      this.comuni = com.content
    })
  })
  }

  addCustomer(newCustomer: ICustomer) {
    this.customerService.createCustomer(newCustomer).subscribe(response => {
      Swal.fire(
        'Ben fatto!',
        'Cliente aggiunto con successo!',
        'success'
      );
      
      this.router.navigate(['/users'])
    });
  };

  showSedeLegale(){
    if(this.showLegale == false)
      this.showLegale = true
    else
      this.showLegale = false
  }

  showSedeOperativa(){
    if(this.showOperativa == false)
      this.showOperativa = true
    else
      this.showOperativa = false
  }
  

}
