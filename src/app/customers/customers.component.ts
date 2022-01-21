import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../classes/customer/customer';
import { ICustomer } from '../interfaces/customer/icustomer';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
 

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    

    this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
      
      this.customerService.getPagedUsers(params["page"]).subscribe((customers:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
       
        this.customers = customers.content
        
        /**inizio paginazione */
        this.totalElements = customers.totalElements
        this.size = customers.size
        this.numberOfPages = (customers.totalElements / customers.size)


        for(let i = 0; i <= this.numberOfPages; i++){
          console.log(i);
          this.pageNumbers.push(i);
        }

        /**fine paginazione */
      });

    })
   
  

}

      removeCustomer(customer:Customer){
      this.customerService.deleteCustomer(customer).subscribe(res => {
      let index = this.customers.indexOf(customer);
      this.customers.splice(index, 1);
  
    })

  }

     showDetails(item: ICustomer){
       this.router.navigate(['detailCustomer/page/', item.id])
       

     } 


}
