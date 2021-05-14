import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Plugins, CameraResultType, CameraSource, Geolocation, Camera } from "@capacitor/core";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  imagenUsuario = "assets/profiledefault.jpg";
  foto:SafeResourceUrl;
  // action-sheets para determinar las acciones del usuario.
  // const button = document.querySelector('ion-button');
  // button.addEventListener('click', handleButtonClick);

  constructor(private sanitize: DomSanitizer) { }

  ngOnInit() {
  }
// Funcion para tomar foto/ utilizar hardware del dispositivo.

  async tomarFoto(){
    const imagen = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.foto = this.sanitize.bypassSecurityTrustResourceUrl(imagen && imagen.dataUrl);
  }

// Funcion para desplegar acciones en la pagina profile.



}
