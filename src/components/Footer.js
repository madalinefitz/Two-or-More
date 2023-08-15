export default function Footer () {

    return (
        <footer className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-center ">
        <div className="container p-6 text-neutral-800 dark:text-neutral-200">
            {/* <div className="grid gap-4 lg:grid-cols-1"> */}
            <div className="mb-6 md:mb-0">
                <h5 className="mb-2 pl-3 font-medium uppercase text-2xl text-left">Our Mission</h5>

                <p className="mb-4 pl-3 text-lg text-left">
                Two or More exist in their journey to serve bi/multi-ethnic individuals and their families.
                </p>
            </div>

            {/* <div className="mb-6 md:mb-0">
                <h5 className="mb-2 font-medium uppercase">Our Vision</h5>

                <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
                </p>
            </div> */}
            {/* </div> */}
        </div>
        <div
            className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
            © 2023 Copyright
        </div>
    </footer>
    )
}