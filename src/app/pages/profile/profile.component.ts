import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
  imagenSubir: File;
  imagenTemporal: string;
  constructor(public usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void {
  }

  guardar(usuario: Usuario){
    this.usuario.nombre = usuario.nombre;
    if (!this.usuario.google){
      this.usuario.email = usuario.email;
    }

    this.usuarioService.actualizarUsuario(this.usuario)
      .subscribe();
  }

  seleccionImagen(archivo: File){
    if (!archivo){
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0){
      Swal.fire({ title: 'Ooops', text: 'Solo es posible subir imagenes', icon: 'error' });
      this.imagenSubir = null;
      return;
    }

    // vanila
    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemporal = String(reader.result);

    this.imagenSubir = archivo;
  }

  cambiarImagen(){
    this.usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
  }

}
