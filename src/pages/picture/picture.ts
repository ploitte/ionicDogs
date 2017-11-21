import { Component } from '@angular/core';
import {IonicPage, LoadingCmp, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {DogProvider} from "../../providers/dog/dog";

/**
 * Generated class for the PicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-picture',
  templateUrl: 'picture.html',
})
export class PicturePage {

  public name: string = '';
  public url: string = 'breeds/image/random';
  public picture: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public dog: DogProvider, public loadingCtrl: LoadingController) {
    if( typeof this.navParams.get('name') != "undefined" ) {
      this.name = this.navParams.get('name');
      this.url =  'breed/' + this.name + '/images/random';
    }

    console.log(this.url);
  }

  ionViewCanEnter(): Promise <any> {
    let loader = this.loadingCtrl.create({content: ''});
    loader.present();

    return new Promise((resolve, reject) => {
      this.dog.get(this.url).subscribe(data => {
        console.log(data);
        this.picture = data['message'];
        resolve();
        loader.dismiss();
      }, error => {
        reject(error);
        loader.dismiss();
      });
    });
  }

  closePicture() {
    this.viewCtrl.dismiss();
  }

}
