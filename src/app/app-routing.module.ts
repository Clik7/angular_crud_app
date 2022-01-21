import { ManagementSystemComponent } from './managementSystem/management-system/management-system.component';
import { AddComuniComponent } from './add-comuni/add-comuni.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { ProvinceComponent } from './province/province/province.component';
import { ComuniComponent } from './comuni/comuni.component';
import { FattureComponent } from './fatture/fatture/fatture.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer/add-customer.component';
import { EditComuniComponent } from './edit-comuni/edit-comuni.component';
import { DetailCustomerComponent } from './customer/detail-customer/detail-customer/detail-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer/edit-customer.component';
import { AddProvinceComponent } from './province/add-province/add-province.component';
import { EditProvinceComponent } from './province/edit-province/edit-province.component';
import { DetailFattureComponent } from './fatture/detail-fatture/detail-fatture/detail-fatture.component';
import { EditFattureComponent } from './fatture/edit-fatture/edit-fatture/edit-fatture.component';
import { LoginGuard } from './Guard/login.guard';
import { AddFattureComponent } from './fatture/add-fatture/add-fatture/add-fatture.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"users",
    component: CustomersComponent, canActivate: [LoginGuard]
  },
  {
    path:"users/page/:page",
    component: CustomersComponent, canActivate: [LoginGuard]
  },
  {
    path:"province",
    component: ProvinceComponent, canActivate: [LoginGuard]
  },
  {
    path:"province/page/:page",
    component: ProvinceComponent, canActivate: [LoginGuard]
  },
  {
    path:"comuni",
    component: ComuniComponent, canActivate: [LoginGuard]
  },
  {
    path:"comuni/page/:page",
    component: ComuniComponent, canActivate: [LoginGuard]
  },
  {
    path:"comuni/editComuni/:id",
    component: EditComuniComponent, canActivate: [LoginGuard]
  },
  {
    path:"fatture",
    component: FattureComponent, canActivate: [LoginGuard]
  },
  {
    path:"fatture/page/:page",
    component: FattureComponent, canActivate: [LoginGuard]
  },
  {
    path:"newCustomer",
    component: AddCustomerComponent, canActivate: [LoginGuard]
  },
  {
    path:"newCustomer/page/:page",
    component: AddCustomerComponent, canActivate: [LoginGuard]
  },
  {
    path:"detailCustomer",
    component: DetailCustomerComponent, canActivate: [LoginGuard]
  },
  {
    path:"detailCustomer/page/:id",
    component: DetailCustomerComponent, canActivate: [LoginGuard]
  },
  {
    path:"editCustomer",
    component: EditCustomerComponent, canActivate: [LoginGuard]
  },
  {
    path:"editCustomer/page/:id",
    component: EditCustomerComponent, canActivate: [LoginGuard]
  },
  {
    path:"addProvince",
    component: AddProvinceComponent, canActivate: [LoginGuard]
  },
  {
    path:"addProvince/page/:page",
    component: AddProvinceComponent, canActivate: [LoginGuard]
  },
  {
    path:"editProvince",
    component: EditProvinceComponent, canActivate: [LoginGuard]
  },
  {
    path:"editProvince/page/:id",
    component: EditProvinceComponent, canActivate: [LoginGuard]
  },
  {
    path:"addComuni",
    component: AddComuniComponent, canActivate: [LoginGuard]
  },
  {
    path:"addComuni/page/:page",
    component: AddComuniComponent, canActivate: [LoginGuard]
  },
  {
    path:"editComuni",
    component: EditComuniComponent, canActivate: [LoginGuard]
  },
  {
    path:"editComuni/page/:id",
    component: EditComuniComponent, canActivate: [LoginGuard]
  },
  {
    path:"detailFatture",
    component: DetailFattureComponent, canActivate: [LoginGuard]
  },
  {
    path:"detailFatture/:id",
    component: DetailFattureComponent, canActivate: [LoginGuard]
  },
  {
    path:"editFatture",
    component: EditFattureComponent, canActivate: [LoginGuard]
  },
  {
    path:"editFatture/page/:id",
    component: EditFattureComponent, canActivate: [LoginGuard]
  },
  {
    path:"addFatture",
    component: AddFattureComponent, canActivate: [LoginGuard]
  },
  {
    path:"addFatture/page/:id",
    component: AddFattureComponent, canActivate: [LoginGuard]
  },
  {
    path:"managementSystem",
    component: ManagementSystemComponent, canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
