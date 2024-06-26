import { Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

export const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "productos", component: ProductListComponent},
  { path: "questions", component: QuestionsComponent },
  { path: "ticketform", component: TicketFormComponent},
];
