/**
 * ANGULAR CORE
 */
import { Component, Input, OnInit } from '@angular/core';
import { ClientProfileService } from '../../services/client-profile.service';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {

  @Input() public urlImage: string;
  public file: File = null; // Variable to store file

  public constructor(
    public clientProfileService: ClientProfileService
  ) { }
  public ngOnInit(): void {}

  public getImageProfile(): string {
    const existImage = true;
    return (existImage)? this.urlImage : '/assets/img/user-profile.svg'; 
  } 

     // On file Select
  public onChange(event): void {
    console.log(event); 
    this.file = event.target.files[0];
  }
  public changeImageProfile(): void{
    this.uploadImageFromDirectory();
  }


  public uploadImageFromDirectory(): void {
    
  }

}
  