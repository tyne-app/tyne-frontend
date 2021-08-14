import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent implements OnInit {
  
  @Input() username:string; 
  public menu: Map<number,string>; 

  constructor(
    public router: Router
  ) { }
  /** TODO: Posible Refactor */
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
        
        break;
      case 3:
    
        break;
      case 4:
        this.closeSession();
        break;    
      default:
        break;
    } 
  }

  private closeSession(): void {
    this.goToRoute('/inicio');
    localStorage.removeItem('access_token');
  }

  private goToPerfil(): void{
    this.goToRoute('/perfil-cliente');
  }

  public goToRoute(routename:string): void{
    this.router.navigate([`${routename}`]);
  }

}
