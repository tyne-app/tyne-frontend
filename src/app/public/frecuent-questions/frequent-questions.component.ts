import { Component } from "@angular/core";

@Component({
  selector: "app-frequent-questions",
  templateUrl: "./frequent-questions.component.html",
  styleUrls: ["./frequent-questions.component.scss"],
})
export class FrequentQuestionsComponent {
  public questions = [
    {
      title: "¿Como registro mi restaurante en Tyne?",
      body: "Visite nuestra página web www.tyne.cl, dé click en “Une tu local”, llene los campos de contacto y lo llamaremos en un plazo no mayor a 48 hrs.",
    },
    {
      title:
        "¿Qué hago como locatario si un comensal no llega a la hora y día determinado de la reserva?",
      body: "Le pagaremos el total de su plato sin mayores problemas, para ello revise las políticas de reembolso.",
    },
    {
      title: "¿Qué pasa si el restaurante no tiene el plato que pedí?",
      body: "El local puede negociar un cambio de menú en el instante en caso de falta de stock, de otro modo, Tyne puede reembolsar el dinero del platillo en caso de que no se llegue acuerdo, recuerde que puede escribirnos en cualquier momento a contacto@tyne.cl, donde podemos ofrecer una reserva en algún otro local con similares características.",
    },
    {
      title: "¿Qué métodos de pago acepta?",
      body: "Para el pago de los Comensales se acepta pago por tarjeta de credito o debito, para el pago hacia nuestros locales registrados, se hace por deposito en cuenta bancaria.",
    },
    {
      title: "¿Cómo me aseguro que se haga el pago de mis ventas?",
      body: " Se firmará contrato de colaboración, donde una de nuestras cláusulas es el compromiso de mantener contacto directo tanto por parte de Tyne con el local, como del restaurante con Tyne, adicionalmente se notificará cuando los pagos estén realizados.",
    },
    {
      title: "¿Cuánto dura el servicio de Tyne?",
      body: "El servicio de Tyne para restaurantes siempre será gratis.",
    },
    {
      title: "¿Es seguro, mis datos son confidenciales?",
      body: "Nuestro equipo informático garantiza la total seguridad y la no difusión de sus datos personales.",
    },
    {
      title: "¿Cuanto gano usando la App?",
      body: "El 100% de los platos, dado que Tyne cobra el 15% que se suma sobre el total comprado por el Comensal, eso quiere decir que el valor por la comida irá en total beneficio hacia nuestros socios locales.",
    },
    {
      title: "¿Qué sucede si no me llega el dinero?",
      body: "Puede ponerse en contacto de manera inmediata con nuestro equipo y nos comunicaremos en un tiempo no mayor a 48 hrs hábiles.",
    },
    {
      title:
        "¿Sí no me funciona la app en el pago, reserva, otros, quién y cómo lo solucionaría?",
      body: "Como comensal o local puede escribirnos reportando la falla técnica a contacto@tyne.cl y nos pondremos en contacto para evaluar la solución que mejor se ajuste a su necesidad",
    },
    {
      title: "¿Qué dispositivos necesito para usar Tyne?",
      body: "Un smartphone con conexión estable a Internet o un computador de escritorio, laptop y similares con conexión a Internet.",
    },
    {
      title:
        "¿Cuánto tiempo se necesita para implementar el sistema en el local?",
      body: "Basta con solo registrarse y editar su perfil al igual que una red social.",
    },
  ];

}
