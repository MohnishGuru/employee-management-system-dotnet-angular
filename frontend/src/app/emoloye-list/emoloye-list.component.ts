import { Component } from '@angular/core';
import { RegistationServiceService } from '../registation-service.service';

@Component({
  selector: 'app-emoloye-list',
  standalone: true,
  imports: [],
  templateUrl: './emoloye-list.component.html',
  styleUrl: './emoloye-list.component.css'
})
export class EmoloyeListComponent {

  data:any[]=[]

  constructor(private ser:RegistationServiceService){ 
    this.loadEmploye()
  }

  loadEmploye(){
    this.ser.getEmploye().subscribe(val=>{
      this.data=val;
    })
  }

}
