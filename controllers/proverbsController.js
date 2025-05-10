import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import generateId from "../utils/generateId.js";

// handle __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const proverbsPath = path.join(__dirname, "../data/proverbs.json");

// Helpers
function loadProverbs() {
  return JSON.parse(fs.readFileSync(proverbsPath, "utf-8"));
}

function saveProverbs(data) {
  fs.writeFileSync(proverbsPath, JSON.stringify(data, null, 2));
}

// Controller functions
function getAllProverbs(req, res) {
  const data = loadProverbs();
  res.json(data);
}

function getProverbById(req, res) {
  const data = loadProverbs();
  const proverb = data.find((p) => p.id === parseInt(req.params.id));
  if (!proverb) return res.status(404).json({ message: "Not found" });
  res.json(proverb);
}

function addProverb(req, res) {
  const data = loadProverbs();
  const newProverb = {
    id: generateId(data),
    ...req.body,
  };
  data.push(newProverb);
  saveProverbs(data);
  res.status(201).json(newProverb);
}

function updateProverb(req, res) {
  const data = loadProverbs();
  const index = data.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Not found" });
  data[index] = { ...data[index], ...req.body };
  saveProverbs(data);
  res.json(data[index]);
}

function deleteProverb(req, res) {
  const data = loadProverbs();
  const newData = data.filter((p) => p.id !== parseInt(req.params.id));
  if (data.length === newData.length)
    return res.status(404).json({ message: "Not found" });
  saveProverbs(newData);
  res.json({ message: "Deleted successfully" });
}

function getRandomProverb(req, res) {
  const data = loadProverbs();
  const random = data[Math.floor(Math.random() * data.length)];
  res.json(random);
}

function searchProverbs(req, res) {
  const { category, keyword } = req.query;
  let data = loadProverbs();

  if (category) {
    data = data.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (keyword) {
    data = data.filter(
      (p) =>
        p.textDari.includes(keyword) ||
        p.textPashto.includes(keyword) ||
        p.translationEn.includes(keyword)
    );
  }

  res.json(data);
}

// Exports
export {
  searchProverbs,
  getProverbById,
  addProverb,
  updateProverb,
  deleteProverb,
  getRandomProverb,
  getAllProverbs,
};
