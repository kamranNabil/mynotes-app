📝 MyNotes App - Full Stack Notes Application
A modern, full-stack notes application built with React frontend and Spring Boot backend, featuring CRUD operations and shareable note links.

🌟 Features
✅ Create, Read, Update, Delete notes

✅ Share notes via public links

✅ Modern React UI with Vite

✅ Spring Boot REST API

✅ H2 Database (Development) / PostgreSQL (Production)

✅ CORS enabled for frontend-backend communication

✅ Ready for deployment on Vercel + Render/Railway

🚀 Live Demo
Frontend: Vercel Deployment
Backend: Render Deployment
API Example: https://your-backend.onrender.com/api/notes/share/shareable-link-id

🛠️ Tech Stack
Frontend
React 19 with Vite

Material-UI (MUI) for components

Axios for API calls

React Router for navigation

Backend
Spring Boot 3.5.5

Spring Data JPA

H2 Database (Development)

PostgreSQL (Production)

Maven for dependency management

📁 Project Structure
text
mynotes-app/
├── backend/                 # Spring Boot application
│   ├── src/main/java/
│   │   └── com/mynotes/app/notes/
│   │       ├── controllers/ # REST controllers
│   │       ├── models/      # Entity classes
│   │       ├── repositories/# JPA repositories
│   │       ├── services/    # Business logic
│   │       └── NotesApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
├── frontend/                # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API services
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
📋 API Endpoints
Notes CRUD
Method	Endpoint	Description
GET	/api/notes	Get all notes
POST	/api/notes	Create new note
GET	/api/notes/{id}	Get note by ID
PUT	/api/notes/{id}	Update note
DELETE	/api/notes/{id}	Delete note
GET	/api/notes/share/{shareableLink}	Get note by share link
Request/Response Example
Create Note:

json
POST /api/notes
{
  "title": "My Note",
  "content": "Note content here"
}

Response:
{
  "id": "uuid-1234-...",
  "title": "My Note",
  "content": "Note content here",
  "shareableLink": "shareable-uuid-1234"
}
🗄️ Database Schema
sql
CREATE TABLE notes (
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    shareable_link VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
🚀 Getting Started
Prerequisites
Java 21+

Node.js 18+

Maven

PostgreSQL (for production)

Local Development
Clone the repository

bash
git clone https://github.com/kamranNabil/mynotes-app.git
cd mynotes-app
Start Backend

bash
cd backend
./mvnw spring-boot:run
# Backend runs on http://localhost:8080
Start Frontend

bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
Access Applications

Frontend: http://localhost:5173

Backend API: http://localhost:8080/api/notes

H2 Console: http://localhost:8080/h2-console

🌐 Deployment
Backend (Render/Railway)
Connect GitHub repository

Set build command: cd backend && mvn clean package -DskipTests

Set start command: java -jar target/notes-0.0.1-SNAPSHOT.jar

Add PostgreSQL database

Set environment variables:

SPRING_PROFILES_ACTIVE=production

DATABASE_URL=your-postgresql-url

Frontend (Vercel)
Connect GitHub repository

Set root directory: frontend

Set build command: npm run build

Set output directory: dist

Add environment variable:

VITE_API_URL=https://your-backend-url.onrender.com

🔧 Configuration
Backend Application Properties
properties
# Development
spring.datasource.url=jdbc:h2:mem:notesdb
spring.h2.console.enabled=true

# Production
spring.datasource.url=${DATABASE_URL}
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
Frontend Environment Variables
env
VITE_API_URL=http://localhost:8080
🛡️ Authentication & Security
CORS configured for cross-origin requests

No authentication (for simplicity in demo)

Production recommendation: Add JWT authentication

Share links: Publicly accessible via UUID links

📈 System Architecture
text
Client Browser → Vercel (React) → Render (Spring Boot) → PostgreSQL
                     ↑                    ↑
                 Static Assets        Business Logic
                 UI Components        Data Persistence
⚠️ Failure Modes & Mitigation
System Level Failure
Failure: Database connection loss

Mitigation: Connection pooling, retry mechanisms, PostgreSQL replication

CRUD Level Failure
Failure: Race conditions on concurrent updates

Mitigation: Optimistic locking with @Version annotation

🤝 Contributing
Fork the project

Create a feature branch (git checkout -b feature/amazing-feature)

Commit changes (git commit -m 'Add amazing feature')

Push to branch (git push origin feature/amazing-feature)

Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Spring Boot team

React and Vite communities

Material-UI for components

Render and Vercel for deployment platforms

Developed by Kamran Nabil - GitHub
