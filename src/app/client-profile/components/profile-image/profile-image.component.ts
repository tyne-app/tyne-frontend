/** ANGULAR CORE */ 
import { Component, Input, OnInit } from '@angular/core';
/** ENUMS */
import { ErrorMessages } from 'src/app/shared/constants/error-messages.enum';
/** MODELS - INTERFACES */
import { DialogModel } from 'src/app/shared/components/components/dialog/models/dialog-model';
import { HTMLInputEvent } from '../../interfaces/event-input-file';
/** SERVICES */
import { DialogService } from 'src/app/shared/components/components/dialog/services/dialog.service';
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
    public clientProfileService: ClientProfileService,
    private dialogService :DialogService
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
    },(error)=>{
      const dialogModel: DialogModel = {
        title: "¡Lo sentimos!",
        subtitle: ErrorMessages.GenericError,
        isSuccessful: false,
        messageButton: "Volver",
      };
      this.dialogService.openDialog(dialogModel);
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
  