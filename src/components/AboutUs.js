import karisProfile from "./karisProfile.jpg"

function AboutUs(){
    return(
        <div className="bg-[#FDFDFD] p-3 md:p-10 bg-cover h-auto">
            <div className="flex flex-wrap md:flex-nowrap justify-between m-3 mt-8">
                <h1 className="font-bold pb-3 text-xl md:text-7xl text-left">[ the why: ]</h1>
                <span className="text-[#292929] bg-[#E8E4DE] shadow-lg content-center md:w-2/3 text-left text-md md:text-2xl md:p-16 m-2 p-3">
                For decades, those who identify as bi/multi-racial have been overlooked within society. Whether in families, neighborhoods, communities of faith, or otherwise, these individuals are often seen as "half" of one identity and "half" of another, and as such are rarely fully embraced. This "half existence" leads to bullying, disillusionment, poor mental health, and a host of other issues that do not reflect God's desires for their lives, which is all the more concerning when one considers that those who identify as bi/multi-racial will be the majority of people in the United States by 2040.
                </span>
                <img className="md:w-1/3 md:m-10 m-3" src="https://images.unsplash.com/photo-1619199003576-7cf4e1f7b25f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=933&q=80"/>
            </div>
            <div className="flex flex-wrap md:flex-nowrap md:justify-between m-3 md:mt-8">
                <img className="w-1/3 m-3 md:m-10 md:h-128" src="https://images.unsplash.com/photo-1620748022386-1d8554a9d1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"/>
                <img className="w-1/3 md:m-10 md:h-96" src="https://images.unsplash.com/photo-1618327907215-4e514efabd41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"/>
                <span className="text-[#FDFDFD] bg-[#292929] shadow-lg content-center md:w-1/3 text-right text-md md:text-xl m-2 md:p-10 p-3">
                Two or More was created to help bring about a brighter future for community members and their families who represent two or more racial or ethnic backgrounds. This ministry creates spaces to explore the wholeness of whom these individuals are and not merely one part, established on the belief that racial reconciliation starts with knowing fully who one is in Christ, and continues by bringing awareness to all those to whom these people are connected.
                </span>
            </div>
            <h1 className="font-bold pb-3 text-xl md:text-7xl text-left pt-10 md:pt-20">[ the team: ]</h1>
                <div className="container place-content-center md:m-10">
                    <div className="flex flex-wrap items-center md:justify-between ">
                        <div className="md:w-1/3 md:h-96 md:py-12 md:px-10 m-3 text-[#292929] bg-[#E8E4DE] shadow-lg content-center">
                            <h1 className="text-[#292929] text-3xl md:text-7xl text-center md:mt-20 p-5 font-bold">MEET BRIAN</h1>
                        </div>
                        <div className="md:mt-20 items-center content-center">
                            <iframe src="https://player.vimeo.com/video/791915330?h=4e82b9fac6&color=f7542b& title=0&byline=0&portrait=0" 
                                width="640vh" 
                                height="360vh" 
                                frameborder="0" 
                                allow="autoplay; fullscreen; picture-in-picture" 
                                allowFullScreen
                                className="w-full aspect-video md:w-640vh md:h-360vh"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap md:justify-between ">
                        <div className="text-[#D6C6AA] bg-[#292929] p-2 md:p-5 shadow-lg text-xl md:text-2xl md:m-8 m-5 md:w-1/2">
                            <div className="content-center m-3 md:m-5">
                                <p className="text-[#FDFDFD]">
                                    Founded by Brian Petty, a multi-ethnic Black and Korean leader born and raised in Detroit, Michigan, Two or More provides social gatherings, immersion trips, and curriculum to help the bi/multi-ethnic individual, their children, and their families celebrate the fullness of their background. Brian uses both his years of study and personal life experience to develop all of the experiences, while also personally connecting with those that struggle to understand two or more ethnic identities within themselves. He believes that when these individuals learn to be undivided within and realizes that they are created wholly, bridge-building can truly begin. 
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:my-20 mt-5">
                            <img src="https://images.unsplash.com/photo-1560263816-d704d83cce0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                        </div>
                    </div>
                </div>
            <div className="flex flex-wrap md:flex-nowrap justify-between md:m-10 mt-8 m-4">
                <div className="text-[#292929] bg-[#E8E4DE] shadow-lg content-center md:w-2/3 md:m-10 md:p-10 p-5">
                    <h1 className="font-bold pb-3 text-xl md:text-5xl text-center">MEET KARIS</h1>
                    <img src={karisProfile} alt="Karis" className="rounded-full w-52 h-52 md:float-left md:mt-16 my-5"/>
                    <p className="m-3 md:m-10 md:text-xl text-md text-end">Karis Schneider is a speaker, consultant, and enneagram specialist. Layered by a lifetime of world travel and listening to others’ stories while unraveling her own, Karis's primary focus resides in customized consultations that help her clients develop their personal, relational, and work relationships. Karis has lived in California, Brazil, Thailand, Hawaii, New York, and Idaho (yes, the land of potatoes), and credits these experiences in making her the multicultural patron she is today. Her speaking and consulting provides her opportunities to develop a wide array of people in spaces that range from film and television to religious leadership.  </p>
                    <p className="m-3 md:m-10 md:text-xl text-md text-start">Karis’ father is Korean and her mother is white. Growing up, her siblings and cousins were among the few mixed race children she knew. Never fitting in anywhere (whether it be in school or in media representation) contributed to a never-ending journey of finding her identity. Karis continues this journey along with others who have experienced the same or similar isolation and confusion while pursuing her passion to learn more about race and ethnic relations. She is a psychology student and lover of all things that grow, improve, and heal the human mind. For the time being, Schneider currently resides in Los Angeles, CA with her husband, Kurt and dog, Mari.</p>
                </div>
                <div className="md:w-1/3 md:pt-20 pt-10">
                    <img src="https://images.unsplash.com/photo-1625768376472-224b4cbc2ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80" />
                </div>
            </div>
            <div className="flex flex-wratp md:flex-nowrap justify-between m-3 md:mt-8 mt-3">
                <div className="w-1/2 md:w-1/3 pt-20">
                    <img src="https://images.unsplash.com/photo-1539710066450-2b50b7d3f9e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                </div>

                <div className="w-1/2 text-[#292929] bg-[#E8E4DE] shadow-lg content-center md:w-2/3 md:m-10 md:p-10 ml-3">
                        <h1 className="font-bold md:text-5xl text-center">MEET WHITNEY</h1>
                        <img src={'https://images.unsplash.com/photo-1457732815361-daa98277e9c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'} alt="Whitney" className="rounded-full w-28 h-30 md:w-52 md:h-52 float-right m-5"/>
                        <p className="md:m-10 m-3 text-xl text-start">Bio coming soon!</p> 
                </div>
            </div>
        </div>
    )
}

export default AboutUs