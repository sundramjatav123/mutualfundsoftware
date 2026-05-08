import React from 'react'
import BlogDetails from './BlogDetails/BlogDetails'
import Innerpage from '@/app/components/ui/Innerpage'
import { getBlogsSlugData } from '@/lib/functions'


const page = async ({params}) => {
    const { slug } = await params;
    const blog = await getBlogsSlugData(slug)
    
    return (
        <div>
            <Innerpage title={'Blog Details'} />
            <BlogDetails blog={blog}/>
        </div>
    )
}

export default page;
