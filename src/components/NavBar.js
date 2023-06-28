import {NavLink} from 'react-router-dom'



function NavBar(){
    return(
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="text-gray-300 " >
                        TWO OR MORE
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 divide-x-4 divide-gray-300">
                                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    <NavLink to='/' exact='true'>
                                        Home
                                    </NavLink>
                                </div>
                                
                                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    <NavLink to='aboutus' exact='true' >
                                        About Us
                                    </NavLink>
                                </div>
                                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    <NavLink to='share' exact='true' >
                                        Share
                                    </NavLink>
                                </div>
                                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    <NavLink to="stories" exact='true'>
                                        Stories
                                    </NavLink>
                                </div>
                                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                    <NavLink to="library" exact='true'>
                                        Library
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            Donate Now
                        </button>
                    </div> */}
                </div>
            </div>
        </nav>
       
    )
}

export default NavBar