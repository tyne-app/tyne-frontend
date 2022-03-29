import { Component } from "@angular/core";
import { RefundPolicy } from "./shared/interfaces/refund-policy";

@Component({
  selector: "app-refund-policy",
  templateUrl: "./refund-policy.component.html",
  styleUrls: ["./refund-policy.component.scss"],
})
export class RefundPolicyComponent {
  public refundPolicies: RefundPolicy[] = [
    { description: `El restaurante no mantiene disponible el o los platos solicitados mediante la plataforma Tyne, en tal caso se reembolsa la diferencia de los cambios o bien, se genera un cargo si el valor es superior al original en la siguiente compra.`},
    {
      description:`Las reservas se pueden editar hasta 2 horas antes de la agenda, en tal caso se hará el reembolso de la diferencia o se hará un nuevo cargo con los valores nuevos incorporados en caso de sumar productos. `
    },
    {
      description: `El restaurante desconoce la reserva, se reembolsa el 100% del valor pagado, o bien, se realiza una reserva lo más pronto posible respetando el tope de lo pagado por los productos.`
    },
    {
      description: `El restaurante no puede reemplazar o no llega a un acuerdo en el cambio de un plato no disponible a la hora de servir, en tal caso al cliente se le reembolsará el 100% del valor, o bien, se genera un cargo si el valor es superior al original en la siguiente compra.`
    },
    {
      description: `El Comensal cancela la reserva durante el día, se reembolsa el 100% del valor total.`
    },
    {
      description: `El Comensal no llega a la reserva efectuada, sin dar aviso al local, sin cancelar, en tal caso se reembolsa el 0%, en caso de eventualidades como accidentes de trayecto, se puede contactar durante los días posteriores con Tyne para analizar la situación y llegar a un acuerdo, en cuanto los accidentes de trayecto, robos, etc, se debe demostrar dicha situación, bastará una fotografía del parte de las policías o personal que le ha atendido.`
    },
    {
      description: `El Comensal cancela la reserva faltando 2 horas o menos para la reserva, en ese caso, se reembolsa el 0% del total pagado, dado que los servicios de Tyne y los locales asociados consideran el stock de alimentos para usted.`
    },
    {
      description: `Se reembolsará el 0% del total pagado en caso de que los alimentos consumidos produzcan una reacción alérgica, dado que los ingredientes se encuentran publicados según la comida, siendo de responsabilidad total del local en cuestión el exponer dicha información al público mediante nuestras plataformas, en el caso de que no se encontrase seguro sobre si posee antecedentes alérgicos a un ingrediente, le recomendamos no consumir dicho alimento por su seguridad.`
    }
  ]

}
