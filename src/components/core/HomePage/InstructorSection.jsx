import React from 'react'
import IntructorImg from '../../..//assets/Images/Instructor.png'
import HighlightText from './HighlightText'
import CTAbutton from './Button'
import { FaArrowRight } from 'react-icons/fa'


const InstructorSection = () => {
  return (
    <div className='mt-16 mb-16 lg:ml-20 w-[100%] mx-auto'>


      <div className=' flex lg:flex-row  flex-col items-center justify-between'>

        <div className='lg:w-[35%] w-[75%]'> 
            <img src={IntructorImg} 
            alt='' 
            className='lg:ml-20 rounded-sm lg:shadow-[-20px_20px_0_0] shadow-white '/>
            
        </div>

        <div className='lg:w-[50%] flex flex-col w-[90%] mt-9 gap-10'>
            <div className='text-4xl font-semobold w-[50%] text-white'>
                Become an
                <HighlightText text={"Instructor"} />
            </div>

            <p className='font-medium text-[16px] w-[80%] text-richblack-300'> Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
            <div className='w-fit ml-50'>
               <CTAbutton active={true} linkto={"/singup"}>
                <div className=' flex felx-row gap-2 items-center'>
                  Start Teaching Today
                  <FaArrowRight />
                </div>
               </CTAbutton>
            </div>


        </div>




      </div>

      





    </div>
  )
}

export default InstructorSection