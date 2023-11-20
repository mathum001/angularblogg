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

  posts: Post[] = this.postService.getPosts();

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

  addFivePosts() : void{
    for(let i = 0; i < 5; i++){
      const newPost: Post = new Post(
      "TestTitle " + i,
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Salix_bark_Pilstam.jpg",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      new Date(),
      0,
      0,
      []
    );

    this.postService.addPost(newPost);
    }
    
  }

  confirmDelete(index : number, ): void{
    const confirmation = confirm(`Are you sure you want to delete "${this.posts[index].title}"?`);
    if (confirmation) {
      this.deleteSinglePost(index);
  }
  }

  deleteSinglePost(index : number) : void{
    this.postService.deleteSinglePost(index);
  }

  
}
