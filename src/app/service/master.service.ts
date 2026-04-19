import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../model/class/Employee';
import { Teacher } from '../model/class/Teacher';
import { Student } from '../model/class/Student';
import { Comments, Department, Faculty , Score, Subjects } from '../model/interface/master';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor( private readonly http:HttpClient) { }

   api_url:string = "http://localhost:8000/";

   // Employee Methods
   getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.api_url + "employee");
   }

   createEmployee(employeeData:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.api_url + "employee" , employeeData)
   }

   updateEmployee(employeeData:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.api_url + "employee/" +employeeData.id , employeeData )
   }

   deleteEmployee(id:string):Observable<void>{
    return this.http.delete<void>(this.api_url + "employee/" + id)
   }

   // Teacher Method

   getAllTeacher():Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.api_url + "teacher");
   }

   createTeacher(teacherData:Teacher):Observable<Teacher>{
    return this.http.post<Teacher>(this.api_url + "teacher" , teacherData)
   }

   updateTeacher(teacherData:Teacher):Observable<Teacher>{
    return this.http.put<Teacher>(this.api_url + "teacher/" +teacherData.id , teacherData )
   }

   deleteTeacher(id:string):Observable<void>{
    return this.http.delete<void>(this.api_url + "teacher/" + id)
   }

   // Student Method

   getAllStudent():Observable<Student[]>{
    return this.http.get<Student[]>(this.api_url + "student");
   }

   getStudentById(id:string):Observable<Student>{
    return this.http.get<Student>(this.api_url + "student/" + id);
   }

   createStudent(StudentData:Student):Observable<Student>{
    return this.http.post<Student>(this.api_url + "student" , StudentData)
   }

   updateStudent(StudentData:Student):Observable<Student>{
    return this.http.put<Student>(this.api_url + "student/" +StudentData.id , StudentData )
   }

   deleteStudent(id:string):Observable<void>{
    return this.http.delete<void>(this.api_url + "student/" + id)
   }

   // Faculty Method

   getAllFaculty():Observable<Faculty[]>{
    return this.http.get<Faculty[]>(this.api_url + "faculty");
   }

   

   createFaculty(FacultyData:Faculty):Observable<Faculty>{
    return this.http.post<Faculty>(this.api_url + "faculty" , FacultyData)
   }

   updateFaculty(FacultyData:Faculty):Observable<Faculty>{
    return this.http.put<Faculty>(this.api_url + "faculty/" +FacultyData.id , FacultyData )
   }

   deleteFaculty(id:string):Observable<void>{
    return this.http.delete<void>(this.api_url + "faculty/" + id)
   }

   // Department Method

   getAllDepartment():Observable<Department[]>{
    return this.http.get<Department[]>(this.api_url + "department");
   }

   createDepartment(DepartmentData:Department):Observable<Department>{
    return this.http.post<Department>(this.api_url + "department" , DepartmentData)
   }

   updateDepartment(DepartmentData:Department):Observable<Department>{
    return this.http.put<Department>(this.api_url + "department/" +DepartmentData.id , DepartmentData )
   }

   deleteDepartment(id:string):Observable<void>{
    return this.http.delete<void>(this.api_url + "department/" + id)
   }

   // Subject Method

   getAllSubject():Observable<Subjects[]>{
    return this.http.get<Subjects[]>(this.api_url + "subject");
   }

   createSubject(SubjectData:Subjects):Observable<Subjects>{
    return this.http.post<Subjects>(this.api_url + "subject" , SubjectData)
   }

   updateSubject(SubjectData:Subjects):Observable<Subjects>{
    return this.http.put<Subjects>(this.api_url + "subject/" +SubjectData.id , SubjectData )
   }

   deleteSubject(id:string):Observable<void>{
    return this.http.delete<void>(this.api_url + "subject/" + id)
   }


// comments method

getAllComment():Observable<Comments[]>{
  return this.http.get<Comments[]>(this.api_url + "comments");

}

createComment(commentData:Comments):Observable<Comments>{
  return this.http.post<Comments>(this.api_url + "comments" , commentData);
}

deleteComment(id:string):Observable<void>{
  return this.http.delete<void>(this.api_url + "comments/" + id)
}

// 

getAllScore():Observable<Score[]>{
  return this.http.get<Score[]>(this.api_url + "score");

}


createScore(scoreData:Score):Observable<Score>{
  return this.http.post<Score>(this.api_url + "score" , scoreData);
}

updateScore(scoreData:Score):Observable<Score>{
  return this.http.put<Score>(this.api_url + "score/"+ scoreData.id , scoreData);
}

deleteScore(id:string):Observable<void>{
  return this.http.delete<void>(this.api_url + "score/" + id)
}
}
