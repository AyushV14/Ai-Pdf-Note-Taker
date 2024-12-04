'use client'

import Image from 'next/image'
import React from 'react'
import { Button } from "../../../components/ui/button"
import { Progress } from "../../../components/ui/progress";
import { Layout, Shield } from 'lucide-react';
import UploadPdf from './UploadPdf'
import { useQuery } from 'convex/react';
import { useUser } from '@clerk/nextjs';
import { api } from '../../../convex/_generated/api';


const Sidebar = () => {

  const { user } = useUser();

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress.emailAddress
  });
  return (
    <div className='shadow-md h-32 md:h-screen p-7 flex flex-row md:flex-col absolute md:relative bottom-20 md:bottom-0 left-0 md:left-0 items-center md:items-start gap-x-9'>
        <Image
            src={'/logo.svg'}
            alt=''
            width={170}
            height={120}
        />
        <div className='mt-10'> 
            <UploadPdf>
                <Button className="w-full"> 
                    + Upload PDF
                </Button>
            </UploadPdf>


            <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
                <Layout/>
                <h2>Workspace</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer'>
                <Shield/>
                <h2>Upgrade</h2>
            </div>
        </div>
        <div className='absolute bottom-24 w-[80%]'>
            <Progress value={(fileList?.length/10)*100} />
            <p className='text-sm mt-2'>{(fileList?.length)} pdf uploaded till date</p>
            <p className='text-sm text-gray-400 mt-2'>Use for free! No Money required</p>
        </div>
    </div>
  )
}

export default Sidebar