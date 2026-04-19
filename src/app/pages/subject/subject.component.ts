import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department, Faculty, Subjects } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

  ngOnInit(): void {
     this.getAllSubject();
     this.getAllFaculty();
     this.getAllDepartmenty()
  }
  
  subjectList:Subjects[] = []
  facultyList:Faculty[] = []
  departmentList:Department[] = []
  subjectMode :boolean = false;
   semesterList:string[] = ["First" , "Seccond" , "Thired" , "Four" , "Five" , "Six" , "Seven" , "Eight"]
  masterService = inject(MasterService)

  subjectObj:Subjects ={
    id:"",
    subject_name:"",
    credite:0,
    faculty_name:"",
    department_name:"",
    semester:""
  }

  onReset(){
    this.subjectObj ={
      id:"",
      subject_name:"",
      credite:0,
      faculty_name:"",
      department_name:"",
      semester:""
    }
    this.subjectMode = false;
  }


  getAllSubject(){
    this.masterService.getAllSubject().subscribe((res:Subjects[])=>{
      this.subjectList = res;
    })
  }

  getAllFaculty(){
    this.masterService.getAllFaculty().subscribe((res:Faculty[])=>{
         this.facultyList = res;
    })
  }
  getAllDepartmenty(){
    this.masterService.getAllDepartment().subscribe((res:any)=>{
      this.departmentList = res;
    })
  }

  onSave(){
    if(this.subjectMode){
      this.masterService.updateSubject(this.subjectObj).subscribe((res:Subjects)=>{
         this.getAllSubject();
         this.onReset();
         this.subjectMode = false;
         alert("successful Updated!")

      })
    }
    else{
      this.subjectObj.id = JSON.stringify(Math.floor(Math.random() * 1000 + 1))
      this.masterService.createSubject(this.subjectObj).subscribe((res:Subjects)=>{
        this.getAllSubject();
        this.onReset();
        alert("successful inserted!")
      })
    }
  }
  updateSubject(subData:Subjects){
    this.subjectObj = subData;
    this.subjectMode = true
  }

  deleteSubject(id:string){
    const deleteSub = confirm("Are you sure this fiald is Delete !");
    if(deleteSub){
      this.masterService.deleteSubject(id).subscribe((res:void)=>{
        alert("Deleted is successful")
      })
    }
  }
}
