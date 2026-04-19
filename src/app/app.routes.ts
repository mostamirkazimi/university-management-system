import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { StudentComponent } from './pages/student/student.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { DepartmentComponent } from './pages/department/department.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ScoreComponent } from './pages/score/score.component';
import { FacultyDetailComponent } from './pages/faculty-detail/faculty-detail.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
   
    { path:'' , redirectTo:'login' , pathMatch:'full'},
    { path:'login' , component:LoginComponent},
    { path:'' , component:LayoutComponent , children:[
     
        { path:'dashboard' , component:DashboardComponent},
        { path:'teacher' , component:TeacherComponent},
        { path:'student' , component:StudentComponent},
        { path:'employee' , component:EmployeeComponent},
        { path:'faculty' , component:FacultyComponent},
        { path:'department' , component:DepartmentComponent},
        { path:'subject' , component:SubjectComponent},
        { path:'comment' , component:CommentsComponent},
        { path:'term_condition' , component:TermsAndConditionComponent},
        { path:'about' , component:AboutComponent},
        { path:'contact' , component:ContactComponent},
        { path:'score' , component:ScoreComponent},
        { path:'faculty_detail/:id' , component:FacultyDetailComponent}
    ]}
     
     
];
