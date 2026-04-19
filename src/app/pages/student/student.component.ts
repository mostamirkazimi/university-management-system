import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../model/class/Student';
import { Department, Faculty } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  ngOnInit(): void {
    this.getAllStudent();
    this.getAllFaculty();
    this.getAllDepartment();
 }
 masterService = inject(MasterService);
 studentList:Student[] = [];
 facultyList:Faculty[] = [];
 showModal:boolean = false;
 semesterList:string[] = ["First" , "Seccond" , "Thired" , "Four" , "Five" , "Six" , "Seven" , "Eight"]

 departmentList:Department[] = [];
 studentMode:boolean = false;
 studentObj:Student = new Student();
 
 onResset(){
   new Student();
 }

 openModal(){
   this.showModal = true;
   new Student()
 }
 closeModal(){
   this.showModal = false;
 }
 getAllStudent(){
  this.masterService.getAllStudent().subscribe((res:Student[])=>{
   this.studentList= res;
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

 updateStudent(stuData:Student){
   this.studentObj = stuData;
   this.studentMode = true;
   this.showModal = true;

 }
 onSave(){
   if(this.studentMode){
       this.masterService.updateStudent(this.studentObj).subscribe((res:Student)=>{
         this.getAllStudent();
         this.onResset();
         this.studentMode = false;
         this.showModal = false;
         alert("successful Updated!")
       })
   }
   else{
     this.studentObj.id = JSON.stringify(Math.floor(Math.random() * 1000 +1))
     this.masterService.createStudent(this.studentObj).subscribe((res:Student)=>{
       this.getAllStudent();
       this.onResset();
       this.showModal=false;
       alert("successful inserted!")
     })
   }
 }

 deleteStudent(id:string){
   const deleteStudent = confirm("Are you sure this fiald is Deleted!");
   if(deleteStudent){
     this.masterService.deleteStudent(id).subscribe((res:void)=>{
       this.getAllStudent();
       alert("successful Deleted!")
     })
   }
 }

}
