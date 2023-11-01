import Link from 'next/link';
import React from 'react'

const hotQuestions = [
    {
        _id: 1, title: 'How do I use express as a custom server in NextJS'
    },
    {
        _id: 2, title: 'How do I use express as a custom server in NextJS'
    },
    {
        _id: 3, title: 'How do I use express as a custom server in NextJS'
    },
    {
        _id: 4, title: 'How do I use express as a custom server in NextJS'
    },
];

const RightSidebar = () => {

    return (
        <section className='background-light900_dark200
        light-border custom-scrollbar sticky right-0 top-0 flex h-screen
        flex-col overflow-y-auto border-l p-6
        pt-36 shadow-light-300 dark:shadow-none max-xl:hidden
        '>
            <div className="">
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
            </div>
            <div className="mt-7 flex w-full flex-col gap-[30]">
                {hotQuestions.map((question) => (
                    <Link
                        href={ }
                ))}
            </div>
        </section>
    )
}

export default RightSidebar