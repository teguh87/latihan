import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/@core/control-message/validator.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee',
  // template: `
  //   <div class="form-container">
  //     <form [formGroup]="userForm" (submit)="submit($event)">
  //         <table>
  //             <tr>
  //                 <td><label for="name">Name</label></td>        
  //                 <td><input formControlName="name" type="text" class="form-control"></td>
  //             </tr>
  //             <tr>
  //                 <td><label for="email">Email</label></td>
  //                 <td><input formControlName="email" type="text" class="form-control"></td>
  //             </tr>
  //             <tr>
  //                 <td><label for="profil">Profile</label></td>
  //                 <td><textarea formControlName="profile" cols="30" rows="12"></textarea></td>
  //             </tr>
  //             <tr>
  //                 <td colspan="6"><button type="submit" [disabled]="!userForm.valid">Save</button></td>
  //             </tr>
  //         </table>
          
  //     </form>
  // </div>
  // `,
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  public userForm: FormGroup = null;

  constructor(private _formBuilder: FormBuilder) { 
    this.userForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      profile: []
    });
  }

  ngOnInit(): void {
    const http: string = environment.url;
    
  }

  submit(e:any) {
    if(this.userForm.dirty && this.userForm.valid) {
      console.info(
        `Name: ${this.userForm.get('name').value}`, 
        `Email: ${this.userForm.get('email').value}`,
        `Profile: ${this.userForm.get('profile').value}`
        )
    }
  }

}
