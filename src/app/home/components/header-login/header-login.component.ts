import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TyneRoutes } from 'src/app/shared/constants/url-routes';
import { ClientService } from 'src/app/shared/services/client.service';
 
@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {
  
  @Input() username:string; 
  public menu: Map<number,string>; 

  constructor(
    public router: Router,
    public clientService:ClientService
  ) { }

  ngOnInit(): void {
    this.menu = new Map<number,string>()
    .set(1,'Perfil')
    .set(2,'Locales Favoritos')
    .set(3,'Reservas Pendientes')
    .set(4,'Cerrar sesión');
  }

  public asIsOrder(a, b) {
    return 1;
  }
  
  public OnClick(option:number): void {
    switch (option) {
      case 1:
        this.goToPerfil();
        break;
      case 2:
        this.goToFavouriteLocal();
        break;
      case 3:
        this.goToTableReservation();
        break;
      case 4:
        this.closeSession();
        break;    
      default:
        break;
    } 
  }

  private closeSession(): void {
    this.goToRoute(TyneRoutes.Init);
    this.clientService.logout();
  }
  
  private goToFavouriteLocal(): void{
    this.goToRoute(TyneRoutes.FavouriteLocal);
  }

  private goToTableReservation(): void{
    this.goToRoute(TyneRoutes.TableReservation)
  }
  
  private goToPerfil(): void{
    this.goToRoute(TyneRoutes.ClientProfile);
  }

  public goToRoute(routename:string): void{
    this.router.navigate([`${routename}`]);
  }

}
