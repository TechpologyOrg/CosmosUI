"use client";
import React from 'react'
import Image from 'next/image'
import { MdLock } from "react-icons/md";
import Cosmos_message_pill from './Cosmos_message_pill';

export default function Navbar() {
  return (
    <div className="min-h-[80px] flex px-4 md:px-12 lg:px-0 lg:grid lg:grid-cols-5">
        <div className='flex w-full lg:col-span-3 lg:col-start-2 items-center px-2 justify-between'>
            <div className='flex items-center'>
            <Image src="/LogoTP_Light.svg" width={40} height={40} alt='Techpology' className='hidden dark:block  mr-6' />
            <Image src="/LogoTP_Dark.svg" width={40} height={40} alt='Techpology'  className='block  dark:hidden mr-6' />
            <Cosmos_message_pill icon={<MdLock size={12} className='text-black dark:text-white'/>}
                                message='Development preview'></Cosmos_message_pill>
            </div>
            <div className='flex items-center pr-4'>
                <p className='font-medium text-black dark:text-white'>Docs</p>
            </div>
        </div>
    </div>
  )
}
