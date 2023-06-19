import React from 'react'

export default function Nav() {
    return (
        <nav className="container relative mx-auto p-6 divide-x" >
            <div className="flex items-center justify-between">
                <div className='flex items-center justify-between'>
                    {/* <h1 className="text-base text-secondaryAsh pr-10">Harrison Ikpefua</h1> */}
                    <a href="" className="text-base text-secondaryAsh hover:text-secondaryWhite pr-12">Harrison Ikpefua</a>
                    <div className="hidden md:flex space-x-6">
                        <a href="" className="text-base text-secondaryAsh hover:text-secondaryWhite">_hello</a>
                        <a href="" className="text-base text-secondaryAsh hover:text-secondaryWhite">_about.me</a>
                        <a href="" className="text-base text-secondaryAsh hover:text-secondaryWhite">projects</a>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <a href="" className="text-base text-secondaryAsh hover:text-secondaryWhite">_contact.me</a>
                </div>
            </div>
        </nav>
    )
}