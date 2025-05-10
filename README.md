# 🇦🇫 Afghan Proverbs & Sayings API

A RESTful API that stores and manages traditional Afghan proverbs and sayings in Dari, Pashto, and English.

## 📌 Live Demo

🌐 [View Live on Render](https://afghan-proverbs-api-jlrh.onrender.com)

---

## 📋 Features

- ✅ Full CRUD (Create, Read, Update, Delete)
- 🔎 Filter by category
- 🔁 Get a random proverb
- 🔤 Keyword search in all languages
- 🗂️ Support for multiple categories per proverb

---

## 📦 Data Model

Each proverb includes:

| Field         | Type     | Description                           |
| ------------- | -------- | ------------------------------------- |
| id            | Integer  | Unique identifier                     |
| textDari      | String   | Proverb in Dari                       |
| textPashto    | String   | Proverb in Pashto                     |
| translationEn | String   | English translation                   |
| meaning       | String   | Explanation or interpretation         |
| category      | String[] | One or more categories (e.g., advice) |

---

## 🚀 Run Locally

### Requirements:

- Node.js installed

### Setup:

```bash
git clone https://github.com/adela2003/afghan-proverbs-api.git
cd afghan-proverbs-api
npm install
npm start
```

📡 API Endpoints
➕ Create a Proverb
POST /proverbs
{
"id": 4,
"textDari": "کوه به کوه نمی‌رسه، آدم به آدم می‌رسه.",
"textPashto": "غر له غره نه تېرېږي، خو انسان له انسان سره ګوري.",
"translationEn": "Mountains never meet, but people do.",
"meaning": "People eventually cross paths again.",
"category": "wisdom"
}
