import Typewriter from 'typewriter-effect';

export default function Share () {
    return(
        <div>
        <div className="flex-col p-28 text-[#E8E4DE] bg-[#292929] bg-cover h-full">
            <div className="text-5xl lg:text-8xl text-right lg:ml-20 lg:p-8 p-4">
                We'd love to hear more about you! This is a safe space to share your story. Your experiences. Your history. Your journey.
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="animate-bounce w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
        </div>
        <div className="flex">
            <div className="text-[#292929] text-5xl md:text-8xl w-2/3 p-10">
            <Typewriter
                options={{
                strings: ['Tell your story.'],
                autoStart: true,
                loop: true,
                }}
                />
            </div>
                
        </div>
            <div className="flex justify-end p-5 pb-10">
                <form className="p-10 sm:w-full ">
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/2">
                        <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            First Name
                        </label>
                        </div>
                        <div class="md:w-1/2">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9DC08B]" id="inline-full-name" type="text" value="Jane"/>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/2">
                        <label class="block  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Last Initial
                        </label>
                        </div>
                        <div class="md:w-1/2">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9DC08B]" id="inline-full-name" type="text" value="D"/>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/2">
                        <label class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Password
                        </label>
                        </div>
                        <div class="md:w-1/2">
                        <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9DC08B]" id="inline-password" type="text" placeholder="..."/>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/2"></div>
                        <div class="md:w-1/2">
                        <button class="shadow bg-[#9DC08B] hover:bg-[#9DC08B]focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Share
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        
        </div>
    )
}