import React from 'react'
import About from './About/About'
import Innerpage from '@/app/components/ui/Innerpage'
import Mission from './About/Mission'
import FAQ from './About/FAQ'
import Benefits from './About/Benefits'
import Founder from './About/Founder'

const page = () => {
    return (
        <div>
            <Innerpage title={'About Us'} />
            <About />
            {/* <Founder /> */}
            <Mission />
            <Benefits />
        </div>
    )
}

export default page
