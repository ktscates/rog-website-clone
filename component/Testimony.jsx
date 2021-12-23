import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import Quote from "../assets/quote.svg"
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import Dot from "../assets/dot.svg";

function Testimony() {

    const data = [
        {
            image: "/img/thembi.png",
            text1: "Für viele Kolleginnen und Kollegen – insbesondere Frauen und Journalistinnen und Journalisten of Color – stieg in den vergangenen Jahren der Druck durch Hass und Angriffe.",
            text2:"Mit dem Schutzkodex können Medienhäuser ein bisschen Sicherheit geben, signalisieren, dass sie diese Gefahr für die Pressefreiheit ernst nehmen – und dafür sorgen, dass wichtige Stimmen nicht verstummen",
            name: "Thembi Wolf",
            position: "Vorsitzende der Neuen Deutschen Medienmacher*innen"
        },

        {
            image: "/img/sebastian.jpeg",
            text1: "Für viele Kolleginnen und Kollegen – insbesondere Frauen und Journalistinnen und Journalisten of Color – stieg in den vergangenen Jahren der Druck durch Hass und Angriffe.",
            text2:"Mit dem Schutzkodex können Medienhäuser ein bisschen Sicherheit geben, signalisieren, dass sie diese Gefahr für die Pressefreiheit ernst nehmen – und dafür sorgen, dass wichtige Stimmen nicht verstummen",
            name: "Sebastian Horn",
            position: "Vorsitzende der Neuen Deutschen Medienmacher*innen"
        },
        {
            image: "/img/christian_mihr.jpeg",
            text1: "Für viele Kolleginnen und Kollegen – insbesondere Frauen und Journalistinnen und Journalisten of Color – stieg in den vergangenen Jahren der Druck durch Hass und Angriffe.",
            text2:"Mit dem Schutzkodex können Medienhäuser ein bisschen Sicherheit geben, signalisieren, dass sie diese Gefahr für die Pressefreiheit ernst nehmen – und dafür sorgen, dass wichtige Stimmen nicht verstummen",
            name: "Christian Mihr",
            position: "Vorsitzende der Neuen Deutschen Medienmacher*innen"
        },

    ]

    
    return(   
        <Carousel
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                <button
                    className="xl:p-3 xl:rounded-full xl:bg-white xl:border xl:border-arrow xl:m-auto xl:absolute xl:z-50 md:p-3 md:rounded-full md:bg-white md:border md:border-arrow md:m-auto md:absolute md:z-50 md:block button-left hidden xl:block "
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                >
                    <LeftArrow className="w-4 h-4" />
                </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                <button
                    className="xl:p-3 xl:rounded-full xl:bg-white xl:border xl:border-arrow xl:absolute right-0 md:p-3 md:rounded-full md:bg-white md:border md:border-arrow md:m-auto md:absolute md:z-50 md:block button-right xl:z-50 hidden lg:block"
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                >
                    <RightArrow  className="w-4 h-4" />
                </button>
                )
            }

            renderIndicator={(onClickHandler, isSelected, index, label) => {
                const defStyle = { backgroundColor: "#d0d5da", cursor: "pointer"};
                const style = isSelected
                  ? { ...defStyle, backgroundColor: "#1f2933" }
                  : { ...defStyle };
                return (
                    <span 
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                        className="mx-2"
                    > 
                       <Dot
                        style={style} 
                        className="w-4 h-4 rounded-full"
                       />
                    </span>

                );
              }}
            
            autoPlay
            interval="5000"
            infiniteLoop
            showArrows
            showThumbs={false}
            className="bg-button p-5"
            showStatus={false}
            >
            {data.map((item) => {
                return (
                    <div className="flex justify-center items-center lg:flex lg:justify-center lg:items-center xl:grid xl:grid-cols-2 py-10 lg:py-20 md:py-10 xl:py-0">
                        <div className="hidden xl:block lg:hidden rounded">
                            <img className="rounded xl:w-101 xl:h-102 xl:object-contain " src={item.image} alt="img" />
                        </div>
                        <div className="w-80 md:w-97.5 2xl:w-99 xl:flex xl:flex-col xl:justify-center text-accent font-secondary xl:space-y-5 space-y-7">
                            <Quote className="w-12 h-9.5 mx-auto xl:mx-0 md:mx-0"/>
                            <p className="text-lggg text-left xl:pl-10 md:pl-7">{item.text1}</p>
                            <p className="text-lggg text-left xl:pl-10 md:pl-7">{item.text2}</p>
                            <div className="grid grid-cols-4 md:pl-3">
                                <div className="xl:hidden col-span-1 rounded">
                                    <img className="rounded w-21 h-29 md:w-22 md:h-30  object-cover md:object-contain" src={item.image} alt="img" />
                                </div>
                                <div className="col-span-3 pl-5 lg:pl-10">
                                    <h4 className="text-left font-semibold text-lggg lg:text-lggg xl:text-2xxl 2xl:text-2xxl">{item.name}</h4>
                                    <p className="text-left text-lggg">{item.position}</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                )
            })}
        </Carousel>
    )
}

export default Testimony;