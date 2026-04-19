import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/class/Employee';
import { Department, Faculty } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  ngOnInit(): void {
     this.getAllEmployee();
     this.getAllFaculty();
     this.getAllDepartment();
  }
  masterService = inject(MasterService);
  employeeList:Employee[] = [];
  facultyList:Faculty[] = [];
  showModal:boolean = false;
  departmentList:Department[] = [];
  employeeMode:boolean = false;
  employeeObj:Employee = new Employee();
  education:string[] = ["no education" , "12" , "14" , "16" , "18"];
  onResset(){
    new Employee();
  }

  openModal(){
    this.showModal = true;
    new Employee()
  }
  closeModal(){
    this.showModal = false;
  }
  getAllEmployee(){
   this.masterService.getAllEmployee().subscribe((res:Employee[])=>{
    this.employeeList = res;
   })
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

  updateEmployee(empData:Employee){
    this.employeeObj = empData;
    this.employeeMode = true;
    this.showModal = true;

  }
  onSave(){
    if(this.employeeMode){
        this.masterService.updateEmployee(this.employeeObj).subscribe((res:Employee)=>{
          this.getAllEmployee();
          this.onResset();
          this.employeeMode = false;
          this.showModal = false;
          alert("successful Updated!")
        })
    }
    else{
      this.employeeObj.id = JSON.stringify(Math.floor(Math.random() * 1000 +1))
      this.masterService.createEmployee(this.employeeObj).subscribe((res:Employee)=>{
        this.getAllEmployee();
        this.onResset();
        this.showModal=false;
        alert("successful inserted!")
      })
    }
  }

  deleteEmployee(id:string){
    const deleteEmployee = confirm("Are you sure this fiald is Deleted!");
    if(deleteEmployee){
      this.masterService.deleteEmployee(id).subscribe((res:void)=>{
        this.getAllEmployee();
        alert("successful Deleted!")
      })
    }
  }
   
}
