"use client";
import React from "react"

interface I_Cosmos_card
{
  children?: React.ReactElement | React.ReactElement[]
}

export default function Cosmos_card({children}:I_Cosmos_card) {
  return (
    <div className="min-h-[180px] h-full min-w-[140px] w-full rounded-xl bg-white dark:bg-zinc-900
     shadow-md shadow-[#FFFFFF08] outline outline-offset-1 outline-1 -inset-px outline-[#00000004] dark:outline-[#FFFFFF14] border-zinc-900 dark:border-zinc-200">
      {children}
    </div>
  )
}
