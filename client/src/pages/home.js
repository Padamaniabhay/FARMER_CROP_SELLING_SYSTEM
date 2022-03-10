import React from "react";


//component
import HomeCarousal from "../Components/HomeCarousal";
import HomeCategory from "../Components/HomeCategory";


const Home = () => {

    return <>
        <div className="bg-gray-100">
            <div className="w-full h-screen"><HomeCarousal /></div>
            <HomeCategory />
            <div className="p-10 bg-slate-200  ">
                <div className="text-5xl   text-slate-700 font-semibold  text-center">
                    COMPREHENSIVE SERVICES
                </div>
                <div className="py-10   px-28 text-center text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nunc non arcu aliquet sollicitudin. Sed elementum placerat ex. Donec a lectus vel lectus faucibus mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nunc non arcu aliquet sollicitudin. Sed elementum placerat ex. Donec a lectus vel lectus faucibus mattis
                </div>
                <div className="flex mx-36 py-3" >
                    <div className="w-1/3  ">
                        <div className="text-xl font-medium text-slate-500 text-center">
                            Gardening Kits
                        </div>
                        <img src="https://agroicapp.herokuapp.com/images/services/gardening.svg"
                            className="m-auto  my-8 h-52 w-52"  />
                        <div className="text-slate-500 text-center m-5">
                            We provides all of the gardening related products i.e seeds, pestisides and heavy machine.
                        </div>
                    </div>

                    <div className="w-1/3   ">
                        <div className="text-xl font-medium text-slate-500 text-center">
                            Supplier
                        </div>
                        <img src="https://agroicapp.herokuapp.com/images/services/supplier.svg"
                            className="my-8 m-auto h-52 w-52" />
                             <div className="text-slate-500 text-center m-5">
                             Now you produce. And we are here to sell your product. Just list your sell, and get proper pay for it.
                        </div>
                    </div>

                    <div className="w-1/3  ">
                        <div className="text-xl font-medium text-slate-500 text-center">
                        Consumer
                        </div>
                        
                        <img src="https://agroicapp.herokuapp.com/images/services/consumer.svg"
                            className="m-auto my-8 h-52 w-52" />
                             <div className="text-slate-500 text-center m-5">
                             Why to visit Super Store and Pay High? Order all products and get deliver at your doorstep.
                        </div>
                    </div>

                </div>


            </div>
        </div>

    </>
}

export default Home;