/**
 * ANGULAR CORE
 */
import { Component, Input, OnInit } from '@angular/core';
/**
 * SERVICES
 */
import { ClientProfileService } from '../../services/client-profile.service';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  
  // #region Variables
  @Input() public urlImage: string;
  public imageProfile: File = null; 
  // #endregion

  public constructor(
    public clientProfileService: ClientProfileService
  ) { }

  public ngOnInit(): void {}

  public getImageProfile(): string {
    return (this.urlImage)? this.urlImage : '/assets/img/user-profile.svg'; 
  } 
   
  public uploadImageFromDirectory(event): void {
    this.imageProfile = event.target.files[0];
    console.log("imagen a actualizar", this.imageProfile);
    this.updateImageProfile(this.imageProfile);
  }

  public updateImageProfile(imageProfile:File): void{
    this.clientProfileService.putImageProfile(imageProfile).subscribe((resp)=>{
      this.urlImage = resp;
    });
  }


}
  