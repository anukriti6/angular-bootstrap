import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDemoComponent } from './alert-demo/alert-demo.component';
import { AlertModule as AM} from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [AlertDemoComponent],
  imports: [
    CommonModule,
    AM.forRoot()
  ],
  exports:[AlertDemoComponent]
})
export class AlertModule { }
