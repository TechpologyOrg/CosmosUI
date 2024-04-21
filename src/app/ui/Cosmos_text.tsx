import React from 'react'

interface I_Cosmos_text
{
    children?: React.ReactElement | React.ReactElement[]
}

export default function Cosmos_text({children}:I_Cosmos_text) {
  return (
    <div className='text-[14px] font-medium text-zinc-400 dark:text-zinc-500'>{children}</div>
  )
}
