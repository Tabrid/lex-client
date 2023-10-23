import AvaiableLawyer from "./AvaiableLawyer/AvaiableLawyer";


const Appointment = () => {
    return (
        <div  className="flex flex-col w-full  items-center my-10 min-h-screen">
            <div className="bg-[#1c5168] w-1/2 flex flex-col justify-center h-20 shrink-0 items-center rounded-[35px]">
                <div className="text-6xl font-['Poppins'] font-semibold leading-[32px] text-white">
                    TAKE APPOINTMENT
                </div>
            </div>
            <AvaiableLawyer></AvaiableLawyer>
        </div>
    );
};

export default Appointment;