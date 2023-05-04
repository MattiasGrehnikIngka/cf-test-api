import { createClient } from "contentful";
import type { Response, Request, NextFunction } from "express";

export const entries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    space,
    environment,
    accessToken,
    host,
    depth = "10",
    limit = "100",
    offset = "0",
    content_type,
  } = req.query as Record<string, string>;

  const client = createClient({
    space,
    environment,
    accessToken,
    host,
    retryOnError: false,
  });

  const query = {
    content_type,
    include: depth,
    limit,
    skip: offset,
  };

  let resp;
  try {
    resp = await client.getEntries(query);
  } catch (e) {
    next(e);
  }
  console.log(JSON.stringify(resp));
  res.status(200).json(resp);
};
