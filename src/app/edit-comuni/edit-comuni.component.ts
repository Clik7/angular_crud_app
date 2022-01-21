import Swal  from 'sweetalert2';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComuni } from '../interfaces/comuni/icomuni';
import { ComuniService } from '../services/comuni/comuni.service';
import { ProvinceService } from '../services/province/province.service';
import { Comuni } from '../classes/comuni/comuni';

@Component({
  selector: 'app-edit-comuni',
  templateUrl: './edit-comuni.component.html',
  styleUrls: ['./edit-comuni.component.css']
})
export class EditComuniComponent implements OnInit {

  editComune!: Comuni;
  prov: IProvince[] = [];

  constructor(
    private comuniService: ComuniService,
    private router: Router,
    private route: ActivatedRoute,
    private provinceService: ProvinceService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.comuniService.getComuneById(params['id']).subscribe(res =>{
        this.editComune = res
      }),
      this.provinceService.getAllProvince().subscribe((prov: any)=>{
        this.prov = prov.content
      })
  })
}

  saveEditComune(editComune: Comuni){
    this.comuniService.editComuni(editComune).subscribe(data => {
      Swal.fire(
        'OK!',
        'Modifica salvata con successo.',
        'success'
      )
      this.router.navigate(['comuni/'])
    })
  }

}
