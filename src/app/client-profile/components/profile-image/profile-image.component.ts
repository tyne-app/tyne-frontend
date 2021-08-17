import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**TODO: ADD CONSUME IMAGE PROFILE */
  public getImageProfile(): string {
    let existImage: Boolean = true;
    return (existImage)? '/assets/img/user-profile.svg' : ''; 
  } 

}
