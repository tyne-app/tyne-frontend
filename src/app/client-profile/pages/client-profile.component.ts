import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JwtDecodeService } from 'src/app/shared/helpers/jwt-decode.service';
import { Claims, Token } from 'src/app/shared/interfaces/token';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  @Output() ClientData:EventEmitter<Claims> = new EventEmitter<Claims>();
  constructor(
    public jwtService: JwtDecodeService
  ) { }
  
  claims: Claims;
  
  ngOnInit(): void { 
    const token:Token = this.jwtService.getToken();
    this.claims = token.claims;
    this.ClientData.emit(this.claims); 
  }
}
