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
        <div className="w-full bg-primary">
            <h1 className="text-center pt-16 pb-4 font-secondary text-third text-lggg">Diese Medienhäuser setzen den Schutzkodex um</h1>
            <div className="flex flex-col justify-center mx-auto pb-16">
                <div className="flex justify-center items-center">
                    <DER className="mx-8 my-14" />

                    <DIE className="mx-8 my-14" />

                    <FRANK className="mx-8 my-14" />

                    <DPA className="mx-8 my-14" />
                </div>
                <div className="flex justify-center items-center">
                    <SUDD className="mx-8 my-14" />

                    <TAZ className="mx-8 my-14" />

                    <SWMH className="mx-8 my-14" />

                    <ZEIT className="mx-8 my-14" />
                </div>
                
            </div>
        </div>
    )
}

export default Partner;