"use client"

import { project, projects } from '@/lib/section_data'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'


function Project() {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 '>
        {
          projects.map((val,i)=>{
            return(
              <Card data={val} key={i}/>
            )
          })
        }
    </div>
  )
}

function Card({data}:{data:project}) {
    const router = useRouter()
  return(
    <div className='rounded-lg border border-input p-5 flex flex-col items-center gap-4 'onClick={()=>{router.push(data.link)}}>
      <Image src={data.url} alt={"project pic"} height={580} width={580} className='rounded-lg'/>
      <div className='flex justify-around self-start w-full'><h1 className='font-semibold text-lg text-start'>{data.title}</h1> <Button variant={"secondary"} onClick={()=>{router.push(data.link)}} className='self-end bg-sky-600 text-white hover:bg-sky-700 px-5'> Visit </Button></div>
      <h3 className='text-slate-400'>{data.description}</h3>
    </div>
  )
}

export default Project