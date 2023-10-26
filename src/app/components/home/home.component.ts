import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/utils/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  
  constructor(private postService: PostsService, private router: Router){}

  posts: Post[] = this.postService.getPosts();

  goToSinglePost(postIndex: number) : void{
    this.router.navigate(['singlePost', postIndex]);
  }
  
}
