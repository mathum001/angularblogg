import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  email : string = "";
  write : string = "";

  sendEmail() : void{
    console.log(this.email + "--------" + this.write);
  }
}
