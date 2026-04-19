import { Component, inject, OnInit } from '@angular/core';
import { Department, Faculty, Score, Subjects } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';
import { Student } from '../../model/class/Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit {

  ngOnInit(): void {
    this.getAllScore();
    this.getAllSubject();
    

   
 }
 
 scoreList:Score[] = []

 subjectList:Subjects[] = []
 scoreMode :boolean = false;
 
 masterService = inject(MasterService)
  
 scoreObj:Score ={
   id:"",
   student_name:"",
   subject_name:"",
   faculty_name:"",
   department_name:"",
   semester:"",
   score:0
 }

 

 onReset(){
   this.scoreObj ={
     id:"",
     student_name:"",
     subject_name:"",
     faculty_name:"",
     department_name:"",
     semester:"",
     score:0
   }
   this.scoreMode = false;

  
 }


 getAllScore(){
   this.masterService.getAllScore().subscribe((res:Score[])=>{
     this.scoreList = res;
   })
 }
 
 studentObj:Student = new Student();
 onChange(){
  

  this.masterService.getStudentById(this.scoreObj.id).subscribe((res:Student)=>{
    this.studentObj = res;
    
  })

    
 }

//  getAllFaculty(){
//    this.masterService.getAllFaculty().subscribe((res:Faculty[])=>{
//         this.facultyList = res;
//    })
//  }
//  getAllDepartmenty(){
//    this.masterService.getAllDepartment().subscribe((res:Department[])=>{
//      this.departmentList = res;
//    })
//  }

//  getAllStudent(){
//   this.masterService.getAllStudent().subscribe((res:Student[])=>{
//     this.studentList = res;
//   })
// }

getAllSubject(){
  this.masterService.getAllSubject().subscribe((res:Subjects[])=>{
    this.subjectList = res;
  })
}

 onSave(){
   if(this.scoreMode){
     this.masterService.updateScore(this.scoreObj).subscribe((res:Score)=>{
        this.getAllScore();
        this.onReset();
        this.scoreMode = false;
        alert("successful Updated!")

     })
   }
   else{
     //this.scoreObj.id = JSON.stringify(Math.floor(Math.random() * 1000 + 1))
     this.masterService.createScore(this.scoreObj).subscribe((res:Score)=>{
       this.getAllScore();
       this.onReset();
       alert("successful inserted!")
     })
    
   }
 }
 updateScore(scoreData:Score){
   this.scoreObj = scoreData;
   this.scoreMode = true
 }

 deleteScore(id:string){
   const deleteScore = confirm("Are you sure this fiald is Delete !");
   if(deleteScore){
     this.masterService.deleteScore(id).subscribe((res:void)=>{
      this.getAllScore();
       alert("Deleted is successful")
     })
   }
 }
}
