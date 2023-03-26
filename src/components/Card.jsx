import React from 'react';
import { BsArrowsAngleExpand } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocalGroceryStore } from "react-icons/md"

export const Card = (props) => {

    return (
        <div className='w-[400px] md:w-[240px] h-[360px]md:h-[449px] border-2 bg-gray-100'>
            {/* Card image */}
            <div className=" w-[210px] h-[360px] flex items-center ml-[80px] md:ml-3 relative group ">
                <img src={props.img} alt="" />
                <div className="w-[200px] h-8 absolute left-3  inset-x-0 bottom-0 group-hover:mb-[100px] md:mb-12 group-hover:duration-1000 md:duration-1000 ">
                    <ul className='h-8 flex justify-around items-center opacity-0 hover:opacity-100 '>
                        <li className='bg-white w-[45px] h-[45px] border rounded-full flex items-center justify-center'><a className=' text-[20px] hover:rotate-180 duration-1000' href="#"><BsArrowsAngleExpand /></a></li>
                        <li className='bg-white w-[45px] h-[45px] border rounded-full flex items-center justify-center'><a className='text-3xl hover:rotate-180 duration-1000 ' href="#"><AiOutlineHeart /></a></li>
                        <li className='bg-white w-[45px] h-[45px] border rounded-full flex items-center justify-center '><a className='text-3xl hover:rotate-180 duration-1000' href="#"><MdOutlineLocalGroceryStore /></a></li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-[210px] h-[89px] flex flex-col justify-center items-center">
                <h4>{props.title}</h4>
                <span>{props.description}</span>
                <p>{props.price} <span>$</span></p>
            </div>

        </div>
    )
}

export default Card
