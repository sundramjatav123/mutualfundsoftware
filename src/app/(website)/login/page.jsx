import React from 'react'
import Innerpage from '@/app/components/ui/Innerpage'
import LoginForm from './LoginForm/LoginForm'

const page = () => {
    return (
        <div>
            <Innerpage title={'Login'} />
            <LoginForm />
        </div>
    )
}

export default page
