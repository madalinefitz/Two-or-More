import {useState, useEffect} from "react"
import venn from './logoHandwritten.png'
import mission from '../missionText.png';



function Home(){
    
    return (
        <div className="">
            <div className="flex">
                
                
                    {/* <div className=""><img alt='venn diagram' src={venn} className="venn" style={{}}/></div> */}
                    <div className="container mx-auto px-5 py-2 lg:px-5 lg:pt-10">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src={"https://images.unsplash.com/photo-1549144277-47d96d572dc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-contain object-center"
                                src={venn} />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-contain object-center"
                                src={mission}
                                style={{height: "80vh", width: "80vh"}}  />
                            </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                            <div className="w-full p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1613316122132-81de453d8610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                style={{height: "80vh", width: "80vh"}} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1621341104121-d610c0dc4228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="https://images.unsplash.com/photo-1579736170791-e7ce1a38e203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                            </div>
                            </div>
                        </div>
                        </div>
                    
                </div>

            
        </div>
    )
}

export default Home

// pinky promise https://images.unsplash.com/photo-1593526613712-7b4b9a707330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80

// mopop vibes https://images.unsplash.com/photo-1579736170791-e7ce1a38e203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80


// paint mixed on hand https://images.unsplash.com/photo-1516146544193-b54a65682f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80

// red collage face https://images.unsplash.com/photo-1549144277-47d96d572dc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80

// wall collage https://images.unsplash.com/photo-1621341104121-d610c0dc4228?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80

// collage https://images.unsplash.com/photo-1618327907215-4e514efabd41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80

// tan collage https://images.unsplash.com/photo-1613316122132-81de453d8610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80

// blue blurry https://images.unsplash.com/photo-1619199003576-7cf4e1f7b25f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=933&q=80

// head fragments https://images.unsplash.com/photo-1685314627216-600b891897ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80