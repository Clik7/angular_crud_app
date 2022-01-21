import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer/customer';
import { ICustomer } from 'src/app/interfaces/customer/icustomer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {

  id!:number;
  details!:Customer;

  constructor(private customerService: CustomerService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    //* SERVE PER IL ROUTING
    this.route.params.subscribe(res => {
      this.customerService.getClienteById(res['id']).subscribe(res => {
      this.details= res;
      })
    })
  }

  openEdit(editCustomer: Customer){
    this.router.navigate(['editCustomer/page/', editCustomer.id])
  }

 

 

}



