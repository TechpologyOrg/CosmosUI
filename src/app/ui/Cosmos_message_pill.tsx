"use client";
import React from 'react';

interface I_Cosmos_message_pill
{
    icon: React.ReactElement,
    message: string
}

export default function Cosmos_message_pill({icon, message}:I_Cosmos_message_pill) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-dashed border-zinc-300 py-px pl-1 pr-3 
    text-xs/6 font-medium text-zinc-900 dark:border-white/20 dark:text-white">
        <div className="rounded-full bg-zinc-100 dark:bg-zinc-700 ring-1 ring-zinc-200 dark:ring-zinc-600 shadow-sm 
        w-[18px] h-[18px] flex items-center justify-center bg-center bg-cover">
            {icon}
        </div>
        <p>{message}</p>
    </div>
  )
}
