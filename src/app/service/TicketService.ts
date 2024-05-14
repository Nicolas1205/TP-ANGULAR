import { Injectable } from "@angular/core";
import { Ticket } from "../model/Ticket";

@Injectable({
  providedIn: 'root'
})
export class CartController {

  public tickets: Ticket[] = []; 

  getTickets(): Ticket[] {
    return this.tickets;
  }
}
        