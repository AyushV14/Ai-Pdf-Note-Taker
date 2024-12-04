import { NextResponse } from "next/server";
import fs from "fs/promises";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

//const pdfUrl = "https://polite-snail-646.convex.cloud/api/storage/8ce0caf4-fc31-4f4f-a575-b248d14845bd"

export async function GET(req) {

    const requestUrl = req.url;
    const {searchParams} = new URL(requestUrl);
    const pdfUrl= searchParams.get('pdfUrl');
    console.log(pdfUrl);
    

    //1. Load the pdf File
    const response = await fetch(pdfUrl);
    const data = await response.blob();
    const loader= new WebPDFLoader(data);
    const docs = await loader.load();

    let pdfTextContent='';
    docs.forEach(doc=>{
        pdfTextContent=pdfTextContent+doc.pageContent;
    })


    // 2. Split the text into smaller chunck
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100,
        chunkOverlap: 20,
      });

      const output = await splitter.createDocuments([pdfTextContent]);

      let splitterList =[];
      output.forEach(doc=>{
        splitterList.push(doc.pageContent);
      })
      

    return NextResponse.json({result:splitterList})
}