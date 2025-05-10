# 📚 Afghan Proverbs & Sayings API

This is a RESTful API for managing traditional Afghan proverbs in **Dari**, **Pashto**, and their **English translations**. It supports full CRUD operations and offers features like category filtering, random proverb fetching, and keyword search.

---

## 🚀 Features

- CRUD API (Create, Read, Update, Delete)
- Search by keyword in any language
- Filter by category
- Fetch a random proverb
- JSON-based data storage
- Built with Node.js + Express

---

## 🧾 Data Structure

Each proverb object looks like this:

```json
{
  "id": 1,
  "textDari": "آب که یک جا بماند، می‌گندد.",
  "textPashto": "اوبه چې ودریږي، بد بوی کوي.",
  "translationEn": "Water that stays still, stinks.",
  "meaning": "If there's no movement or progress, it leads to problems.",
  "category": "wisdom"
}
```
