import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-children',
  imports: [FormsModule, CommonModule, MatTableModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
@Input() theDetails: any;
// @Input() theDetails: any[] = [];
}
