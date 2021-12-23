import React from "react";

function Logo() {

    return(
        <div className="py-10 flex flex-col xl:grid xl:grid-cols-3 xl:place-items-center xl:py-48 xl:px-32 w-full xl:mx-auto">
            <h2 className="text-center text-2xll font-primary font-bold  xl:col-span-1 xl:text-5xl xl:font-bold xl:text-left text-designBlack xl:w-98">Die Initiator*innen des Schutzkodex</h2>
            <div className="xl:col-span-2 xl:gap-4 xl:space-y-5 flex flex-col justify-center">
                <div className="flex flex-col py-10 space-y-12 items-center block xl:flex xl:flex-col xl:items-center">
                    <div className="space-y-10 xl:flex xl:justify-center xl:items-center xl:space-x-10">
                        <img className="w-40" src="/img/dju1.png" alt="" />
                        <img className="w-48" src="/img/dju2.png" alt="" />
                        <img className="w-44" src="/img/rsf.png" alt="" />
                    </div>
                    <div className="space-y-10 xl:flex xl:justify-center xl:items-center xl:space-x-10 xl:col-span-2">
                        <img className="w-72" src="/img/vbrg.png" alt="" />
                        <img className="w-36" src="/img/ndm.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logo;