import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { 

    this.contarTres()
      .then( (mensaje : boolean) =>  {
        console.log('la promesa termino correctamente', mensaje);
      })
      .catch( error => {
        console.log('ocurrió un error', error);
      })

  }

  ngOnInit(): void {
  }

  contarTres() : Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let contador = 0
      let intervalo = setInterval( () => {
        console.log(contador)
        contador += 1;
        if(contador === 3) {
          resolve( true );
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
