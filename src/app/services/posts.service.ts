import { Injectable } from '@angular/core';
import { Post } from '../utils/post';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  newPosts: Post[] = [];

  constructor() {
    this.fetchPostLocalStorage();
   }


  fetchPostLocalStorage() : void{
    const storedPosts = localStorage.getItem('newPosts');
   if(storedPosts){
    this.newPosts = JSON.parse(storedPosts);
   }
  }

  savePostLocalStorage() : void{
    localStorage.setItem('newPosts', JSON.stringify(this.newPosts));
  }
  
  addPost(post: Post) : void{
    this.newPosts.push(post);
    this.savePostLocalStorage();
    console.log(this.newPosts);
  }

  getPosts(): Post[]{
    return this.newPosts;
  }

  getSinglePost(index: number) : Post{
    return this.newPosts[index];
  }

  deleteSinglePost(index: number){
    this.newPosts.splice(index, 1);
    this.savePostLocalStorage();
    console.log(this.newPosts);
  }

}
