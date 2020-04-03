import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlMessageComponent } from './control-message.component';
import { ValidatorService } from './validator.service';



@NgModule({
  declarations: [ControlMessageComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ValidatorService
  ],
  exports: [
    ControlMessageComponent
  ]
})
export class ControlMessageModule { }
