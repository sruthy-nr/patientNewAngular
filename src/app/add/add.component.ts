import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
name=""
image=""
doctor=""
constructor(private api:ApiService){}
  readValues=()=>{
    let data:any={
      "name":this.name,
      "image":this.image,
      "doctor":this.doctor
    }
    console.log(data)
    this.api.addPatient(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Successfully Added")
          this.name=""
          this.image=""
          this.doctor=""
        } 
        else {
          alert("Something went wrong")
        }
      }
    )
  }
}
