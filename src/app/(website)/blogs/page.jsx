import React from 'react'
import Innerpage from '@/app/components/ui/Innerpage'
import Blogs from './Blogs/Blogs'
import { getBlogsData } from '@/lib/functions';


const page = async () => {
    const blogs = await getBlogsData();
    return (
        <div>
            <Innerpage title={'Blogs'} />
            <Blogs blogs={blogs} />
        </div>
    )
}

export default page
