import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  admin : boolean = false;
  changeView() : void{
    this.admin = !this.admin;
  }
  constructor(private postService: PostsService,private Route: ActivatedRoute){}
  
  updateStorage() : void{
    this.postService.savePostLocalStorage();
  }
}
