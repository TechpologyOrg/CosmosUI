"use client";
import React, { ReactElement, useState } from 'react'

import Navbar from './ui/Navbar';
import Cosmos_card from "./ui/Cosmos_card";
import Cosmos_button from './ui/Cosmos_button';
import Cosmos_button_outline from './ui/Cosmos_button_outline';
import Cosmos_popup from './ui/Cosmos_popup';
import Cosmos_text from './ui/Cosmos_text';
import Cosmos_title from './ui/Cosmos_title';
import Cosmos_input from './ui/Cosmos_input';
import Cosmos_selection_input from './ui/Cosmos_selection_input';
import Cosmos_button_text from './ui/Cosmos_button_text';
import Cosmos_table from './ui/Cosmos_table';

import { MdMoreVert } from "react-icons/md";
import Cosmos_select_icon from './ui/Cosmos_select_icon';
import Cosmos_toggle from './ui/Cosmos_toggle';

export interface test_row_json
{
  ID:Number,
  Name:String,
  Email:String
  Verified:String
}

function Test_row(_data?:test_row_json, key?:number):ReactElement
{
  return(
    <tr className='border-b-[1px] border-zinc-600 border-opacity-40' key={key}>
      <td className='py-3 text-zinc-400'>{(_data !== undefined)?(_data.ID.toString()):("")}</td>
      <td className='py-3'>{(_data !== undefined)?(_data.Name):("")}</td>
      <td className='py-3'>{(_data !== undefined)?(_data.Email):("")}</td>
      <td className='py-3'>{(_data !== undefined)?(_data.Verified):("")}</td>
      <td>
        <Cosmos_select_icon>
          <p className='text-[14px] font-medium'>Edit</p>
          <p className='text-[14px] font-medium'>Remove</p>
        </Cosmos_select_icon>
      </td>
    </tr>
  )
}

