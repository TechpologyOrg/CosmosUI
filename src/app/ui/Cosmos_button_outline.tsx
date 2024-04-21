"use client";
import React from 'react'

interface I_Cosmos_card
{
  trigger?: ()=>void,
  children?: React.ReactElement | React.ReactElement[]
}

export default function Cosmos_button({trigger, children}:I_Cosmos_card) {
  return (
    <button className='max-w-fit h-[40px] px-4 dark:text-white text-black text-[16px] font-medium flex items-center 
    justify-center rounded-lg shadow-md shadow-[#FFFFFF0A] outline outline-1 -inset-px 
    dark:outline-[#FFFFFF10] outline-[#00000010] hover:dark:bg-zinc-800 hover:bg-zinc-50 transition-colors' onClick={trigger}>
        {children}
    </button>
  )
}
