import Innerpage from '@/app/components/ui/Innerpage'
import React from 'react'
import ServiceDetails from './ServiceDetails/ServiceDetails'


const page = () => {
    return (
        <div>
            <Innerpage title={'Services Details'} />
            <ServiceDetails />
        </div>
    )
}

export default page
