import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservableRetryOnErrorPage } from './observable-retry-on-error';

@NgModule({
  declarations: [
    ObservableRetryOnErrorPage,
  ],
  imports: [
    IonicPageModule.forChild(ObservableRetryOnErrorPage),
  ],
})
export class ObservableRetryOnErrorPageModule {}
