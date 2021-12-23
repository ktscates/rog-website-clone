import React from "react";
// import DJU1 from "/img/dju1.png";
// import DJU2 from "/img/dju2.png";
// import RSF from "/img/rsf.png";
// import VBRG from "/img/vbrg.png";
// import NDM from "/img/ndm.png";

function Logo() {

    return(
        <div className="grid grid-cols-3 place-items-center py-48 px-32 w-full mx-auto">
            <h2 className="col-span-1 text-5xl font-bold text-left text-designBlack">Die Initiator*innen<br/> des Schutzkodex</h2>
            <div className="col-span-2  gap-4 space-y-5">
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center space-x-10">
                        <img className="w-40" src="/img/dju1.png" alt="" />
                        <img className="w-48" src="/img/dju2.png" alt="" />
                        <img className="w-44" src="/img/rsf.png" alt="" />
                    </div>
                    <br/>
                    <div className="flex justify-center items-center space-x-10 col-span-2">
                        <img className="w-72" src="/img/vbrg.png" alt="" />
                        <img className="w-36" src="/img/ndm.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logo;