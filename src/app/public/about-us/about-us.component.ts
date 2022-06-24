import { Component } from "@angular/core";

export interface TyneMember {
  memberImage: string;
  memberName: string;
  memberCharge: string;
}
@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent {
  public tyneMembers: TyneMember[] = [
    { memberImage: "assets/members/elias.jpg", memberName: "Elias", memberCharge: "CEO" },
    { memberImage: "assets/members/david.jpg", memberName: "David", memberCharge: "Líder Equipo de Desarrollo" },
    { memberImage: "assets/members/jorge.jpg", memberName: "Jorge", memberCharge: "Diseñador UI/UX" },
    { memberImage: "assets/members/tony.jpg", memberName: "Tony", memberCharge: "Desarrollador Informático" },
    { memberImage: "assets/members/yerko.jpg", memberName: "Yerko", memberCharge: "Desarrollador Informático" },
    { memberImage: "assets/members/rob.jpg", memberName: "Roberto", memberCharge: "Desarrollador Informático" },
    { memberImage: "assets/members/victor.jpg", memberName: "Victor", memberCharge: "Community Manager" },
    { memberImage: "assets/members/nicolas.jpg", memberName: "Nicolas", memberCharge: "Diseñador UI/UX" },
  ];
}
