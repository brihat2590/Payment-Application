import NavIcon from "../icon/navicon";

export default function Navbar(){
    return(
        <div className="w-full border shadow-sm flex items-center justify-between">
            <div className="flex justify-center items-center text-blue-600">
                <div className="m-3 p-3 text-2xl md:text-5xl sm:3xl font-bold tracking-tight">
                    Fone Pay

                </div>
                <div>
                    <NavIcon/>

                </div>

            </div>
            <div className="flex items-center">
                <div className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200 disabled:bg-gray-300 cursor-pointer p-2 m-2">
                    Signup

                </div>
                <div className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-200 disabled:bg-gray-300 cursor-pointer p-2 mr-4 mt-2 mb-2 ml-2">
                    SignIn

                </div>
            </div>
        </div>
    )
}