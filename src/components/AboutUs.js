function AboutUs(){
    return(
        <div className="bg-[#D6C6AA] p-10 bg-cover h-auto">
            <div className="flex justify-between bg-[#292929] p-5">
                <div className="text-[#D6C6AA] text-2xl m-10">
                    <div className="content-center m-5">
                        <h1 className="text-[#D6C6AA] text-4xl">Founder's Story</h1>
                        <p className="text-[#E8E4DE]">Lorem ipsum dolor sit amet consectetur adipiscing elit, massa facilisis convallis consequat primis in nullam urna, penatibus elementum ad scelerisque condimentum maecenas. Odio nunc nullam iaculis fusce praesent fringilla hac cubilia, eleifend id urna mi quis congue sodales, augue viverra nulla nascetur commodo porta risus. Mus quis fermentum odio arcu class dis mattis, sem luctus augue et ac.
                        </p>
                    </div>
                </div>
                <div className="m-10 items-center content-center">
                    <iframe src="https://player.vimeo.com/video/791915330?h=4e82b9fac6&color=f7542b& title=0&byline=0&portrait=0" 
                        width="640vh" 
                        height="360vh" 
                        frameborder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            </div>
            <div className="flex justify-between m-3 mt-8">
                <div className="text-[#292929] bg-[#E8E4DE] content-center w-2/3  m-2 p-10">
                    <h1 className="font-bold text-3xl text-center">Meet Karis</h1>
                    <h2 className="font-medium text-2xl text-center">Media Content and Connector Extrodinaire</h2>
                    <img src={'https://images.unsplash.com/photo-1457732815361-daa98277e9c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'} alt="Whitney" className="rounded-full  w-52 h-52 float-left m-5"/>
                    <p className="m-10 text-xl text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="text-[#292929] bg-[#E8E4DE] content-center w-2/3 m-2 p-10">
                    <h1 className="font-bold text-3xl text-center">Meet Whitney</h1>
                    <h2 className="font-medium text-2xl text-center">Education and Conversation Starter</h2>
                    <img src={'https://images.unsplash.com/photo-1457732815361-daa98277e9c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'} alt="Whitney" className="rounded-full  w-52 h-52 float-right m-5"/>
                    <p className="m-10 text-xl text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                </div>
            </div>
            <div className="flex justify-between m-3 mt-8">
                <div className="text-[#D6C6AA] bg-[#292929] content-center w-1/3 text-center text-2xl m-2 p-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </div>
                <div className="text-[#292929] bg-[#E8E4DE] content-center w-2/3 text-center text-2xl m-2 p-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs