// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {createClient} from "@sanity/client";
import type {NextApiRequest, NextApiResponse} from "next";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

const client = createClient(config);

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {name, email, comment, _id} = req.body;
  const newComment = {
    _type: "comment",
    name,
    email,
    comment,
    post: {_type: "reference", _ref: _id},
  };
  try {
    await client.create(newComment);
    res.status(200).json({message: "Comment created"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Something went wrong", error});
  }
  console.log("Comment Created");
}
