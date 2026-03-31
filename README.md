# 📚 Inkwell – AI Voice Reading Platform

**Inkwell** is an AI-powered platform that enables **real-time voice conversations with your books**.  

Built with **Next.js 16**, **Vapi**, and **MongoDB**, Inkwell transforms PDFs into **interactive, voice-enabled entities** using advanced AI and natural voice synthesis.  

Users can choose from custom **ElevenLabs personas**, engage in conversations, request summaries, and view live transcripts — all within a sleek, modern UI powered by **Shadcn UI** and secured with **Clerk authentication**.

---

## 🚀 Features

- 📄 **PDF Upload & Ingestion**  
  Upload and process books into interactive AI-driven content.

- 🎙 **Voice-First Conversations**  
  Talk to your books in real-time using natural voice interaction.

- 🧠 **AI Voice Personas**  
  Choose from multiple **ElevenLabs voices** for a personalized experience.

- 📊 **Smart Summaries & Insights**  
  Instantly generate summaries and extract key ideas.

- 📝 **Session Transcripts**  
  View and revisit conversations with real-time transcripts.

- 📚 **Library Management**  
  Organize and manage your uploaded books efficiently.

- 🔐 **Authentication & Subscription**  
  Secure user management with Clerk and subscription-ready architecture.

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16  
- TypeScript  
- Tailwind CSS  
- Shadcn UI  

### Backend & Services
- MongoDB  
- Vapi (Voice AI)  
- ElevenLabs (Voice Synthesis)  
- Clerk (Authentication & User Management)  

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/lachimolala2628/inkwell.git
npm install
```
## 🛠️ Usage

- Navigate to the project directory

```bash 
cd inkwell
```

- Install dependencies

```bash
npm install
```

- Configure Environment Variables

Create a .env file and add necessary API keys and configuration:

```bash
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY

#Database
MONGODB_URI=YOUR_MONGODB_URI

#Vercel-storage
BLOB_READ_WRITE_TOKEN=YOUR_BLOB_READ_WRITE_TOKEN

#Vapi
NEXT_PUBLIC_ASSISTANT_ID=YOUR_NEXT_PUBLIC_ASSISTANT_ID
NEXT_PUBLIC_VAPI_API_KEY=YOUR_NEXT_PUBLIC_VAPI_API_KEY
```

- Run the development server

```bash
npm run dev
```

- Visit

```bash
http://localhost:3000
```


## 👋🏻 Author

**Ayush Kumar**
Frontend Developer with a focus on clean, scalable, and reliable web applications.