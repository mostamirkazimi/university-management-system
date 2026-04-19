import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Employee } from '../../model/class/Employee';
import { Teacher } from '../../model/class/Teacher';
import { Department, Faculty } from '../../model/interface/master';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {

  ngOnInit(): void {
    this.getAllTeacher();
    this.getAllFaculty();
    this.getAllDepartment();
 }
 masterService = inject(MasterService);
 teacherList:Teacher[] = [];
 facultyList:Faculty[] = [];
 showModal:boolean = false;
 education:string[] = ["no" , "12" , "14" , "16" , "18" , "20"]
 departmentList:Department[] = [];
 teacherMode:boolean = false;
 teacherObj:Teacher = new Teacher();
 
 onResset(){
   new Teacher();
 }

 openModal(){
   this.showModal = true;
 }
 closeModal(){
   this.showModal = false;
 }
 getAllTeacher(){
  this.masterService.getAllTeacher().subscribe((res:Teacher[])=>{
   this.teacherList= res;
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

 updateTeacher(empData:Teacher){
   this.teacherObj = empData;
   this.teacherMode = true;
   this.showModal = true;

 }
 onSave(){
   if(this.teacherMode){
       this.masterService.updateTeacher(this.teacherObj).subscribe((res:Teacher)=>{
         this.getAllTeacher();
         this.onResset();
         this.teacherMode = false;
         this.showModal = false;
         alert("successful Updated!")
       })
   }
   else{
     this.teacherObj.id = JSON.stringify(Math.floor(Math.random() * 1000 +1))
     this.masterService.createTeacher(this.teacherObj).subscribe((res:Teacher)=>{
       this.getAllTeacher();
       this.onResset();
       this.showModal=false;
       alert("successful inserted!")
     })
   }
 }

 deleteTeacher(id:string){
   const deleteEmployee = confirm("Are you sure this fiald is Deleted!");
   if(deleteEmployee){
     this.masterService.deleteTeacher(id).subscribe((res:void)=>{
       this.getAllTeacher();
       alert("successful Deleted!")
     })
   }
 }
  
}
