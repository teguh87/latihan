import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { ValidatorService } from 'src/app/@core/control-message/validator.service';


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ],
  providers: [
    ValidatorService
  ],
  exports: [
    EmployeeComponent
  ]
})
export class EmployeeModule { }
