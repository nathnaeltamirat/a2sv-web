'use client'
import { data } from '@/utils/data'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation';

import React from 'react'

const inforamtion = ()=>{
    const res = data().job_postings;
    return res;
}
const Card = () => {
    const value = inforamtion()
    const router = useRouter()
    const handleClick = (id:number)=>{
        router.push(`job-listing/${id}`)
    }
  return (
    <>
   { value.map(item=>(
  
            <div onClick={()=>handleClick(item.id)} key= {item.id}className="mb-4 cursor-pointer flex flex-col md:flex-row  gap-2 p-8 border border-gray-400 rounded-2xl overflow-x-hidden max-w-full">
        <div >
            <Image width={200} height = {200}   src={item.image} alt="comany logo" />
        </div>
        <div>
            <h1 className='font-bold mb-2'>{item.title}</h1>
            <p className='opacity-70 mb-2'>{item.info}.{item.about.location}</p>
            <p className='mb-4'>{item.description}</p>
            <div className='flex gap-2'>
                <p className='bg-green-200 text-green-500  rounded-2xl p-1 px-2'>{item.type}</p>
                <div className="w-px h-7 bg-gray-400"></div>
                <p className='text-yellow-500 border-1 border-yellow-500 p-1 px-2 rounded-2xl'>{item.about.categories[0]}</p>
                <p className ='border-1  text-center border-black rounded-2xl p-1 px-2'>{item.about.categories[1]}</p>
            </div>

        </div>
    </div>
   ))}
    </>

  )
}

export default Card