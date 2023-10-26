import {Link} from 'react-router-dom'



function NavBar(){
    return(
        <nav className="bg-[#FDFDFD] bg-no-repeat bg-cover hidden sm:block pt-2">
            
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="bg-[#525252] hover:bg-[#E8E4DE] hover:text-[#525252] text-white font-bold py-3 px-4">
                        <Link to='/connect'>GET CONNECTED</Link>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 divide-x-[2px] divide-[#292929]">
                                <div className="text-[#292929]-300 hover:bg-[#E8E4DE] px-3 py-2 text-lg font-medium">
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </div>
                                
                                <div className="text-[#292929]-300 hover:bg-[#E8E4DE] px-3 py-2 text-lg font-medium">
                                    <Link to='aboutus' >
                                        About Us
                                    </Link>
                                </div>
                                <div className="text-[#292929]-300 hover:bg-[#E8E4DE] px-3 py-2 text-lg font-medium">
                                    <Link to='share' >
                                        Share
                                    </Link>
                                </div>
                                <div className="text-[#292929]-300 hover:bg-[#E8E4DE] px-3 py-2 text-lg font-medium">
                                    <Link to="stories">
                                        Stories
                                    </Link>
                                </div>
                                <div className="text-[#292929]-300 hover:bg-[#E8E4DE] px-3 py-2 text-lg font-medium">
                                    <Link to="library">
                                        Library
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#525252] hover:bg-[#E8E4DE] hover:text-[#525252] text-white font-bold py-3 px-4 mr-0">
                        <Link to='https://donorbox.org/twoormore' target='_blank'>Donate Now</Link>
                    </div>
                </div>
            </div>
        </nav>
       
    )
}

export default NavBar