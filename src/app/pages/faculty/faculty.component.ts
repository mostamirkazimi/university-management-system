import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Faculty } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent implements OnInit {

   facultyList:Faculty[] =[]
   masterService = inject(MasterService);
   facultyMode:boolean = false;


   facultyObj:Faculty = {
    id:"",
    faculty_name:"",
    createDate:"",
    faculty_logo:"",
    description:""
   }

  ngOnInit(): void {
     this.getAllFaculty();
  }

  onReset(){

    this.facultyObj = {
      id:"",
      faculty_name:"",
      createDate:"",
      faculty_logo:"",
      description:""
     }

  }

  getAllFaculty(){
    this.masterService.getAllFaculty().subscribe((res:Faculty[])=>{
      this.facultyList = res;
    })
  }

  onSave(){
    if(this.facultyMode){
      this.masterService.updateFaculty(this.facultyObj).subscribe((res:Faculty)=>{
        this.getAllFaculty();
        this.facultyMode = false;
        this.onReset();
        alert("Successful Updated!")
      })
    }
    else{
      this.facultyObj.id = JSON.stringify(Math.floor(Math.random() * 1000 + 1))
      this.masterService.createFaculty(this.facultyObj).subscribe((res:Faculty)=>{
        this.getAllFaculty();
        this.onReset();
        alert("Successful inserted!")
      })
    }
  }

  updateFaculty(facData:Faculty){
    this.facultyObj = facData;
    this.facultyMode = true;

  }

  deleteFaculty(id:string){
    const deleteFaculty = confirm("Are you sure this faculty deleted!");
    if(deleteFaculty){
      this.masterService.deleteFaculty(id).subscribe((res:void)=>{
        this.getAllFaculty();
        alert("Deleted is successful!")
      })
    }
  }
  
}
