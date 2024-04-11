
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateProfilePage = () => {
    const [avatar, setAvatar] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const userEmail = new URLSearchParams(location.search).get('email');

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
        setAvatarPreview(URL.createObjectURL(file));
    };

    const handleNext = async () => {

        navigate(`/what-next?email=${encodeURIComponent(userEmail)}`);
    }

    return (
        // <div className="flex flex-col items-center justify-center min-h-screen">
        //      <div className="place-content-start px-1 py-0">
        //          <h1 className="text-2xl font-bold text-pink-500">dribbble</h1>
        //      </div>
        //  <div className="max-w-5xl w-full px-8 py-12 ">
        //    <h1 className="text-5xl font-bold text-center">Welcome! Let's create your profile</h1>
        //       <p className="text-gray-600 text-center mb-">Let others get to know you better! You can do these later</p>

        // </div>
        //     <div className="">
        //         <div className="mb-6">
        //             <h2 className="text-xl font-bold mb-4">Add an Avatar</h2>
        //          <div className="flex items-center justify-center ">
        //              <div className="w-32 h-32 rounded-full border-2 border-gray-300 border-dashed flex items-center justify-center mx-left">
        //                 <img src={avatarPreview} alt="" className="w-32 h-32 rounded-full  flex items-center justify-center mx-left" /> 
        //              </div>
        //          </div>
        //             <input type="file" accept="image/*" onChange={handleAvatarChange} className='my-8' />
        //         </div>
        //         <div className="mb-8">
        //             <h2 className="text-lg font-semibold mb-4">Add your location</h2>
        //               <input
        //                 type="text"
        //                 placeholder="Enter a location"
        //                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        //               />
        //         </div>

        //         <button className="w- py-2 px-4 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition-colors duration-300" onClick={handleNext}>
        //             Next
        //         </button>
        //     </div>
        // </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="absolute top-5 left-2 px-4 py-2">
                <h1 className="text-2xl font-bold text-pink-500 font-cedarville" >dribbble</h1>
            </div>
            <div className="max-w-5xl w-full px-8 py-12 ">
                <h1 className="text-5xl font-bold">Welcome! Let's create your profile</h1>
                <p className="text-gray-600  mb- py-2">Let others get to know you better! You can do these later</p>
            </div>
            <div className="w-full max-w-5xl px-8  py-6">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Add an Avatar</h2>
                        <div className="flex items-center mb-6">
                            <div className="w-32 h-32 rounded-full border-2 border-gray-300 border-dashed flex items-center justify-center">
                                <img src={avatarPreview} alt="" className="w-full h-full rounded-full" />
                            </div>
                            <input type="file" accept="image/*" onChange={handleAvatarChange} className="ml-4" />
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">Add your location</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter a location"
                            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-pink-500"
                        />
                    </div>
                </div>
                <button className="w-64 py-2 px-4 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition-colors duration-300" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default CreateProfilePage;

