import { Component } from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {DogProvider} from "../../providers/dog/dog";

@IonicPage({
  segment: 'breed/:name'
})
@Component({
  selector: 'page-breed',
  templateUrl: 'breed.html',
})
export class BreedPage {

  public name: string;
  public hasSub: boolean = false;

  public breeds: any[] = [];
  public pictures: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCltr: LoadingController, public dog: DogProvider, public modalCtrl: ModalController) {
    this.name = this.navParams.get('name');
    this.hasSub = this.navParams.get('hasSub');
  }

  ionViewCanEnter(): Promise <any> {
    let loader = this.loadingCltr.create({content: ''});
    loader.present();

    return new Promise((resolve, reject) => {
      if( this.hasSub ) {
        this.dog.get('breed/' + this.name + '/list').subscribe(response => {
          this.breeds = response['message'];
          resolve();
          loader.dismiss();
        }, error => {
          reject(error);
          loader.dismiss();
        });
      } else {
        this.dog.get('breed/' + this.name + '/images').subscribe(response => {
          this.pictures = response['message'];
          console.log(this.pictures);
          resolve();
          loader.dismiss();
        }, error => {
          reject(error);
          loader.dismiss();
        });
      }
    });
  }

  ionViewDidEnter() {
    if( this.pictures.length < 1 ) {
      this.dog.get('breed/' + this.name +  '/images').subscribe(data => {
          this.pictures = data['message'];
      });
    }
  }

  goToSubBreedPage(name: string, hasSub: boolean = false) {
    this.navCtrl.push('BreedPage', {name: name, hasSub: hasSub});
  }

  openPicture(name) {
    let modal = this.modalCtrl.create('PicturePage', {name: name});
    modal.present();
  }

}
