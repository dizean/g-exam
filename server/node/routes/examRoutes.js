import express from "express";

const router = express.Router();

router.post("/generate", (req, res) => {
  const { title } = req.body;

  res.json({
    message: "Exam route working",
    title,
  });
});

export default router;