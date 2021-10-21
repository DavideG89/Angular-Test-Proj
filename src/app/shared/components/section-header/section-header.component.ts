import { Component, Input, OnInit } from '@angular/core';

interface Button{
  label:string,
  link:string,
  type: 'btn-link'| 'btn-primary';
}

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {
@Input() title = '';

_button: Button = {label:'vai a ....', link:'', type:'btn-link'};

@Input() set button(value: Partial<Button>){
  this._button = { ...this._button, ...value};
}
// Partial consente dall'esterno del nostro componente, di poter identificare un oggetto che abbia le
// caratteristiche come il Button ma che non siano obligatori tutti i campi. Quindi ci da la possibilità
// di settare il nostro Button interno.

  constructor() { }

  ngOnInit(): void {

  }

}
