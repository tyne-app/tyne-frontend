import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  @Input() urlImage: string;
  constructor() { }

  ngOnInit(): void {
    
  }

  public getImageProfile(): string {
    let existImage: Boolean = true;
    return (existImage)? this.urlImage : '/assets/img/user-profile.svg'; 
  } 

}
 