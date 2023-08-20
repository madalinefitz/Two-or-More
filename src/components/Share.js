import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";

export default function Share () {

    const formSchema = yup.object().shape({
        firstName: yup.string().required("Tell us your first name!"),
        lastInitial: yup.string().max(1).required("Just the first letter, please!"),
        story: yup.string().required("What would you like to share with us?")
    })

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastInitial: "",
            story: ""
        },
        validationSchema:formSchema,
        onSubmit: (values) => {
            fetch("https://twoormore-info-service.azurewebsites.net/stories", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify(values)
            })
                .then(handleResponse)
        }
    })

    

    const handleResponse = (r) => {
        if (r.ok) {
            console.log("STATUS: ", r.status)
            r.json().then(data => {
                console.log(data)
            })
        }
        else {
            console.log("STATUS: ", r.status, r.message)
        }
    }


    return(
        <div>
        <div className="flex-col py-28 pl-28 pr-16 text-[#E8E4DE] bg-[#292929] bg-cover h-full">
            <div className="text-3xl lg:text-7xl text-right lg:ml-20 lg:p-8 p-4">
                We'd love to hear more about you! This is a safe space to share your story. 
                Your experiences. 
                Your history. 
                Your journey.
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="animate-bounce w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg> */}
        </div>
        <div className="flex">
            <div className="text-[#292929] text-5xl md:text-8xl w-2/3 p-10">
            <Typewriter
                options={{
                strings: ['Tell your story.'],
                autoStart: true,
                loop: true,
                }}
                />
            </div>
                
        </div>
            <div className="flex justify-end p-5 pb-10">
                <form onSubmit={formik.handleSubmit} className="p-10 sm:w-full ">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/2">
                        <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            First Name
                        </label>
                        </div>
                        <div className="md:w-1/2">
                        <input onChange={formik.handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9DC08B]" id="firstName" type="text" value={formik.values.firstName}/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/2">
                        <label className="block  font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Last Initial
                        </label>
                        </div>
                        <div className="md:w-1/2">
                        <input onChange={formik.handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9DC08B]" id="lastInitial" type="text" value={formik.values.lastInitial}/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/2">
                        <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                            Share your Story
                        </label>
                        </div>
                        <div className="md:w-1/2">
                        <textarea onChange={formik.handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9DC08B]" id="story" type="text" placeholder="..." value={formik.values.story}/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/2"></div>
                        <div className="md:w-1/2">
                        <button className="shadow bg-[#9DC08B] hover:bg-[#9DC08B]focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Share
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        
        </div>
    )
}