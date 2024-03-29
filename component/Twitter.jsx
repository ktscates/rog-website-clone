import React from "react";
import Share from "../assets/share.svg";

function Twitter() {

    const data = [
        {
            tweet: "RT @cmihr: At @scfondacija I met today in #Belgrade Milan Jovanović who just did & is doing his job as a journalist. As we com…",
            image: "/assets/share.svg",
            text: "zum Tweet"
        },
        {
            tweet: "#Vietnam: Morgen beginnt der Prozess gegen die bekannte #Journalistin Pham Doan Trang. Gemeinsam mit 27 weit...",
            image: "/assets/share.svg",
            text: "zum Tweet"
        },
        {
            tweet: "Heute war die Facebook-Whistleblowerin @FrancesHaugen bei uns zu Gast für ein Hintergrundgespräch mit Vertreter*inn…",
            image: "/assets/share.svg",
            text: "zum Tweet"
        },
        {
            tweet: "Wir freuen uns, dass die Mitgliederversammlung den RSF-Vorstand für weitere zwei Jahre im Amt bestätigt hat.",
            image: "/assets/share.svg",
            text: "zum Tweet"
        },
        {
            tweet: "RT @VDZPresse: Vor der Verleihung der „Victoria für Freiheit“ spricht die #Journalistin @muscatcar u.a. über die Lage der Presse i…",
            image: "/assets/share.svg",
            text: "zum Tweet"
        },
        {
            tweet: "1400 Journalist*innen wurden seit 1990 ermordet. 80% der Verbrechen wurden nie geahndet. Mit @pressfreedom &…",
            image: "/assets/share.svg",
            text: "zum Tweet"
        }
    ]

    return(
        <div className="bg-secondary xl:p-16 w-full">
            <div className="py-6">
                <h1 className="text-2xll text-center text-designBlack xl:text-3xxl font-bold">#medienkodex auf Twitter</h1>
                <div className="py-5 xl:flex xl:flex-wrap xl:gap-4 xl:w-2/3 xl:mx-auto xl:py-10">
                    {data.map((item) => {
                        return(
                            <div className="w-80 w-48 mx-auto xl:w-96 xl:h-40 font-secondary bg-white text-designBlack text-lggg text-left p-3 rounded-md xl:mb-0 mb-5 py-5">
                                <p className="">{item.tweet}</p>
                                <div className="">
                                    <span><Share className="w-5 mt-2" /></span>
                                    <span className=""><p className="-mt-6 ml-7 underline">{item.text}</p></span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Twitter;