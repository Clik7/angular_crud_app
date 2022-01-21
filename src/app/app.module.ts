import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProvinceComponent } from './province/province/province.component';
import { ComuniComponent } from './comuni/comuni.component';
import { AddComuniComponent } from './add-comuni/add-comuni.component';
import { FattureComponent } from './fatture/fatture/fatture.component';
import { DetailCustomerComponent } from './customer/detail-customer/detail-customer/detail-customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer/add-customer.component';
import { EditComuniComponent } from './edit-comuni/edit-comuni.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer/edit-customer.component';
import { EditFattureComponent } from './fatture/edit-fatture/edit-fatture/edit-fatture.component';
import { AddProvinceComponent } from './province/add-province/add-province.component';
import { EditProvinceComponent } from './province/edit-province/edit-province.component';
import { AddFattureComponent } from './fatture/add-fatture/add-fatture/add-fatture.component';
import { DetailFattureComponent } from './fatture/detail-fatture/detail-fatture/detail-fatture.component';
import { ManagementSystemComponent } from './managementSystem/management-system/management-system.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CustomersComponent,
    ProvinceComponent,
    ComuniComponent,
    AddComuniComponent,
    FattureComponent,
    DetailCustomerComponent,
    AddCustomerComponent,
    EditComuniComponent,
    EditCustomerComponent,
    EditFattureComponent,
    AddProvinceComponent,
    EditProvinceComponent,
    AddFattureComponent,
    DetailFattureComponent,
    ManagementSystemComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
],
  providers: [
  
  AppRoutingModule,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi: true
  }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
