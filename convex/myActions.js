"use node";

import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { action } from "./_generated/server.js";
import { v } from "convex/values";

export const ingest = action({
  args: {
    sliptText: v.any(),
    fileId: v.any(),
  },
  handler: async (ctx, args) => {
    // Ensure the fileId is stored in the desired format
    const formattedMetadata = { fileId: args.fileId };

    await ConvexVectorStore.fromTexts(
      args.sliptText, // Array of texts
      formattedMetadata,  // Pass the metadata as an object
      new GoogleGenerativeAIEmbeddings({
        apiKey: 'AIzaSyAnnFpHYGUSb4GmGe6LtutpA_OTeOtQwIw',
        model: 'text-embedding-004', // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: 'Document title',
      }),
      { ctx }
    );

    return "Completed....";
  },
});


export const search = action({
  args: {
    query: v.string(),
    fileId:v.string()
  },
  handler: async (ctx, args) => {
    const vectorStore = new ConvexVectorStore(
      new GoogleGenerativeAIEmbeddings({
        apiKey:'AIzaSyAnnFpHYGUSb4GmGe6LtutpA_OTeOtQwIw',
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      })
      , { ctx });

    const resultOne = await (await vectorStore.similaritySearch(args.query, 1)).filter(q=>q.metadata.fileId==args.fileId)
    console.log(resultOne);

    return JSON.stringify(resultOne)
  },
});