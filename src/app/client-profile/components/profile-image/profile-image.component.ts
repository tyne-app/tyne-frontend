/**
 * ANGULAR CORE
 */
import { Component, Input, OnInit } from '@angular/core';
import { HTMLInputEvent } from '../../interfaces/event-input-file';
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
  @Input() public urlImage: string | ArrayBuffer;
  public imageProfile: File = null; 
  // #endregion

  public constructor(
    public clientProfileService: ClientProfileService
  ) { }

  public ngOnInit(): void {}

  public getImageProfile(): string | ArrayBuffer {
    return (this.urlImage)? this.urlImage : '/assets/img/user-profile.svg'; 
  } 
   
  public uploadImageFromDirectory(event: HTMLInputEvent): void {
    this.imageProfile = event.target.files[0];
    this.updateImageProfile(this.imageProfile);
  }

  public updateImageProfile(imageProfile:File): void{
    this.clientProfileService.putImageProfile(imageProfile).subscribe(()=>{
      this.updateImageUrlSource();
    });
  }

  public updateImageUrlSource(): void{
    const reader = new FileReader();
    reader.readAsDataURL(this.imageProfile); 
    reader.onload = () => { 
        this.urlImage = reader.result;  
    };
  }


}
  