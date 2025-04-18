"use client"
import React from 'react';
import { useState } from 'react';
import { Coffee } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
function RightSide() {
    return (
        <div className="border-[1px] rounded-lg w-[682px]">
            <div className='flex flex-col gap-[32px] p-[24px]'>
                <div className='flex flex-col gap-[24px]'>
                    <p className='text-[24px] font-[600] line-height-[32px]'>Buy a Coffee</p>
                    <div className='flex flex-col gap-[8px]'>
                        <p>Select amount:</p>
                        <div className='flex gap-[8px]'>
                            <Button className='flex gap-[5px] h-[40px] w-[72px]'><Coffee />$1</Button>
                            <Button className='flex gap-[5px] h-[40px] w-[72px]'><Coffee />$2</Button>
                            <Button className='flex gap-[5px] h-[40px] w-[72px]'><Coffee />$5</Button>
                            <Button className='flex gap-[5px] h-[40px] w-[72px]'><Coffee />$10</Button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex flex-col gap-[8px]'>
                        <p>Enter BuyMeCoffee or social acount URL:</p>
                        <Input className=' h-[40px]' placeholder="buymeacoffee.com/" />
                    </div>
                    <div className='flex flex-col gap-[8px]'>
                        <p>Special message:</p>
                        <Input className='h-[131px]' placeholder='Please write your message here' />
                    </div>
                </div>
                <div>
                    <Button className='w-[100%]'>Support</Button>
                </div>
            </div>
        </div>
    )
}
export default RightSide;