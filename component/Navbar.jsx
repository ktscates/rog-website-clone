import React from "react";
import { Link } from "react-scroll";
import Hands from "../assets/hands-helping.svg";
import Comments from "../assets/comments.svg"

function Navbar() {
    return (
        <div>
            <nav className="fixed w-11/12 flex justify-between items-center text-accent font-secondary z-10 mx-auto text-lg">
                <div className="cursor-pointer flex justify-center text-accent font-secondary">
                  <Hands className="w-8" />
                  <span className="text-lg pl-3 pt-1 font-bold">
                    Medienkodex
                  </span>
                </div>
                <div>
                    <Link>Der Kodex</Link>
                    <Link>Für Betroffene</Link>
                    <Link>Über Uns</Link>
                    <button>
                        <span className="inline-block"><Comments className="w-8"/></span>
                        <span className="inline-block pl-2">Mitmachen</span>
                    </button>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;