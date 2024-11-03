import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userMessage: string = '';
  messages: Message[] = [];

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (this.userMessage.trim()) {
      const userMessage = this.userMessage;
      this.http
        .post<any>('http://localhost:8080/chat/question', { question: userMessage })
        .subscribe((response) => {
          const chat : Message = {question : userMessage, botAnswer: response.result.message};
          this.messages.push(chat);
          this.userMessage = '';
        });
    }
  }
}

interface Message {
  question: string;
  botAnswer : string;
}
