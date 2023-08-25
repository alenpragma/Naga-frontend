
import Heading from "../shared/Heading";
import { useForm } from "react-hook-form";
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'



const Contact = () => {

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = value => {
        setValue(value)
      }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='bg-primary w-full overflow-hidden'>
            <div>
                <Heading heading="Contact Us" title="Best Crypto and Forex Trading Platform" />
            </div>
            <div className="max-w-7xl mx-auto lg:flex text-white">
                <div className="lg:w-4/12 bg-[#0E69C6] p-10 m-5 space-y-10 rounded">
                    <h2 className="font-bold text-3xl">Contact Business Solution Selas</h2>
                    <p>Already a Customer or need help with a billing issu? Contact Us</p>
                    <p>Email: nagatrade1000@gmail.com</p>

                </div>
                <div className="lg:w-8/12 p-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="lg:flex justify-start gap-5 mb-5">
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="">First Name</span>
                                </label>
                                <input className="w-full p-2 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("firstname", { required: true })} placeholder="First Name" />
                            </div>
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="">Last Name</span>
                                </label>
                                <input className="w-full p-2 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("lasttname", { required: true })} placeholder="Last Name" />
                            </div>

                        </div>
                        <div className="lg:flex justify-start gap-5 mb-5">
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input className="w-full p-2 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("email", { required: true })} placeholder="Eamil Address" />
                            </div>
                            <div className="lg:w-1/2">
                                <label className="label">
                                    <span className="">Phone Number</span>
                                </label>
                                <Select type className="w-full outline outline-1 outline-[#335560] rounded-md text-black" options={options} value={value} onChange={changeHandler} placeholder="Select Your Country"/>
                                {/* <input className="w-full p-2 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("phone", { required: true })} placeholder="Phone Number" /> */}
                            </div>
                            

                            
                        </div>
                        <div>
                        <div className="w-full">
                                <label className="label">
                                    <span className="">Message</span>
                                </label>
                                <textarea className="p-2 rounded outline outline-1 outline-[#335560] h-24 w-full text-black" {...register("message", { required: true })} placeholder="Message"></textarea>
                            </div>
                            
                        </div>

                        <input className="w-full py-2 font-bold bg-[#0E69C6] rounded mt-4 text-white" type="submit" value="Submit Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;


// <div className='bg-primary w-full overflow-hidden'>
// <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
//     <div>
        // <div>
        //     <Heading heading="Contact Us" title="Best Crypto and Forex Trading Platform" />
        // </div>
        // <div className="max-w-7xl mx-auto bg-slate-200 lg:flex">
        //     <div className="w-1/4 bg-slate-100 p-5 m-5">
        //         <p>Contact Business Solution Selas</p>

        //     </div>
        //     <div className="w-3/4 p-10">
        //         <form onSubmit={handleSubmit(onSubmit)} className="">
        //             <div className="mb-5">
        //                 <h2 className="text-2xl font-bold">Get In touch</h2>
        //                 <p>We are here for you. How we can help?</p>
        //             </div>
        //             <div className="flex justify-start gap-5 mb-5">
        //                 <input className="w-1/2 p-1 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("firstname", { required: true })} placeholder="First Name" />
        //                 <input className="w-1/2 p-1 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("lasttname", { required: true })} placeholder="Last Name" />
        //             </div>
        //             <div className="flex justify-start gap-5 mb-5">
        //                 <input className="w-1/2 p-1 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("email", { required: true })} placeholder="Eamil Address" />
        //                 <input className="w-1/2 p-1 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("phone", { required: true })} placeholder="Phone Number" />
        //             </div>
        //             <div>
        //                 <textarea className="p-2 rounded outline outline-1 outline-[#335560] h-24 w-full text-black" {...register("message", { required: true })} placeholder="Message"></textarea>
        //             </div>

        //             <input className="w-full py-2 font-bold bg-[#0E69C6] rounded mt-4 text-white" type="submit" value="Submit Now" />
        //         </form>
        //     </div>
        // </div>
//     </div>
// </div>
// </div>