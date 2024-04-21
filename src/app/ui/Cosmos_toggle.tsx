"use client";
import React, { useState } from 'react'
import Cosmos_text from './Cosmos_text';
import Cosmos_title from './Cosmos_title';

interface I_Cosmos_toggle
{
    setState: ()=>void,
    value:boolean,
    title: string
}

export default function Cosmos_toggle({setState,value,title}:I_Cosmos_toggle) {
  return (
    <div className='flex gap-2 items-center'>
      <div className={'w-[40px] h-[20px] rounded-full outline outline-1 outline-offset-1 outline-zinc-400 \
      hover:outline-zinc-300 transition-all ease-in-out duration-500 ' + 
      ((value) ? "dark:bg-zinc-500 bg-blue-500" : "dark:bg-zinc-800 bg-zinc-200")} 
      onClick={()=>{setState()}}>
          <div className={'h-full w-[20px] rounded-full ' + 
          ((value)? "transition-all ease-in-out duration-500 translate-x-full bg-zinc-50 dark:bg-zinc-300 " : 
          "transition-all ease-in-out duration-500 -translate-x-0 bg-zinc-400 dark:bg-zinc-500")} />
      </div>
      <Cosmos_text><p className='text-black dark:text-white'>{title}</p></Cosmos_text>
    </div>
  )
}
