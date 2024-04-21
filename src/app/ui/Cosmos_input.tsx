import React from 'react'

interface I_Cosmos_input
{
    placeholder? : string,
    setValue : (val:string) => void
}

export default function Cosmos_input({placeholder, setValue}:I_Cosmos_input) {
  return (
    <input className='min-w-[80px] w-full h-[32px] dark:bg-zinc-800 rounded-md outline outline-1 outline-offset-1 
    dark:outline-zinc-700 outline-zinc-300 -inset-px px-2 text-[16px] dark:text-white placeholder-zinc-500 
    focus:outline-2 focus:outline-blue-500 hover:outline-zinc-600' placeholder={placeholder}
    onChange={(e)=>{setValue(e.target.value)}} />
  )
}
