import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/utils/post';
import { PostsService } from 'src/app/services/posts.service';



@Component({
  selector: 'app-add-post',
  templateUrl: './addPost.component.html',
  styleUrls: ['./addPost.component.css']
})
export class AddPostComponent  {
  title: string ="";
  thumbnailUrl: string ="";
  body: string ="";
  datum : string = '';

 constructor(private postService: PostsService){}

 //Skapar ny post från inputsen
  createPost(){
      const newPost: Post = new Post(
        this.title,
        this.thumbnailUrl,
        this.body,
        new Date(),
        0,
        0,
        []
      );
    //Lägger till post i service
      this.postService.addPost(newPost);

    //Reset inputfields
      this.title = '';
      this.thumbnailUrl = '';
      this.body = '';
  }

  clearLocalStorage() : void{
    localStorage.clear();
  }

  getDate(): string{
    
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const year = date.getFullYear();
    this.datum  = `${day}-${month}-${year}`;
    return this.datum;
  }

  
}
