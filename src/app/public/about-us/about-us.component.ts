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
    { memberImage: 'assets/members/david.jpeg', memberName: 'David', memberCharge: 'Líder Equipo de Desarrollo' },
    { memberImage: 'assets/members/jorge.jpeg', memberName: 'Jorge', memberCharge: 'Diseñador UI/UX' },
    { memberImage: 'assets/members/placeholder.jpg', memberName: 'Tony', memberCharge: 'Desarrollador Informático' },
    { memberImage: 'assets/members/cristopher.jpg', memberName: 'Cristopher', memberCharge: 'Desarrollador Informático' },
    { memberImage: 'assets/members/yerko.jpeg', memberName: 'Yerko', memberCharge: 'Desarrollador Informático' },
    { memberImage: 'assets/members/rob.jpg', memberName: 'Roberto', memberCharge: 'Desarrollador Informático' },
    { memberImage: 'assets/members/victor.jpeg', memberName: 'Victor', memberCharge: 'Community Manager' },
    { memberImage: 'assets/members/nicolas.jpeg', memberName: 'Nicolas', memberCharge: 'Diseñador UI/UX' },
  ]
  
}
