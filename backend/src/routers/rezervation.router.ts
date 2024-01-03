import { Router } from "express";
import { sample_rezervations } from "../data";


const router = Router();

router.get("/", (req, res)=> {
    res.send(sample_rezervations);
});

router.get("/user/:userId", (req, res) => {
    const userId = req.params.userId;

    const rezervations = sample_rezervations.filter(rezervation => rezervation.ownerId === userId)

    res.send(rezervations);
});

router.get("/hotel/:hotelId", (req, res) => {
    const hotelId = req.params.hotelId;

    const rezervations = sample_rezervations.filter(rezervation => rezervation.hotelId=== hotelId)

    res.send(rezervations);
});

export default router;