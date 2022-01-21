import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/classes/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editCustomer!:Customer;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerService.getClienteById(params['id']).subscribe(response => {
        this.editCustomer = response;
      })
    })
  }

  saveCustomer(editCustomer:Customer) {
    this.customerService.editCustomer(editCustomer).subscribe(data => {
      Swal.fire('OK', 
      'Hai modificato questo cliente con successo!',
      'success')
      this.router.navigate(['detailCustomer/page/', this.editCustomer.id])
    })
  }

}



