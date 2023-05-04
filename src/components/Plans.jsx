import React from 'react'
import { PlanBox } from '.';

const Plans = () => {
    return (
        <div className='w-full min-h-[90vh] bg-[#062233] px-10 md:px-0 flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center md:flex-row flex-wrap container mx-auto gap-5 w-full'>
                {/* Box 1 Change the height and width */}
                <PlanBox light={true} />
                <PlanBox />
                <PlanBox light={true} />
            </div>
        </div>
    )
}


export default Plans;


