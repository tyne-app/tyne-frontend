import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {

  @Input() public urlImage: string;

  constructor() { }
  ngOnInit(): void {}

  public getImageProfile(): string {
    const existImage = true;
    return (existImage)? this.urlImage : '/assets/img/user-profile.svg'; 
  } 

  public changeImageProfile(): void{

  }

}
  