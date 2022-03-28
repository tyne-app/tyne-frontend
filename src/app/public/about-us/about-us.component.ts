import { Component } from '@angular/core';

export interface TyneMember{
  memberImage: string,
  memberName:string,
  memberCharge:string
}
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  public tyneMembers: TyneMember[] = [
    { memberImage: 'assets/members/elias.jpeg', memberName: 'Elias', memberCharge: 'CEO' },
    { memberImage: 'https://randomuser.me/api/portraits/men/85.jpg', memberName: 'David', memberCharge: 'Líder Equipo de Desarrollo' },
    { memberImage: 'assets/members/jorge.jpeg', memberName: 'Jorge', memberCharge: 'Diseñador UI/UX' },
    { memberImage: 'https://randomuser.me/api/portraits/men/85.jpg', memberName: 'Tony', memberCharge: 'Desarrollador Informático' },
    { memberImage: 'assets/members/cristopher.jpg', memberName: 'Cristopher', memberCharge: 'Desarrollador Informático' },
    { memberImage: 'https://randomuser.me/api/portraits/men/85.jpg', memberName: 'Yerko', memberCharge: 'Desarrollador Informático' },
    { memberImage: 'assets/members/vicente.jpeg', memberName: 'Vicente', memberCharge: 'Diseñador UI/UX' },
    { memberImage: 'assets/members/roberto.jpg', memberName: 'Roberto', memberCharge: 'Desarrollador Informático' },
  ]

}
