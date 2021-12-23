import React from "react";
import Image from "next/image";
import Comments from "../assets/comments.svg";

function Header() {

    return(
        
        <div className="relative w-full">
            <div className="bg-secondary bg-opacity-70 h-97 2xl:h-98.5 xl:h-98.5 lg:h-98.5 md:h-99">
                <div className="mix-blend-overlay">
                    <Image
                        className="filter blur-sm"
                        alt="press freedom pact"
                        src="/img/press-freedom.jpg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="relative m-auto flex flex-col space-y-12 justify-center lg:w-100 h-97 2xl:h-98 xl:h-98 lg:h-98 md:h-99 items-center">
                    <h1 className="text-center text-designBlack font-bold text-3xxl md:text-5xxl lg:text-5xxl xl:text-5xxl 2xl:text-5xxl">Kodex für Medienhäuser zum Schutz von Journalist*innen</h1>
                    <button className="w-44 h-12 rounded bg-button text-designBlack rounded-sm font-secondary font-bold text-lgg tracking-wider">
                        <span className="inline-block"><Comments className="w-4"/></span>
                        <span className="inline-block pl-2">Mitmachen</span>
                    </button>
                </div>          
            </div>
        </div>
    )
}

export default Header;