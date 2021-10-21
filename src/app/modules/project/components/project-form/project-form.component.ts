import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/Projects';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
@Output() submitted =  new EventEmitter<Project>(); // oggetto eventEmitter che da la possibilità di emettere
// un valore all'eseterno, da la possibilità di tipizzare il valore emesso attraverso approccio generico <Project>
  constructor() { }

  ngOnInit(): void {
  }
  submit(f: NgForm) {
    this.submitted.emit({... f.value}); // qui richiamiamo l'oggetto e l'output
    console.log(f.value);
  }
}
