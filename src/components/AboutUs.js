function AboutUs(){
    return(
        <div className="aboutBackground">
            <div className="videoBackground">
                <div className="titleBox">
                    <h1 className="title">Founder's Story</h1>
                    <p className="videoDiscription">Lorem ipsum dolor sit amet consectetur adipiscing elit, massa facilisis convallis consequat primis in nullam urna, penatibus elementum ad scelerisque condimentum maecenas. Odio nunc nullam iaculis fusce praesent fringilla hac cubilia, eleifend id urna mi quis congue sodales, augue viverra nulla nascetur commodo porta risus. Mus quis fermentum odio arcu class dis mattis, sem luctus augue et ac.
                    </p>
                </div>
                <iframe src="https://player.vimeo.com/video/791915330?h=4e82b9fac6&color=f7542b& title=0&byline=0&portrait=0" 
                    width="640" 
                    height="360" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen
                    className="video"/>
            </div>
            
        </div>
    )
}

export default AboutUs