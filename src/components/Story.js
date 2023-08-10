export default function Story ({s}) {
    return (
        <div className="w-full bg-cover mb-10 bg-[#292929] p-10">
            <div className="text-[#E8E4DE] text-2xl p-6 content-center">
            {s.story}
            </div>
            <div className="text-[#E8E4DE] text-2xl pl-7 content-center">
                - {s.firstName} {s.lastInitial}.
            </div>
        </div>
    )
} 