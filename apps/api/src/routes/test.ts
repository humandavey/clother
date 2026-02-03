import { Router } from "express";
import { prisma } from "@beacon/database";

const router: Router = Router();

router.get('/getName', async (req, res) => {
    const user = await prisma.user.findFirst();
    res.send({name: user?.name});
});

export default router;