import React from 'react'
import Innerpage from '@/app/components/ui/Innerpage'
import Blogs from './Blogs/Blogs'


const page = () => {
    return (
        <div>
            <Innerpage title={'Blogs'} />
            <Blogs />
        </div>
    )
}

export default page
