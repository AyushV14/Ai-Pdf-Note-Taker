"use client"

  import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
   } from "../../../components/ui/dialog"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import { useAction, useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { Loader2Icon } from "lucide-react"
import { useState } from "react"
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { toast } from "sonner"


function UploadPdf({children}) {

    const generateUploadUrl= useMutation(api.fileStorage.generateUploadUrl);
    const addFileEntry = useMutation(api.fileStorage.AddFileEntryToDb);
    const getFileUrl=useMutation(api.fileStorage.getFileUrl);
    const embeddedDocument = useAction(api.myActions.ingest)
    const {user}=useUser();
    const [file, setfile] = useState()
    const [loading, setloading] = useState(false)
    const [fileName, setFileName]= useState('')
    const [open,setOpen]=useState(false)

    const OnFileSelect=(event)=>{
        setfile(event.target.files[0])
    }

    const onUpload=async()=>{
        setloading(true)

        //Step 1: Get a short-lived upload URL
        const postUrl = await generateUploadUrl();
        
        // Step 2: POST the file to the URL
        const result = await fetch(postUrl, {
            method: "POST",
            headers: { "Content-Type": file?.type },
            body: file,
        });
        const {storageId} =await result.json();
        console.log('StorageId', storageId);
        const fileId= uuid4()
        const fileUrl= await getFileUrl({storageId:storageId})
        

        // Step 3: Save the newly allocated storage id to the database
        const resp = await addFileEntry({
            fileId:fileId,
            storageId:storageId,
            fileName:fileName??'Untitled FIle',
            createdBy:user?.primaryEmailAddress.emailAddress,
            fileUrl:fileUrl,
        })
        
        
        console.log(resp);

        //API Call to fetch PDf process data
        const apiresp = await axios.get('/api/pdf-loader?pdfUrl='+fileUrl)
        console.log(apiresp.data.result);
        await embeddedDocument({
            sliptText:apiresp.data.result,
            fileId:fileId
        });
        // console.log(embeddedDocResult);
        
        setloading(false);
        setOpen(false);

        toast('File is Ready !')
    }

  return (
    <Dialog open={open}>
        <DialogTrigger asChild>
            <Button onClick={()=>setOpen(true)} className="w-full">+ Upload PDF file</Button>
        </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload pdf file</DialogTitle>
                    <DialogDescription asChild>
                        <div className='mt-5'>
                        <h2>Select a File to Upload</h2>
                            <div className=' gap-2 p-3 rounded-md border'>
                                <input type='file' accept='application/pdf' onChange={(event)=>OnFileSelect(event)}/>
                            </div>
                            <div className='mt-2'>
                                <label>File Name *</label>
                                <Input placeholder="File Name" onChange={(e)=>setFileName(e.target.value)}/>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                    <Button onClick={onUpload} disabled={loading}>
                        {loading?<Loader2Icon className="animate-spin"/>:'Upload'}
                    </Button>
                </DialogFooter>
            </DialogContent>
    </Dialog>

  )
}

export default UploadPdf