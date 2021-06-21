import { Accounts } from './Accounts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private AllAccountUrl = "http://localhost:8080/accounts/all";
  private AddAccountUrl = "http://localhost:8080/accounts/add";
  private DeleteAccountUrl = "http://localhost:8080/accounts/delete/";



  constructor(private http:HttpClient){}
  Connect():Observable<Accounts[]>{
    return this.http.get<Accounts[]>(this.AllAccountUrl);
  }
  Insert(data: any){
    this.http.post(this.AddAccountUrl, data).subscribe();
    alert("SAVED");
  }
  Delete(data:BigInteger){
    this.http.delete(this.DeleteAccountUrl + data).subscribe();
    alert("DELETE");
  }
}
