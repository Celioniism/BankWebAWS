import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Administrator } from 'src/app/routes/administrator/administrator';
import { AdminService } from 'src/app/routes/administrator/administrator.service';
import { GeneralStaff } from 'src/app/routes/generalstaff/generalStaff';

@Component({
  selector: 'app-registerstaff',
  templateUrl: './registerstaff.component.html',
  styleUrls: ['./registerstaff.component.css']
})
export class RegisterstaffComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,private _adminService: AdminService) { }
  staff:GeneralStaff=new GeneralStaff();
  registerForm:FormGroup;
  submitted:boolean=false;
  ngOnInit(): void {
    this.registerForm=this._formBuilder.group({
      fullName:['', Validators.required],
      password:['',[Validators.required]],
      userName:['',[Validators.required]]
     
    })
    
  }
  get f(){
    return this.registerForm.controls;
  }
  register():void{
    this.submitted=true;
    
    console.log(this.staff);
    if(this.registerForm.valid){
      console.log('Successfully Submitted Data...');
      this._adminService.registerStaff(this.staff).subscribe(result =>{
        console.log(result);
      });
     
    }
    //alert('Successfully Submitted Data...')
    return;
      
      
    
    
   
  }
  reset():void{
    this.submitted=false;
 this.registerForm.reset();
  }
}
