import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addPatient=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  viewPatient=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  searchPatient=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
}
