import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/Projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
 @Input() projects: Project[] =[];
 @Output() selected = new EventEmitter<Project>();

  constructor() { }

  ngOnInit(): void {
  }
  select(project: Project){
    this.selected.emit(project);
  }
}
