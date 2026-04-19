import { Component, inject, OnInit } from '@angular/core';
import { Faculty } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
     this.getAllFaculty();
  }
masterService = inject(MasterService);
  facultyList:Faculty[] = []

  getAllFaculty(){
       this.masterService.getAllFaculty().subscribe((res:Faculty[])=>{
        this.facultyList = res;
       })
  }
}
