import React from "react";
import Date from "../assets/date.svg";
import Clock from "../assets/clock.svg";
import Mail from "../assets/mail.svg";
import Add from "../assets/add.svg";

function Journalist() {
    return(
        <div>
            <div className="bg-white py-10">
                <div className="w-full mx-auto xl:w-2/5 xl:mx-auto xl:p-3 ">
                    <h1 className="text-2xll text-center text-designBlack xl:text-5xl font-bold">Austausch für betroffene Journalist*innen</h1>
                    <p className="xl:mt-5 text-designBlack px-3 mt-5">An dieser Stellen geben wir in größeren Abständen die Treffen für betroffene Journalist*innen bekannt, die sich in einem geschützten Raum zum Thema Übergriffe und Hassrede austauschen und sich gegenseitig Hilfestellung geben möchten.</p><br/>
                    <p className="text-designBlack px-3">Bei Interesse an einem der Stammtische können Sie sich nach Bekanntgabe des Termins über <span className="underline text-accent px-3 ">info@neuemedienmacher.de anmelden.</span></p>
                </div>
            </div>

            <div className="space-y-5 bg-primary xl:w-full xl:py-10 xl:h-97 w-full h- xl:space-y-10 xl:mt-30 mt-10 py-5">
                <div className="bg-button border border-border xl:w-2/5 xl:mx-auto xl:-mt-28 xl:z-50 w-80 mx-auto">
                    <div className="p-5 xl:py-8 xl:px-6 xl:space-y-5 space-y-5">
                        <h4 className="text-third font-bold text-2xl">Stammtisch termin lorem ipsum dolor sit ipsum dolor</h4>
                        <div className="flex-col xl:flex-row flex xl:justify-start text-third font-medium xl:space-y-0 space-y-3">
                            <div className="flex xl:mr-5 font-semibold"><span><Date className="w-4 mr-1 mt-1" /></span>20.10.2021</div>
                            <div className="flex xl:mr-5 font-semibold"><span><Clock className="w-4 mr-1 mt-1" /></span>Do, 16:00 Uhr</div>
                            <div className="underline font-semibold flex "><span><Mail className="w-4 mr-1 mt-1" /></span>jetzt anmelden</div>
                        </div>
                    </div>
                </div>
                <div className="bg-button border border-border xl:w-2/5 xl:mx-auto xl:-mt-28 xl:z-50 w-80 mx-auto rounded">
                    <div className="p-5 xl:py-8 xl:px-6 xl:space-y-5 space-y-5">
                        <h4 className="text-third font-bold text-2xl">Stammtisch termin lorem ipsum dolor sit ipsum dolor</h4>
                        <div className="flex-col xl:flex-row flex xl:justify-start text-third font-medium xl:space-y-0 space-y-3">
                            <div className="flex mr-5 font-semibold"><span><Date className="w-4 mr-1 mt-1" /></span>20.10.2021</div>
                            <div className="flex mr-5 font-semibold"><span><Clock className="w-4 mr-1 mt-1" /></span>Do, 16:00 Uhr</div>
                            <div className="underline font-semibold flex"><span><Mail className="w-4 mr-1 mt-1" /></span>jetzt anmelden</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="flex bg-transparent border-2 border-third rounded py-2 px-6">
                        <span><Add className="w-3.5 mt-1.5" /></span>
                        <span><p className="text-lggg font-semibold text-designBlack pl-5">mehr laden</p></span>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Journalist