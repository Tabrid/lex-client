

const Packages = () => {
    const Packages = [
        {
            id: 1,
            title: "7 DAYS",
            images:"https://i.ibb.co/KqRC5B0/image.png"
        },
        {
            id: 2,
            title: "14 DAYS",
            images:"https://i.ibb.co/tCxFT2q/image.png"
        },
        {
            id: 3,
            title: "21 DAYS",
            images:"https://i.ibb.co/TBR75Hw/image.png"
        }   
    ];
    return (
        <div className="flex flex-col w-full bg-[#1d344a]">
            <h1 className="text-center text-5xl font-['Open_Sans'] font-bold text-white mt-10 ">PACKAGES</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 mt-10">
                {Packages.map((data) => (
                    <div
                        key={data.id}
                        className="bg-[#744949] flex flex-col gap-20 h-[350px] w-[300px] items-center py-12 rounded-[29px] ml-14 mb-5"
                    >
                        <img src={data.images} className="w-24" />
                        <h1 className="text-5xl font-['Open_Sans'] font-bold text-white self-start text-center ml-14">
                            {data.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;