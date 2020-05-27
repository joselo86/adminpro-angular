import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('inputRef') inputRef: ElementRef;
  @Input('nombre') leyenda : string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    /* console.log('Leyenda', this.leyenda)
    console.log('Progreso', this.progreso) */
  }

  ngOnInit(): void {
    /* console.log('Progreso', this.progreso) */
  }

  onChanges( newValue: number){
    //let elementHTML : any = document.getElementsByName('progreso')[0];

    // corregir string ***********************
    console.log(newValue)
    if(newValue >= 100){
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    //elementHTML.value = Number(this.progreso);

    this.inputRef.nativeElement.value = this.progreso
    this.cambioValor.emit(this.progreso)

    // establecer foco
    this.inputRef.nativeElement.focus();
  }

  cambiarValor(valor: number){

    if(this.progreso >= 100 && valor > 0){
      this.progreso = 100
      return
    } 
    if(this.progreso <= 0 && valor < 0) {
      this.progreso = 0
      return
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso)
  }

}
