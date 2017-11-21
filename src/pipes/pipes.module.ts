import { NgModule } from '@angular/core';
import { KeysPipe } from './keys/keys';
import { UcfirstPipe } from './ucfirst/ucfirst';
@NgModule({
	declarations: [KeysPipe,
    UcfirstPipe],
	imports: [],
	exports: [KeysPipe,
    UcfirstPipe]
})
export class PipesModule {}
