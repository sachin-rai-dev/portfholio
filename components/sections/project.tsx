import { project, projects } from '@/lib/section_data'
import React from 'react'
import Image from 'next/image'

function Project() {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-5'>
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
  return(
    <div className='rounded-lg border border-input p-5 flex flex-col items-center gap-4 '>
      <Image src={data.url} alt={"project pic"} height={580} width={580} className='rounded-lg'/>
      <h1 className='font-semibold text-lg text-start'>{data.title}</h1>
      <h3 className='text-slate-400'>{data.description}</h3>
    </div>
  )
}

export default Project