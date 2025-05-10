export default function generateId(data) {
  return data.length ? Math.max(...data.map((p) => p.id)) + 1 : 1;
}
