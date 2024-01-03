import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";


const router = Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = sample_users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (user) {
      res.send(generateTokenResponse(user));
    } else {
      res.status(400).send("Kullanıcı email ya da şifre hatalı!");
    }
  });
  
  router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    const user = sample_users.find(user => user.id == userId);
  
    res.send(user);
  })
  
  const generateTokenResponse = (user: any) => {
    const token = jwt.sign(
      {
        email: user.email,
        isAdmin: user.isAdmin,
      },
      "TatilHeyecanıTokenMetni",
      { expiresIn: "1d" }
    );
  
    user.token = token;
    return user;
  };

  export default router;