import { Component } from '@angular/core';
import { RequestsService } from './requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowGet:boolean = false;
  isShowForm:boolean = false;
  isShowDelete:boolean = false;
  accounts : any;
  private services: any;
  constructor(RequestsService: RequestsService){
    this.services = RequestsService;
  }
  getResponse(){
    this.services.Connect().subscribe(
      (data:any) => {
        this.accounts = data;
      }
    );
    console.log(this.accounts);
    this.setShowGet();
  }
  setResponse(data:any){
    this.services.Insert(data);
  }
  DeleteResponse(data:any){
    this.services.Delete(data.accountId);
  }

  setShowGet(){
    if(this.isShowGet){
      this.isShowGet = false;
      this.isShowForm = false;
      this.isShowDelete = false;
    }
    else{
      this.isShowGet = true;
      this.isShowForm = false;
      this.isShowDelete = false;
    }
  }

  setShowForm(){
    if(this.isShowForm){
      this.isShowGet = false;
      this.isShowForm = false;
      this.isShowDelete = false;
    }
    else{
      this.isShowGet = false;
      this.isShowForm = true;
      this.isShowDelete = false;
    }
  }
  setShowDelete(){
    if(this.isShowDelete){
      this.isShowGet = false;
      this.isShowForm = false;
      this.isShowDelete = false;
    }
    else{
      this.isShowGet = false;
      this.isShowForm = false;
      this.isShowDelete = true;
    }
  }
}
