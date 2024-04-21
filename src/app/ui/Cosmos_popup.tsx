"use client";
import React, { useEffect, useState } from 'react'
import Cosmos_card from './Cosmos_card';

interface I_Cosmos_popup
{
    hidePopup_func: ()=>void,
    showPopup: boolean,
    children?: React.ReactElement | React.ReactElement[]
}

export default function Cosmos_popup({hidePopup_func, showPopup,children}:I_Cosmos_popup) {
    
    useEffect(() => {
        if (showPopup) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // Cleanup function to remove class when component unmounts or popup closes
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showPopup]); 

    return (showPopup)?(
        <div className={'fixed z-40 bg-[#00000030] w-screen h-full items-center justify-center flex transition-opacity'}>
            <div className='absolute w-full h-full' onClick={hidePopup_func}></div>
            <div className='min-w-[240px] h-fit min-h-[320px] max-w-fit mb-[200px] mx-4 z-50'>
                <Cosmos_card>
                    {children}
                </Cosmos_card>
            </div>
        </div>
    ):(<div></div>)
}
