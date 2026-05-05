import React from 'react'
import BlogDetails from './BlogDetails/BlogDetails'
import Innerpage from '@/app/components/ui/Innerpage'


const page = () => {
    return (
        <div>
            <Innerpage title={'Blog Details'} />
            <BlogDetails />
        </div>
    )
}

export default page
