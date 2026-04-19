import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Comments } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FormsModule , RouterLink],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {

  ngOnInit(): void {
     this.getAllComment()
  }
  masterService = inject(MasterService);
  commentList:Comments[] = [];
  showModal:boolean = false;
  commentObj:Comments = {
    id:"",
    name:"",
    email:"",
    comment:""
  }

  onReset(){
    this.commentObj = {
      id:"",
      name:"",
      email:"",
      comment:""
    }

  }

  openModal(){
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
    this.getAllComment();
  }

  getAllComment(){
    this.masterService.getAllComment().subscribe((res:Comments[])=>{
      this.commentList = res;
    })
  }

  createComment(){
    this.commentObj.id = JSON.stringify(Math.floor(Math.random() * 1000));
    this.masterService.createComment(this.commentObj).subscribe((res:Comments)=>{
      this.getAllComment();
      this.showModal = false;
      this.onReset();
      alert("successful Created!")
    })
  }

  deleteComment(id:string){
    const deletecomment = confirm("Are you sure deleted!")
    if(deletecomment){
      this.masterService.deleteComment(id).subscribe((res:void)=>{
        this.getAllComment();
        alert("successful Deleted!")
      })
    }
    
  }

}
