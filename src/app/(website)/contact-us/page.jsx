import React from 'react'
import Innerpage from '@/app/components/ui/Innerpage'
import Contact from './Contact/Contact'
import { getSiteData } from '@/lib/functions';

const page = async () => {
    const siteData = await getSiteData();
    return (
        <div>
            <Innerpage title={'Contact Us'} />
            <Contact siteData={siteData}/>
        </div>
    )
}

export default page
