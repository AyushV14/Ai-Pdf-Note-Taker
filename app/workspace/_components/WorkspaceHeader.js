import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

export const WorkspaceHeader = ({fileName}) => {
  // console.log(fileName);
  
  return (
    <div className='p-4 flex justify-between shadow-md'>
      <Link href={'/dashboard'}>
        <Image
            src={'/logo.svg'}
            alt=''
            width={140}
            height={100}
        />
        </Link>
        <h2 className='font-bold'>{fileName}</h2>
        <div className='flex gap-2'>
          <Button>Save</Button>
          <UserButton/>
        
        </div>
    </div>
  )
}
