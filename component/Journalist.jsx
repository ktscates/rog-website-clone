import React from "react";
import Date from "../assets/date.svg";
import Clock from "../assets/clock.svg";
import Mail from "../assets/mail.svg";
import Add from "../assets/add.svg";

function Journalist() {
    return(
        <div>
            <div className="bg-white py-10">
                <div className="w-2/5 mx-auto p-3 ">
                    <h1 className="text-designBlack text-5xl font-bold text-center">Austausch für betroffene Journalist*innen</h1>
                    <p className="mt-5 text-designBlack">An dieser Stellen geben wir in größeren Abständen die Treffen für betroffene Journalist*innen bekannt, die sich in einem geschützten Raum zum Thema Übergriffe und Hassrede austauschen und sich gegenseitig Hilfestellung geben möchten.</p><br/>
                    <p className="text-designBlack">Bei Interesse an einem der Stammtische können Sie sich nach Bekanntgabe des Termins über <span className="underline text-accent ">info@neuemedienmacher.de anmelden.</span></p>
                </div>
            </div>

            <div className="bg-primary w-full py-10 h-97 space-y-10 mt-30">
                <div className="bg-button border border-border w-2/5 mx-auto -mt-28 z-50">
                    <div className="py-8 px-6 space-y-5">
                        <h4 className="text-third font-bold text-2xl">Stammtisch termin lorem ipsum dolor sit ipsum dolor</h4>
                        <div className="flex justify-start text-third font-medium">
                            <div className="flex mr-5 font-semibold"><span><Date className="w-4 mr-1 mt-1" /></span>20.10.2021</div>
                            <div className="flex mr-5 font-semibold"><span><Clock className="w-4 mr-1 mt-1" /></span>Do, 16:00 Uhr</div>
                            <div className="underline font-semibold flex"><span><Mail className="w-4 mr-1 mt-1" /></span>jetzt anmelden</div>
                        </div>
                    </div>
                </div>
                <div className="bg-button border border-border w-2/5 mx-auto">
                    <div className="py-8 px-6 space-y-5">
                        <h4 className="text-third font-bold text-2xl">Stammtisch termin lorem ipsum dolor sit ipsum dolor</h4>
                        <div className="flex justify-start text-third font-medium">
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