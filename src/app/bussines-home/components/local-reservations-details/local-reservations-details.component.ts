import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-local-reservations-details",
  templateUrl: "./local-reservations-details.component.html",
  styleUrls: ["./local-reservations-details.component.scss"],
})
export class LocalReservationsDetailsComponent implements OnInit {
  public customCollapsedHeight = "";
  public customExpandedHeight = "";
  public typesPlates = [];
  public detailsReservation = [];
  public constructor(@Inject(MAT_DIALOG_DATA) public parameters: { idReservation: number }) {}

  public ngOnInit(): void {
    this.customCollapsedHeight = "50px";
    this.customExpandedHeight = "50px";

    this.getTypePlates();
    this.getDetailsReservations();
  }

  public getTypePlates(): void {
    const typesPlates = [
      { id: 1, description: "ENTRADAS" },
      { id: 2, description: "FONDOS" },
      { id: 3, description: "BEBIDAS" },
      { id: 4, description: "POSTRE" },
    ];
    this.typesPlates = typesPlates;
  }

  public getDetailsReservations(): void {
    const detailsReservation = [
      {
        idReservation: 1,
        description: "Reserva de Maria Perez para 4 personas",
        adressLocal: "Calle siempre viva 123 - Comuna Springfield",
        desk: "Interior",
        dateHour: "Domingo 09/05/2021",
        hourReservation: "16:30",
        priceTotal: "$25.000 CLP",
        order: [
          {
            typePlateId: 1,
            plate: "Carne al jugo",
            description: "Saborsa Carne cocida en su jugo acompañada con arroz",
            price: "$4.000 CLP c/u",
            quantity: 1,
          },
          {
            typePlateId: 3,
            plate: "Bebida Coca Cola",
            description: "Para refrescarse",
            price: "$1.000 CLP c/u",
            quantity: 4,
          },
          {
            typePlateId: 3,
            plate: "Cerveza Corona",
            description: "Para disfrutar su comida",
            price: "$4.000 CLP c/u",
            quantity: 10,
          },
          {
            typePlateId: 4,
            plate: "Helado",
            description: "Copa de chocolate con tres sabores",
            price: "$2.000 CLP c/u",
            quantity: 2,
          },
        ],
      },
    ];
    this.detailsReservation = detailsReservation;
  }
}
