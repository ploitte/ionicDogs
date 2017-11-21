import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreedPage } from './breed';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    BreedPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(BreedPage),
  ],
})
export class BreedPageModule {}
