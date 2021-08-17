/**ANGULAR CORE */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

/**SERVICES */
import { JwtDecodeService } from 'src/app/shared/helpers/jwt-decode.service';
import { ClientProfileService } from '../services/client-profile.service';

/**INTERFACES */
import { Claims, Token } from 'src/app/shared/interfaces/token';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  @Output() ClientData:EventEmitter<Claims> = new EventEmitter<Claims>();
  @Output() ImageProfile:EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public jwtService: JwtDecodeService,
    public clientProfileService: ClientProfileService
  ) { }
  
  public claims: Claims;
  public urlImage: any;
  
  ngOnInit(): void { 
    const token:Token = this.jwtService.getToken();
    this.claims = token.claims;
    
    this.urlImage = this.clientProfileService.getImageProfile();
    console.log("esta es la url de la imagen",this.urlImage);
    this.ImageProfile.emit(this.urlImage)

    this.ClientData.emit(this.claims); 
  }

  

}
