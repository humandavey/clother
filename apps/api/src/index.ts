import "dotenv/config";
import express, { Request, Response } from 'express';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.WEB_APP_URL || "http://localhost:3000",
    credentials: true,
  }),
);

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

(async () => {
  const testRouter = (await import("./routes/test")).default;

  app.use("/", testRouter);

  app.listen(port, () => {
    console.log(`[API] Listening on port ${port}`);
  });
})()