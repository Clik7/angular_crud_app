import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';


@Component({
  selector: 'app-detail-fatture',
  templateUrl: './detail-fatture.component.html',
  styleUrls: ['./detail-fatture.component.css']
})
export class DetailFattureComponent implements OnInit {
  
  detailFattura!:IFatture;
  constructor(private fattureService: FattureService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      response => {
        this.fattureService.getFattureById(response['id']).subscribe(
          response =>{
            this.detailFattura = response;
          })
      })
  }  
  backFatture(){
    this.router.navigate(['fatture/page/:page'])
  }    

  openEditFatture(detailFatt: IFatture){
    this.router.navigate(['editFatture/page/', detailFatt.id])
  }
}
