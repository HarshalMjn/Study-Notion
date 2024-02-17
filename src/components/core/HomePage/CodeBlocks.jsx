import React from 'react'
import CTAButton from "../HomePage/Button"

import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, codeColor , location, 
}) => {
  return (
    <div className={`flex lg:flex-row flex-col ${position}   my-20 justify-between gap-10 h-fit`}>
      
    {/*Section 1*/}
    <div className='lg:w-[50%] w-[100%] flex flex-col gap-8'>
        {heading}
        <div className='text-richblack-300 font-bold '>
            {subheading}
        </div>

        <div className='flex gap-7 mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <FaArrowRight/>
                </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
                    {ctabtn2.btnText}
            </CTAButton>
        </div>


    </div>

     {/*Section 2*/}
     <div className='relative flex  h-full flex-row text-base w-[90%] py-4 border-[1px] border-richblack-600 rounded-lg lg:w-[470px] max-h-full'> 
        {/* BG gradient*/}
        <div className={`absolute w-[340px] h-[230px] rounded-full blur-[34px] left-[calc(50% - 372.95px/2 - 76.53px)] top-[calc(50% - 257.05px/2 - 47.47px)] ${location ? "bg-gradient-to-br from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF] opacity-[0.2]" : "bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] opacity-[0.2]"}`}></div>

        <div className='text-center  w-[15%]  flex flex-col lg:w-[10%] text-richblack-400 font-inter font-bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            
            
        </div>

        <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono  ${codeColor} pr-2`}>
           <TypeAnimation
            sequence={[codeblock, 2000," "]}
            repeat={Infinity}
            cursor={true}
            
           
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"block",
                    
                    
                    
                    
                }
            }
            omitDeletionAnimation={true}
           />
        </div>

     </div>


    </div>
  )
}

export default CodeBlocks
