import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' }, // Default route
  { path: 'chat', component: ChatbotComponent }, // Route for the chatbot
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
