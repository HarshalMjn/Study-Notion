import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from './Button'

import CompareImg from '../../../assets/Images/Compare_with_others.png'
import ProgressImg from '../../../assets/Images/Know_your_progress.png'
import PlanImg from '../../../assets/Images/Plan_your_lessons.png'


const LanguageSection = () => {
  return (
    <div className='mt-[90px] mb-32 ' >

        <div className='flex flex-col gap-5 items-center'>

        <div className='text-4xl font-semibold text-center'>
            <h1>Your swiss knife for</h1>

            <HighlightText  text={" learning any language"}/>
        </div>

        <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>


        <div className='flex lg:flex-row flex-col  lg:items-center lg:justify-center   mt-5'>
           <img src={ProgressImg} 
             alt = "KNowYourProgressImage"
             className='object-contain -mr-32 '
            />

            <img src={CompareImg} 
              alt = "KNowYourProgressImage"
              className='object-contain'
            />

            <img src={PlanImg} 
             alt = "KNowYourProgressImage"
             className='object-contain lg:-ml-36'
            />


        </div>


        <div className='w-fit'>
            <CTAButton active={true} linkto={"/singup"}>
                <div>
                    Leran more 
                </div>

            </CTAButton>
            

        </div>





        </div>

       


    </div>
  )
}

export default LanguageSection