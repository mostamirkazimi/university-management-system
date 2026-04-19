import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department, Faculty } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {

  departmentList:Department[] =[]
  facultyList:Faculty[] = [];
   masterService = inject(MasterService);
   departmentMode:boolean = false;


   departmentObj:Department = {
    id:"",
    department_name:"",
    createDate:"",
    faculty_name:""
   }

  ngOnInit(): void {
     this.getAllDepartment();
     this.getAllFaculty();
  }

  onReset(){

    this.departmentObj = {
      id:"",
      department_name:"",
      createDate:"",
      faculty_name:""
      
     }
     this.departmentMode = false;

  }

  getAllFaculty(){
    this.masterService.getAllFaculty().subscribe((res:Faculty[])=>{
      this.facultyList = res;
    })
  }

  getAllDepartment(){
    this.masterService.getAllDepartment().subscribe((res:Department[])=>{
      this.departmentList = res;
    })
  }

  onSave(){
    if(this.departmentMode){
      this.masterService.updateDepartment(this.departmentObj).subscribe((res:Department)=>{
        this.getAllDepartment();
        this.departmentMode = false;
        this.onReset();
        alert("موفقانه ویرایش شد")
      })
    }
    else{
      this.departmentObj.id = JSON.stringify(Math.floor(Math.random() * 1000 + 1))
      this.masterService.createDepartment(this.departmentObj).subscribe((res:Department)=>{
        this.getAllDepartment();
        this.onReset();
        alert("successful inserted!")
      })
    }
  }

  updateDepartment(depData:Department){
    this.departmentObj = depData;
    this.departmentMode = true;

  }

  deleteDepartment(id:string){
    const deleteDepartment = confirm("Are you sure this faculty deleted!");
    if(deleteDepartment){
      this.masterService.deleteDepartment(id).subscribe((res:void)=>{
        this.getAllDepartment();
        alert("Deleted is successful!")
      })
    }
  }

}
