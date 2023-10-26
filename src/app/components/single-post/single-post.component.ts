import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/utils/post';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent  {
  index: number = 0;
  post : Post | undefined;
  commentText : string = "";
  datum : string = '';

  constructor(private postService: PostsService,private Route: ActivatedRoute){
      this.Route.params.subscribe(params => {
        this.index = +params['postIndex'];
        this.post = postService.getSinglePost(this.index);
      })   
  }
  

  
  

  increaseLike() : void{
    if(this.post){
      this.post.likes++;
    }
  }

  decreaseLike() : void{
    if(this.post){
      this.post.dislikes++;
    }
  }

  addComment() : void{
    this.post?.comments.push(this.commentText);
    console.log(this.datum);
  }

  updateStorage() : void{
    this.postService.savePostLocalStorage();
  }
 
}
