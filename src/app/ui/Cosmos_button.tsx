"use client";
import React from 'react'

interface I_Cosmos_button
{
    isWide?: boolean,
    trigger?: ()=>void,
    children?: React.ReactElement | React.ReactElement[]
}

export default function Cosmos_button({isWide, trigger, children}:I_Cosmos_button) {
  return (
    <button className={"h-[40px] px-4 border-[1px] border-zinc-300 border-opacity-20 bg-zinc-900 dark:bg-zinc-600 text-white text-[16px] font-medium flex items-center justify-center rounded-lg shadow-md shadow-[#FFFFFF0A] outline outline-1 -inset-px outline-[#FFFFFF10] dark:outline-[#00000010] hover:dark:bg-zinc-500 hover:bg-zinc-800 transition-colors" + ((isWide === true) ? " w-full" : "max-w-fit")}
    onClick={trigger}>
        {children}
    </button>
  )
}
