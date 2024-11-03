# Chatbot Application

This is a simple chatbot application built with Spring Boot for the backend and Angular for the frontend. The application uses H2 in-memory database to store conversation history and FAQ data.

## Prerequisites

Before running the application, ensure you have the following installed on your machine:

- [Java JDK 11 or higher](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Maven](https://maven.apache.org/install.html)
- [Node.js and npm](https://nodejs.org/en/download/) (for the Angular frontend)
- [Angular CLI](https://angular.io/cli) (install via npm: `npm install -g @angular/cli`)

## Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/nayfadil/chatbot-frontend.git/
cd chatbot-frontend
```

## Running the angular front end

- Install dependencies: Install the required npm packages:
```bash
npm install
ng serve
```
- The application running on http://localhost:4200

## Example question and bot response
- here is basic question and answer :
```bash
'Hello', 'Hi there!'
'What is your name?', 'I am Yu'
'Who are you ?', 'I am your virtual assistant.'
'Can you help me ?', 'What can I do for you ?'
```
- If the bot can not recognize the question it will return : I am sorry, I did not understand that.

## Notes
- The service using itext (levenshtein) to get similarity threshold with distance <= 3
