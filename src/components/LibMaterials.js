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
        <div className = "flex justify-center ">
            <div className="bg-[#292929] w-1/2 mt-20 text-[#E8E4DE] text-2xl p-10 ">
                <div className=" flex justify-between p-5">
                    <div className="">
                        XYZ Resource
                    </div>
                    <div className=" italic">
                        <a href="">READ MORE</a>
                    </div>
                    
                </div>
                <div className=" flex justify-between p-5">
                    <div className="">
                        XYZ Resource
                    </div>
                    <div className=" italic">
                        <a href="">READ MORE</a>
                    </div>
                    
                </div>
                <div className=" flex justify-between p-5">
                    <div className="">
                        XYZ Resource
                    </div>
                    <div className="italic">
                        <a href="">READ MORE</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}