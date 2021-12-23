import React from "react";
import DPA from "../assets/dpa.svg";
import DIE from "../assets/Die.svg";
import FRANK from "../assets/frank.svg";
import DER from "../assets/der-spiegel.svg";
import SUDD from "../assets/sudd.svg";
import TAZ from "../assets/taz.svg";
import SWMH from "../assets/swmh.svg";
import ZEIT from "../assets/zeit.svg";

function Partner() {
    return(
        <div className="w-full bg-primary py-5">
            <div className="w-65 mx-auto xl:w-full">
                <h1 className="text-center xl:pt-16 xl:pb-4 font-secondary text-third xl:text-lggg">Diese Medienhäuser setzen den Schutzkodex um</h1>
                <div className="xl:flex xl:flex-col xl:justify-center xl:mx-auto xl:pb-16">
                    <div className="xxs:flex xxs:flex-col xxs:items-center xl:flex xl:justify-center xl:items-center">
                        <DER className="mx-8 my-14" />

                        <DIE className="mx-8 my-14" />

                        <FRANK className="mx-8 my-14" />

                        <DPA className="mx-8 my-14" />
                    </div>
                    <div className="xxs:flex xxs:flex-col xxs:items-center xl:flex xl:justify-center xl:items-center">
                        <SUDD className="mx-8 my-14" />

                        <TAZ className="mx-8 my-14" />

                        <SWMH className="mx-8 my-14" />

                        <ZEIT className="mx-8 my-14" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Partner;