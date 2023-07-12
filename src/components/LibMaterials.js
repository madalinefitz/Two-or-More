export default function LibMaterials() {

// if we want to dynamically render resources, here:
// const [materials, setMaterials] = useState([])
// const displayMaterials = materials.map(m => {
//      return (
//      <div className=" flex justify-between m-5">
            {/* <div className="text-[#E8E4DE]">
                XYZ Resource
            </div>
            <div className="text-[#E8E4DE]">
                <a href="">READ MORE</a>
            </div>
        </div> */}
//  )
// })




    return(
        <div className = "flex justify-center bg-cover bg-[#D6C6AA] p-10 pb-20">
            <div className="bg-[#292929] w-2/3 mt-20 text-[#E8E4DE] text-2xl p-20 ">
                <div className=" flex justify-between p-5">
                    <div className="text-3xl">
                        ABC Important Resource
                    </div>
                    <div className=" italic">
                        <a href="">READ MORE</a>
                    </div>
                </div>
                <div className=" flex justify-between p-5">
                    <div className="text-3xl">
                        DEF Important Resource
                    </div>
                    <div className=" italic">
                        <a href="">READ MORE</a>
                    </div>
                </div>
                <div className=" flex justify-between p-5">
                    <div className="text-3xl">
                        GHI Important Resource
                    </div>
                    <div className="italic">
                        <a href="">READ MORE</a>
                    </div>
                </div>
                <div className=" flex justify-between p-5">
                    <div className="text-3xl">
                        JKL Important Resource
                    </div>
                    <div className="italic">
                        <a href="">READ MORE</a>
                    </div>
                </div>
                <div className=" flex justify-between p-5">
                    <div className="text-3xl">
                        MNO Important Resource
                    </div>
                    <div className="italic">
                        <a href="">READ MORE</a>
                    </div>
                </div>
                <div className=" flex justify-between p-5">
                    <div className="text-3xl">
                        PQR Important Resource
                    </div>
                    <div className="italic">
                        <a href="">READ MORE</a>
                    </div>
                </div>
                <div className=" flex justify-between p-5">
                    <div className="text-3xl">
                        STU Important Resource
                    </div>
                    <div className="italic">
                        <a href="">READ MORE</a>
                    </div>
                </div>
                <div className=" flex justify-between p-5">
                    <div className="text-3xl">
                        VWX Important Resource
                    </div>
                    <div className="italic">
                        <a href="">READ MORE</a>
                    </div>
                </div>
                <div className=" flex justify-between p-5">
                    <div className="text-3xl">
                        GHI Important Resource
                    </div>
                    <div className="italic">
                        <a href="">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}