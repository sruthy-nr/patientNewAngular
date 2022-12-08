import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
constructor(private api:ApiService,private route:Router){}
name=""
searchdata:any=[]
readValues=()=>{
  let data:any={
    "name":this.name
  }
  console.log(data)
  this.api.searchPatient(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {

        alert("invalid patient name")
        
      } else {
        this.searchdata=response
      }
    }
  )
}
deletebuttonclick=(id:any)=>{

  let data:any={
    "id":id
  }
  this.api.deletePatient(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.status=="success") {

        alert("Deleted");
        this.route.navigate(['/view'])
      } 
      else {
      
        alert("invalid input");
      }
    }
  )

}
}
