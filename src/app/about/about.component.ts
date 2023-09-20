import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  a:Number=5;
  b:String="hello";
  abc(){
    alert("welcome to ducat");
  }

}
