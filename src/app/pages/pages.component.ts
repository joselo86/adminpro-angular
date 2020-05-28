import { Component, OnInit } from '@angular/core';

// Se utiliza de esta forma para llamar a los plugins que están fuera del ecosistema del angular
// se envuelve el *.js en una funcion, se declara en el componente y se invoca en el ngOnInit
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
