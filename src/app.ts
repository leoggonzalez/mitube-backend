import express from "express";

const port = process.env.PORT || "3000";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
