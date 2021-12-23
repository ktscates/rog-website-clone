import React from 'react'
import Check from "../assets/check-circle.svg";

function Why() {
    return (
        <div className="w-full py-12">
            <div className="w-99 mx-auto space-y-4 text-accent">
                <h1 className="text-accent text-5xl font-bold font-primary leading-11">Warum braucht es einen Medienkodex?</h1>
                <div className="flex pt-6">
                    <span className="pt-1"><Check className="w-5" /></span>
                    <span className="font-normal ml-4">Die<span className="font-bold"> Gewalt gegen Medienschaffende</span>nimmt in Deutschland immer mehr zu.</span>
                </div>
                <div className="flex">
                    <span className="pt-1"><Check className="w-5" /></span>
                    <span className="font-normal ml-4"><b>Hass und Hetze</b> auf Social Media, <b>Morddrohungen</b> per E-Mail oder <b>körperliche Übergriffe</b> auf der Straße – für Journalist*innen, die zur Zielscheibe werden, ist die Bedrohung sehr belastend.</span>
                </div>
                <div className="flex">
                    <span className="pt-1"><Check className="w-5" /></span>
                    <span className="font-normal ml-4">Dies kann dazu führen, dass sich insbesondere freie Journalist*innen gut überlegen, <b>ob sie weiterhin berichten.</b></span>
                </div>
                <div className="flex">
                    <span className="pt-1"><Check className="w-5" /></span>
                    <span className="font-normal ml-4">Oder fest angestellte Mitarbeiter*innen können krankheitsbedingt <b>gar nicht mehr arbeiten,</b> wenn die psychische Belastung zu groß wird.</span>
                </div>
                <div className="flex">
                    <span className="pt-1"><Check className="w-5" /></span>
                    <span className="font-normal ml-4">Das <b>gefährdet</b> nicht nur die tägliche Arbeit der Medienhäuser, sondern die <b>Pressefreiheit in Deutschland</b> insgesamt.</span>
                </div>
                <div className="flex pb-6">
                    <span className="pt-1"><Check className="w-5" /></span>
                    <span className="font-normal ml-4">Daher wurde ein <b>Kodex</b> entwickelt, der praktische Maßnahmen <b>für</b> <b>Medienhäuser</b> formuliert und Journalist*innen damit <b>schützt.</b> </span>
                </div>
            </div>

            <div className="w-full mx-auto flex justify-center py-5">
                <iframe className="mr-5" width="560" height="315" src="https://www.youtube.com/embed/a00NRSFgHsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="ml-5" width="560" height="315" src="https://www.youtube.com/embed/a00NRSFgHsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Why;