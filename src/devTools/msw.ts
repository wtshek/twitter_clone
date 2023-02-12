import { rest, setupWorker } from "msw";
import { createTweets } from "./getMockTweets";

const BASE_URL = "https://backend/api";

const worker = setupWorker(
  rest.get(`${BASE_URL}/tweets`, (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(createTweets(10)));
  })
);

worker.start();
