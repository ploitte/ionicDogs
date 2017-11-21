import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {DogProvider} from "../../providers/dog/dog";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public breeds: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dog: DogProvider) {}

  ionViewCanEnter(): Promise <any> {
    return new Promise((resolve, reject) => {
      this.dog.get('breeds/list/all').subscribe(data => {
        this.breeds = data['message'];
        resolve();
      }, error => {
        reject(error);
      });
    });
  }

  /**
   * Ouverture de l'image aléatoire
   */
  openPicture() {
    let modal = this.modalCtrl.create('PicturePage');
    modal.present();
  }

  /**
   * Direction la page de la race
   *
   * @param {string} name
   * @param {boolean} hasSub
   */
  goToBreedPage(name: string, hasSub: boolean = false) {
    this.navCtrl.push('BreedPage', {name: name, hasSub: hasSub});
  }

}
