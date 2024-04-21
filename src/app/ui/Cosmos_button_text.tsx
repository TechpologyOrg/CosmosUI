import React from 'react'

interface I_Cosmos_button_text
{
    children?: React.ReactElement | React.ReactElement[]
}

export default function Cosmos_button_text({children}:I_Cosmos_button_text) {
  return (
    <div className='text-[16px] dark:text-white font-medium select-none hover:text-zinc-600 hover:dark:text-zinc-300 cursor-pointer'>
        {children}
    </div>
  )
}
