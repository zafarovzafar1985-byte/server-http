
const express = require("express");

const app = express();
const port = 4000;

app.use(express.json());


const students = [
  { id: 1, name: "Zafar", age: 13 },
  { id: 2, name: "Ali", age: 14 },
  { id: 3, name: "Vali", age: 15 }
];


app.get("/student/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: "ID noto'g'ri."
    });
  }

  const student = students.find((item) => item.id === id);

  if (!student) {
    return res.status(400).json({
      success: false,
      message: "Bunday ID li o'quvchi topilmadi.Boshqa tering iltimos?"
    });
  }

  res.status(200).json({
    success: true,
    data: student
  });
});


app.post("/register", (req, res) => {
  const { name, age } = req.body;

  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    age === undefined ||
    age === null ||
    age === ""
  ) {
    return res.status(400).json({
      success: false,
      message: "Name va age maydonlari majburiy."
    });
  }

  const parsedAge = Number(age);

  if (!Number.isInteger(parsedAge) || parsedAge <= 0) {
    return res.status(400).json({
      success: false,
      message: "Age musbat butun son bo'lishi kerak."
    });
  }

  const newStudent = {
    id: students.length
      ? Math.max(...students.map((student) => student.id)) + 1
      : 1,
    name: name.trim(),
    age: parsedAge
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "O'quvchi muvaffaqiyatli ro'yxatdan o'tdi.",
    data: newStudent
  });
});

app.listen(port, (err) => {
    if(err) {
        console.error("Server yonmadi", err);
    }else {
        console.log(`http://localhost:${port}`);
    }
})