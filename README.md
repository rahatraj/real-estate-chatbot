#  Real Estate Analysis Chatbot

A full-stack real estate analysis chatbot that accepts user queries like `"Analyze Wakad"` and returns:

-  AI-generated summary (using Gemini 2.0 Flash)
-  Price trend chart
-  Filtered real estate data from Excel

---

##  Live Demo

The chatbot is deployed and live at:

👉 https://my-url-netlify.com

---

##  Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Frontend   | React, Recharts, Axios, Tailwind CSS    |
| Backend    | Django REST Framework, pandas           |
| LLM        | Google Gemini 2.0 Flash (via LangChain) |
| Deployment | Netlify (frontend), Render (backend)    |

---

##  Features

- User-friendly query input (e.g., `"Compare Ambegaon Budruk and Aundh"`)
- Excel data parsing and dynamic filtering
- Gemini-generated summary using LangChain
- Chart (price trends) and table view
- CSV + PDF downloads
- Error handling for unknown areas
- Full separation of concerns with React Context + Django Views

---

##  Folder Structure

real_estate_chatbot/ # Django backend
├── chatbot/ # Django app (logic, LLM, views)
├── real_estate_chatbot/ # Django project settings
├── Sample_data.xlsx # Excel source file
real_estate_chatbot_frontend/ # React frontend
.env # Environment variables
requirements.txt # Python dependencies
.gitignore

## ⚙️ Environment Variables

### 🔐 `.env` (backend)

```env
GEMINI_API_KEY=your-google-gemini-api-key

```

## Local Setup

**Backend (Django)**

cd real_estate_chatbot
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py runserver

**Frontend (React)**

cd real_estate_chatbot_frontend
npm install
npm start

## Author
MD RAHAT REZA
Full Stack Developer
Email: rahatreza3199@gmail.com

