"use client"

import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react';
import React from 'react'
import { api } from '../../convex/_generated/api';
import Image from 'next/image';
import Link from 'next/link';

const Dashboard = () => {

  const { user } = useUser();

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress.emailAddress
  });

  console.log(fileList);

  return (
    <div>
      <h2 className='font-medium text-3xl '> <span className='border-b-[2px]'>Workspace</span></h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10'>
        {fileList?.length>0?fileList?.map((file, index) => {
          return (
            <Link href={'/workspace/'+file.fileId} key={index}>
            <div  className='flex flex-col items-center justify-center p-5 shadow-md rounded-md border cursor-pointer hover:scale-105 transition-all'>
              <Image
                src={'/pdf.png'}
                alt=''
                height={50}
                width={50}
              />
              <h2>{file.fileName}</h2>
            </div>
            </Link>
          );
        })
        :[1,2,3,4,5,6,7,8].map((item,index)=>(
          <div key={index} className='bg-slate-200 rounded-md h-[150px] animate-pulse'></div>
        ))
      }
      </div>
    </div>
  )
}

export default Dashboard;
