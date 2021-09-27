/**
 * ANGULAR CORE 
 */
import { Component,OnInit} from '@angular/core';
/**
 * SERVICES 
 */
import { TokenService } from 'src/app/shared/helpers/token.service';
import { ClientProfileService } from '../services/client-profile.service';
/**
 * INTERFACES 
 */
import { Claims, Token } from 'src/app/shared/interfaces/token';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  public constructor(
    public tokenService: TokenService,
    public clientProfileService: ClientProfileService
  ) { }
  
  public claims: Claims;
  public urlImage: string;
  public dataClientProfile = { };
  
  public ngOnInit(): void { 
    const token:Token = this.tokenService.getDecodedJwtToken();
    this.claims = token.claims;
    this.clientProfileService.getImageProfile().subscribe((resp)=>{   
      this.urlImage = resp;
      console.log(this.urlImage);
      this.dataClientProfile = {
        claims: this.claims,
        urlImage: this.urlImage 
      };
    });

  }
}