export default function Home() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const showPopup_func = () =>
  {
    setShowPopup(true);
  };

  const fake_table_data: test_row_json[]=
  [
    {"ID": 0, "Name": "Ali", "Email": "ali@xyz.com", "Verified": "true"},
    {"ID": 1, "Name": "Bob", "Email": "bob@xyz.com", "Verified": "true"},
    {"ID": 2, "Name": "Cam", "Email": "cam@xyz.com", "Verified": "true"},
    {"ID": 3, "Name": "Doc", "Email": "doc@xyz.com", "Verified": "true"},
    {"ID": 4, "Name": "Ela", "Email": "ela@xyz.com", "Verified": "true"},
    {"ID": 4, "Name": "Ela", "Email": "ela@xyz.com", "Verified": "true"},
    {"ID": 4, "Name": "Ela", "Email": "ela@xyz.com", "Verified": "true"},
    {"ID": 4, "Name": "Ela", "Email": "ela@xyz.com", "Verified": "true"},
    {"ID": 4, "Name": "Ela", "Email": "ela@xyz.com", "Verified": "true"},
    {"ID": 4, "Name": "Ela", "Email": "ela@xyz.com", "Verified": "true"},
    {"ID": 4, "Name": "Ela", "Email": "ela@xyz.com", "Verified": "true"},
    {"ID": 4, "Name": "Ela", "Email": "ela@xyz.com", "Verified": "true"},
    {"ID": 4, "Name": "Ela", "Email": "ela@xyz.com", "Verified": "true"},
    {"ID": 4, "Name": "Ela", "Email": "ela@xyz.com", "Verified": "true"}
  ]

  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar/>

      <Cosmos_popup showPopup={showPopup} hidePopup_func={()=>{setShowPopup(false)}}>
        <div className='flex flex-col w-fit h-fit max-w-[500px] max-h-[320px] justify-center px-10 py-8 gap-2'>
          <Cosmos_title>
            <p>Refund payment</p>
          </Cosmos_title>
          <Cosmos_text>
            <p>The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.</p>
          </Cosmos_text>

          <div className='mt-4 w-full gap-3 flex flex-col mb-6'>
            <Cosmos_title><p>Amount</p></Cosmos_title>
            <Cosmos_input setValue={(val)=>{setAmount(val)}} placeholder='$0.00' />
          </div>

          <div className='flex w-full justify-end items-center gap-4'>
            <Cosmos_button_outline trigger={()=>{setShowPopup(false)}}><p>Cancel</p></Cosmos_button_outline>
            <Cosmos_button><p>Refund</p></Cosmos_button>
          </div>
        </div>
      </Cosmos_popup>

      <div className='flex flex-wrap flex-row justify-center items-center w-full lg:px-12 gap-14 md:gap-4'>
        <div className='w-full md:w-[45%] lg:w-[32%] xl:w-[30%] h-[140px] md:h-[280px] md:px-0 px-4'>
          <Cosmos_card>
            <div className='flex w-full h-full items-center justify-center gap-6'>
              <Cosmos_button trigger={()=>{}}><p>Button</p></Cosmos_button>
              <Cosmos_button_outline><p>Button</p></Cosmos_button_outline>
            </div>
          </Cosmos_card>
        </div>
        
        <div className='w-full md:w-[45%] lg:w-[32%] xl:w-[30%] h-[140px] md:h-[280px] md:px-0 px-4'>
          <Cosmos_card>
            <div className='flex w-full h-full items-center justify-center gap-6'>
              <Cosmos_button trigger={showPopup_func}><p>Open dialog</p></Cosmos_button>
            </div>
          </Cosmos_card>
        </div>
        
        <div className='w-full md:w-[90%] lg:w-[32%] xl:w-[30%] h-[280px] md:px-0 px-4'>
          <Cosmos_card>
            <div className='flex justify-center w-full h-full flex-col px-20 md:px-8 lg:px-14 xl:px-20 gap-4'>
                <Cosmos_title><p>Country</p></Cosmos_title>

                <Cosmos_selection_input>
                  <div className='flex w-full gap-8 items-center'>
                    <Cosmos_title><p>A</p></Cosmos_title>
                    <p>America</p>
                  </div>

                  <div className='flex w-full gap-8 items-center'>
                    <Cosmos_title><p>B</p></Cosmos_title>
                    <p>Brittain</p>
                  </div>

                  <div className='flex w-full gap-8 items-center'>
                    <Cosmos_title><p>C</p></Cosmos_title>
                    <p>Columbia</p>
                  </div>

                  <div className='flex w-full gap-8 items-center'>
                    <Cosmos_title><p>D</p></Cosmos_title>
                    <p>Denmark</p>
                  </div>

                  <div className='flex w-full gap-8 items-center'>
                    <Cosmos_title><p>E</p></Cosmos_title>
                    <p>Estland</p>
                  </div>

                  <div className='flex w-full gap-8 items-center'>
                    <Cosmos_title><p>F</p></Cosmos_title>
                    <p>France</p>
                  </div>

                  <div className='flex w-full gap-8 items-center'>
                    <Cosmos_title><p>G</p></Cosmos_title>
                    <p>Germany</p>
                  </div>
                </Cosmos_selection_input>

                <Cosmos_text><p>We currently only ship to North America.</p></Cosmos_text>
            </div>
          </Cosmos_card>
        </div>
      </div>

      <div className='flex flex-wrap flex-row justify-center items-center w-full md:px-12 lg:px-4 xl:px-10 gap-8 md:gap-4 mt-5'>

        <div className='w-full lg:w-[32%] xl:w-[30%] h-fit md:h-[550px] md:px-0 px-4'>
          <Cosmos_card>
            <div className='w-full h-full px-12 py-12 flex flex-col'>
              <Cosmos_title><p className='text-[24px]'>Sign in</p></Cosmos_title>

              <div className='flex flex-col gap-4 mt-6'>
                <Cosmos_text><p className='text-[16px] text-black dark:text-white select-none'>Username</p></Cosmos_text>
                <Cosmos_input setValue={()=>{}} placeholder='' />
              </div>

              <div className='flex flex-col gap-4 mt-6'>
              <Cosmos_text><p className='text-[16px] text-black dark:text-white select-none'>Password</p></Cosmos_text>
                <Cosmos_input setValue={()=>{}} placeholder='' />
              </div>

              <div className='flex w-full items-center justify-between mt-4'>
                <Cosmos_toggle setState={()=>{setRememberMe(!rememberMe)}} value={rememberMe} title="Remember me"/>
                <Cosmos_button_text><p>Forgot password?</p></Cosmos_button_text>
              </div>

              <div className='w-full mt-6'>
                <Cosmos_button isWide={true} trigger={()=>{}}><p>Get started</p></Cosmos_button>
              </div>

              <div className='w-full flex mt-4 items-center gap-2'>
                <Cosmos_text><p className='text-[16px]'>{"Don't have an account?"}</p></Cosmos_text>
                <Cosmos_button_text><p>Sign up</p></Cosmos_button_text>
              </div>

            </div>
          </Cosmos_card>
        </div>

        <div className='w-full lg:w-[60%] xl:w-[60%] h-fit md:h-[550px] md:px-0 px-4 mb-8 md:mb-0'>
          <Cosmos_card>
            <div className='flex pt-12 justify-center w-full h-full px-12 pb-20 md:pb-18'>
              <Cosmos_table title="Accounts" columns={['ID', 'Name', 'Email', 'Verified']} row={Test_row} data={fake_table_data} />
            </div>
          </Cosmos_card>
        </div>

      </div>

    </div>
  );
}

/* 
  Table architecture:
    - Create a row component and expect an array of any as an argument. That argument must be called data.
    - The table is a card with a few features. You must pass a {columns} argument. The columns argument must
      be an array of strings. You can set if pagination is true, its false by default. You can assign a pagination
      value that sets how many rows per page should be visible. You can also assign a scrollable value that
      sets the height of the card to a fixed height, and enables overflow-y. Overflow-x is always enabled.
      You have to pass the rows of data as well as a prop to enable rendering.
 */
