import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenduDirective } from '../rendu.directive';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule,RenduDirective,MatButtonModule,FormsModule,MatInputModule,MatDatepickerModule,MatFormFieldModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})

export class AssignmentsComponent {
  ajoutActive = false;
  titre = 'Liste des assignements';
  nomDevoir:string = "";

  onSubmit(){
    console.log(this.nomDevoir);
    //event.preventDefault();
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.ajoutActive = true;
      },2000);
  }
  assignments = [
    {
      nom:"SQL3 Serge Miranda",
      dateDeRendu:"2024-02-28",
      rendu:false
    },
    {
      nom:"BIGDATA Serge Miranda",
      dateDeRendu:"2024-01-12",
      rendu:true
    },
    {
      nom:"Devoir Michel Buffa",
      dateDeRendu:"2024-02-27",
      rendu:false
    }
  ];
}
