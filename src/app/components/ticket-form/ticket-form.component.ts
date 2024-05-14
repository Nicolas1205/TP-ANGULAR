import { Component } from '@angular/core'
import { Ticket } from '../../model/Ticket';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'questions',
  standalone: true,
  templateUrl: './ticket-form.component.html',
  imports: [FormsModule],
})
export class TicketFormComponent {
    expectadores: string[] = ["local", "extranjero"];
    ticket: Ticket = {};
    onChangeExpectador = () => {
        if(this.ticket.expectador === "local") {
            this.ticket.precioCobrado = this.ticket.precioReal! - (this.ticket.precioReal! * 20) / 100;
            return;
        }
        this.ticket.precioCobrado = this.ticket.precioReal;
    }
}