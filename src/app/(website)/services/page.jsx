import React from 'react'
import Innerpage from '@/app/components/ui/Innerpage'
import Services from './Services/Services'
import { services } from '@/data/servicesData'

const page = () => {
    return (
        <div>
            <Innerpage title={'Services'} />
            <Services service={services}/>
        </div>
    )
}

export default page
