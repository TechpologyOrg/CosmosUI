"use client";
import React, { ReactElement, useState } from 'react'
import { MdMoreVert } from "react-icons/md";

interface I_Cosmos_select_icon
{
    children?: React.ReactElement | React.ReactElement[],
    icon?: React.ReactElement | React.ReactElement[]
}

export default function Cosmos_select_icon({children, icon}:I_Cosmos_select_icon) {
    const [isPop, setPop] = useState<Boolean>(false);
    const [selected, setSelected] = useState<number>(0);

    const getPopup = () =>
    {
        const to_ret: ReactElement|ReactElement[] = [];
        React.Children.forEach(children, (elem,key)=>{
            const temp = (
                <div key={key} className='w-full h-[32px] hover:bg-blue-500 text-zinc-400 dark:text-white hover:text-white
                flex items-center px-4 py-2 my-2 rounded-md transition-colors select-none' onClick={()=>{setSelected(key); setPop(false)}}>
                    {elem}
                </div>
            )
            to_ret.push(temp);
        })

        if(children !== undefined)
        {
            return(to_ret)
        }
        else
        {
            return(<p className='text-[14px] font-medium text-zinc-400 dark:text-white'>No options</p>)
        }
    }
    
    return (
        <div className={"px-2 py-2 rounded-lg w-fit cursor-pointer flex items-center justify-center relative \
        text-zinc-600 dark:text-zinc-500 hover:bg-zinc-100 hover:dark:bg-zinc-800 hover:text-zinc-700 \
        hover:dark:text-zinc-300 " + ((isPop) ?
        "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300" : "bg-transparent")}
        onClick={()=>setPop(!isPop)}>
            {
                (isPop) ?
                (
                    <div className='absolute min-w-fit w-[120px] min-h-fit max-h-[200px] z-40 rounded-lg shadow-md
                    dark:bg-zinc-800 bg-white px-2 py-1 text-black dark:text-white top-full right-1/2
                    outline outline-1 dark:outline-zinc-700 outline-zinc-300 overflow-y-scroll'>
                        {getPopup()}
                    </div>
                ): (<></>)
            }
            {
                (icon !== undefined) ?
                (icon) : (<MdMoreVert size={20}/>)
            }
        </div>
    )
}
