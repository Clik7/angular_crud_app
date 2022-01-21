import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comuni } from '../classes/comuni/comuni';
import { IComuni } from '../interfaces/comuni/icomuni';
import { IProvince } from '../interfaces/province/iprovince';
import { ComuniService } from '../services/comuni/comuni.service';
import { ProvinceService } from '../services/province/province.service';

@Component({
  selector: 'app-add-comuni',
  templateUrl: './add-comuni.component.html',
  styleUrls: ['./add-comuni.component.css']
})
export class AddComuniComponent implements OnInit {

  newComune: IComuni = new Comuni()
  prov: IProvince[] = []

  constructor(private comuniService: ComuniService,
    private provinceService: ProvinceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
    this.provinceService.getAllProvince().subscribe((prov: any)=>{
      this.prov = prov.content
    })
  })
  }

  addComune(newComune: IComuni) {
    this.comuniService.createComuni(newComune).subscribe(res => {
      Swal.fire(
        'Ben fatto!',
        'Provincia aggiunta con successo!',
        'success'
      );
      this.router.navigate(['comuni'])
    });
  };

}
