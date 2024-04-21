import React from 'react'

interface I_Cosmos_title
{
    children?: React.ReactElement | React.ReactElement[]
}

export default function Cosmos_title({children}:I_Cosmos_title) {
  return (
    <div className='text-[18px] font-medium dark:text-white text-black select-none'>{children}</div>
  )
}
