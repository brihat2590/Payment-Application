import image from "./image.png"
export default function HeroSection(){
    return(
        <div className=" h-screen w-full flex items-center justify-center">
            <div className="text-4xl  bg-gradient-to-b from-blue-600 to-blue-800 bg-clip-text text-transparent w-auto ">
                <div className="flex flex-col   h-screen  ">
                    <div className="mt-10 p-3">
                        <h2 className="text-7xl tracking-tight antialiased font-bold p-2 mt-5 ">Online</h2>
                        <h2 className="text-7xl tracking-tight antialiased font-bold p-2 mt-5">Payment</h2>
                    </div>
                    <div>
                    <p className=" p-2 text-sm font-bold">this is a payment app.
                        Payment app where you can send and receive money given an initial dummy balance.
                    </p>
                    </div>
                    <div><button className="bg-blue-500 text-white font-semibold py-3 px-6  shadow-lg hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200 disabled:bg-gray-300 cursor-pointer p-2 m-3 rounded-2xl">Learn more</button></div>
                </div>
                
                

            </div>
            <div className="">
                <div><img src={image} alt="Image" className="inline-block h-[80vh] "></img></div>

            </div>

        </div>
    )
}