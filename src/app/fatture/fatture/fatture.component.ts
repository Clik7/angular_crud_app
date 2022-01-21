import { FattureService } from './../../services/fatture/fatture.service';
import { Fatture } from 'src/app/classes/fatture/fatture';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IFatture } from 'src/app/interfaces/fatture/ifatture';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

 
  fatture: Fatture[] = [];
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  
  constructor(private fattureService: FattureService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    
    
  
    this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
      
      this.fattureService.getPagedFatture(params["page"]).subscribe((fatture:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
       
        this.fatture = fatture.content
        
        /**inizio paginazione */
        this.totalElements = fatture.totalElements
        this.size = fatture.size
        this.numberOfPages = (fatture.totalElements / fatture.size)
  
  
        for(let i = 0; i <= this.numberOfPages; i++){
          console.log(i);
          this.pageNumbers.push(i);
        }
  
        /**fine paginazione */
      });
  
    })
   
  
  
  }
  removeFatture(fatture:Fatture){
    this.fattureService.deleteFatture(fatture).subscribe(res => {
      let index = this.fatture.indexOf(fatture);
      this.fatture.splice(index, 1);
    })



    
  }

  showFatture(item :IFatture){
    this.router.navigate(['detailFatture/', item.id])

  }
  
}
  