import { Component, OnInit } from '@angular/core';
import { Comuni } from '../classes/comuni/comuni';
import { ComuniService } from '../services/comuni/comuni.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IComuni } from '../interfaces/comuni/icomuni';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.css']
})
export class ComuniComponent implements OnInit {

 
comuni: Comuni[] = [];
totalElements!: number;
size!: number;
numberOfPages!: number;
pageNumbers: number[] = [];

constructor(private comuniService: ComuniService, private router: Router, private route: ActivatedRoute) { }

ngOnInit(): void {
  
  

  this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
    
    this.comuniService.getPagedComuni(params["page"]).subscribe((comuni:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
     
      this.comuni = comuni.content
      
      /**inizio paginazione */
      this.totalElements = comuni.totalElements
      this.size = comuni.size
      this.numberOfPages = (comuni.totalElements / comuni.size)


      for(let i = 0; i <= this.numberOfPages; i++){
        console.log(i);
        this.pageNumbers.push(i);
      }

      /**fine paginazione */
    });

  })

  //*RICORDATI FUNZIONE DELETE DA PRENDERE IN CUSTOMER TS */
 
  

}
 navigateComuni(item:IComuni){
 this.router.navigate(['comuni/editComuni/', item.id]);

}

removeComuni(comuni:IComuni){
  this.comuniService.deleteComuni(comuni).subscribe(res => {
  let index = this.comuni.indexOf(comuni);
  this.comuni.splice(index, 1);

})

}



}
