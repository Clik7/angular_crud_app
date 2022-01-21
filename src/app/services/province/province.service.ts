import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProvince } from 'src/app/interfaces/province/iprovince';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  

  constructor(private http: HttpClient) { }

  getAllProvince(){
    return this.http.get<IProvince[]>(environment.apiURL+'api/province')
  } 

  getPagedProvince(page: number){
    return this.http.get<IProvince[]>(environment.apiURL+`api/province?page=${page}&size=20&sort=id,ASC`)
  }

  deleteProvince(province: IProvince){
    return this.http.delete(environment.apiURL+'api/province/'+province.id)
  }

  createProvincia(provincia:IProvince){
    return this.http.post(environment.apiURL+'api/province',provincia)
  }

  getProvinceById(id:number){
    
      return this.http.get<IProvince>(environment.apiURL+'api/province/'+ id)
    
  }

  editProvince(provincia:IProvince){
    return this.http.put<IProvince>(environment.apiURL+'api/province/'+ provincia.id, provincia)
  }

  //* mettere add provincia e deleteprovincia

 
}
