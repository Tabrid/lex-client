

const Modal = () => {
    return (
        <dialog id="my_modal_3" className="modal max-h-screen bg-[#1d344a]"> 
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="border-solid overflow-hidden bg-[#1d344a] flex flex-col justify-center gap-8 w-full items-center  border-black border rounded-[35px]">
                    <div className="text-4xl font-['Inter'] font-semibold text-white">
                        Welcome to LEX-AI
                    </div>
                    <div className="bg-white self-stretch relative flex flex-col justify-between mr-px gap-64 items-start pt-16 pb-24 px-10 rounded-[35px]">
                        <img
                            src="https://file.rendit.io/n/ZZhIuQCL17uXuYXEgyXq.svg"
                            id="Polygon"
                            className="w-12 h-16 origin-top-left rotate-[90.8deg] absolute top-[363.8583984375px] left-[595.586181640625px]"
                        />
                        <div className="relative flex flex-row gap-5 items-start">
                            <div className="relative flex flex-col w-8 shrink-0 items-start">
                                <img
                                    src="https://file.rendit.io/n/96L3e3A8sJ1JlYB1c23k.svg"
                                    className="w-5 h-4 absolute top-2 left-1"
                                />
                                <img
                                    src="https://file.rendit.io/n/KhSKG5gIPGHdztDdun2f.svg"
                                    id="Ellipse"
                                    className="relative w-8"
                                />
                            </div>
                            <div className="text-sm font-['Inter'] self-end">
                                hey, ask me a question.
                            </div>
                        </div>
                        <div className="border-solid bg-[#d9d9d9] relative flex flex-col justify-center ml-8 pl-10 w-2/3 h-10 shrink-0 items-start border-black border rounded-[50px]">
                            <div className="text-sm font-['Inter'] text-black/55.00000000000001">
                                type here.........
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;