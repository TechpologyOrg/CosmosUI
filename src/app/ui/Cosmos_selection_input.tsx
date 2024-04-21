"use client";
import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowDown, MdCheck } from "react-icons/md";

interface I_Cosmos_selection_input
{
    children?: React.ReactElement | React.ReactElement[];
}

export default function Cosmos_selection_input({children}:I_Cosmos_selection_input){
    const [isPop, setPop] = useState<boolean>(false);
    const [selected, setSelected] = useState<number>(0);

    const getOptions = () =>
    {
        let ret: any = [];
        React.Children.forEach(children, (elem, key) => {
            const htmlElem = 
            (<div className='w-full h-[32px] hover:bg-blue-500 text-zinc-400 dark:text-white hover:text-white
            flex items-center px-4 py-2 my-2 rounded-md transition-colors select-none' onClick={()=>{setSelected(key); setPop(false)}} key={key}>
                    {elem}
                    {(selected === key) ? (<MdCheck size={20} className='text-black dark:text-white'></MdCheck>) : (<></>)}
            </div>);

            ret.push(htmlElem);
        });

        return (
            <>
                <ul>
                    {ret.map((elem:any) => elem)}
                </ul>
            </>
        );
    }

    return (
        <div className='flex items-center justify-center relative'>
            {(isPop === true) ? 
            (
                <div className='fixed top-0 left-0 w-full h-full' onClick={()=>{setPop(false)}}>
                </div>
            ):(<></>)}
            
            {(isPop === true) ? 
            (
                <div className='absolute min-w-[80px] w-full h-fit max-h-[160px] flex flex-col py-2 px-2 rounded-lg
                dark:bg-zinc-800 bg-white outline outline-1 outline-offset-1 dark:outline-zinc-700 outline-zinc-300 
                overflow-y-scroll' id='optionsList'>
                    {getOptions()}
                </div>
            ):(<></>)}

            <div className='min-w-[80px] w-full min-h-[32px] dark:bg-zinc-800 rounded-md outline outline-1 outline-offset-1 
            dark:outline-zinc-700 outline-zinc-300 -inset-px px-2 text-[16px] dark:text-white placeholder-zinc-500 
            focus:outline-2 focus:outline-blue-500 hover:outline-zinc-600 flex items-center' onClick={()=>{setPop(true)}}>
                {(children !== undefined && Array.isArray(children)) ? <div className='w-full'>{children[selected]}</div> : (<p>Empty</p>)}
                <div className='w-[20px] h-full'>
                    <MdKeyboardArrowDown size={24} className='text-zinc-400'/>
                </div>
            </div>
        </div>
    )
}
