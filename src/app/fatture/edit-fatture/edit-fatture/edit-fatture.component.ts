import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';
import { FattureService } from 'src/app/services/fatture/fatture.service';
import { Fatture } from 'src/app/classes/fatture/fatture';

@Component({
  selector: 'app-edit-fatture',
  templateUrl: './edit-fatture.component.html',
  styleUrls: ['./edit-fatture.component.css']
})
export class EditFattureComponent implements OnInit {

  editFatture!:IFatture;
  stato=[{id:1, nome: "PAGATA"}, {id:"2", nome:"NON PAGATA"}]

  constructor(private fattureService: FattureService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fattureService.getFattureById(params['id']).subscribe( response => {
        this.editFatture = response
    })
  })
 }

  editFattura(editFatture:IFatture){
  this.fattureService.aggiornaFatture(editFatture).subscribe( response => {
    Swal.fire({
      
      icon: 'success',
      title: 'Modificato con successo',
      
    })
      this.router.navigate(["detailFatture", editFatture.id])
  })
}

backToDetailFattura(){
  
  this.router.navigate(['detailFatture/', this.editFatture.id])
  
 }
}
