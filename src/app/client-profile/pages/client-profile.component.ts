/**ANGULAR CORE */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**SERVICES */
import { TokenService } from 'src/app/shared/helpers/token.service';
import { ClientProfileService } from '../services/client-profile.service';

/**INTERFACES */
import { Claims, Token } from 'src/app/shared/interfaces/token';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {



  constructor(
    public tokenService: TokenService,
    public clientProfileService: ClientProfileService
  ) { }
  
  public claims: Claims;
  public urlImage: string;
  public dataClientProfile: any = { };
  
  ngOnInit(): void { 
    const token:Token = this.tokenService.getDecodedJwtToken();
    this.claims = token.claims;
    this.clientProfileService.getImageProfile().subscribe((resp)=>{
      this.urlImage = resp;
      console.log("esta es la url de la imagen",this.urlImage);
      this.dataClientProfile = {
        claims: this.claims,
        urlImage: this.urlImage 
      }
    });
 


  }

  

}
