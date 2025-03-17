import { Component } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildrenComponent, FormsModule, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  name=''
  age=''  
  school=''
  level=''
  gender=''

  details:any = []

  addToTable() {
    let objPerson={
      name:this.name,
      age: this.age,
      school: this.school,
      level: this.level,
      gender: this.gender
    }

    this.details.push(objPerson)
    console.log(this.details);
}
}