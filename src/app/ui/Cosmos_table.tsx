"use client";
import React, { ReactElement, useState } from 'react'
import Cosmos_input from './Cosmos_input';

interface I_Cosmos_table
{
    columns: string[],
    data?: any[],
    row: (item: any, key:any) => ReactElement,
    pagination?: Boolean,
    paginationCount?: Number,
    isScroll?: Boolean,
    title: String
}

type DataObject = {
    [key: string]: any;
};

function findKeyByValue(obj: DataObject, value: String): string | null {
    const searchValue = value.toLowerCase();

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (String(obj[key]).toLowerCase().includes(searchValue)) {
                return key;
            }
        }
    }
    return null;
}

export default function Cosmos_table({columns, data, row, pagination, paginationCount, isScroll, title}:I_Cosmos_table)
{
    const [searchKey, setSearchKey] = useState<String>("");

    const get_col_names = () => {
        const col_elements: ReactElement[] = columns?.map((elem, key)=>(
            <th className='text-zinc-400 font-medium text-[16px] py-2' key={key}>{elem}</th>
        ))

        return (
            <thead>
                <tr className='text-left border-b-[1px] border-zinc-600'>
                    {col_elements}
                    <th className='w-[24%] pr-4 py-2'><Cosmos_input placeholder='Search' setValue={(e)=>{setSearchKey(e)}} /></th>
                </tr>
            </thead>
        )
    }

    const get_table = () => {
        if(pagination){

        }
        const row_elements: ReactElement[] = data?.map((elem:Object, index) => {
            if(searchKey === "")
            {
                return row(elem, index);
            }
            else
            {
                if(findKeyByValue(elem, searchKey) !== null)
                {
                    return row(elem, index);
                }else{return(<></>)}
            }
        }) ?? [];
        return (
            <table className='w-full'>
                {get_col_names()}
                <tbody>
                    {row_elements}
                </tbody>
            </table>
        );
    };

    return (
        <div className='w-full'>
            <p className='text-[18px] text-black dark:text-white font-medium mb-4'>{title}</p>
            <div className='w-full min-w-[200px] h-fit max-h-full min-h-[120px] text-black dark:text-white overflow-y-scroll'>
                <div className='px-4'>
                    {get_table()}
                </div>
            </div>
        </div>
    )
}
