import { Component } from "@angular/core";
import { StepImage } from "../../interfaces/step-image";

@Component({
  selector: "app-step",
  templateUrl: "./step.component.html",
  styleUrls: ["./step.component.scss"],
})
export class StepComponent {
  public stepImages: StepImage[] = [
    {
      title: "1. Elige un local: el más cercano o el que prefieras.",
      imageUrl: "assets/icons/one-choose-local.svg",
    },
    {
      title: "2. Elige la comida y dinos para cuantos es la mesa.",
      imageUrl: "assets/icons/two-choose-food.svg",
    },
    {
      title: "3. Haz tu reserva, paga y espera a que llegue el día.",
      imageUrl: "assets/icons/three-doing-reservation.svg",
    },
    {
      title: "4. Anda al local y disfruta sin preocupaciones.",
      imageUrl: "assets/icons/four-go-to-local.svg",
    },
  ];
}
