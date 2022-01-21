import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/classes/province/province';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { ProvinceService } from 'src/app/services/province/province.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.css']
})
export class AddProvinceComponent implements OnInit {

  newProvincia:IProvince = new Province()

  constructor(private provinceService:ProvinceService, private router:Router) { }

  ngOnInit(): void {
  }
  
  addProvincia(newProvincia: IProvince) {
    this.provinceService.createProvincia(newProvincia).subscribe(res =>Swal.fire(
      'Ben fatto! ',
      'Provincia aggiunta con successo!',
      'success'
    ));
   
    this.router.navigate(['/province/page/:page'])    
    
  };
}
