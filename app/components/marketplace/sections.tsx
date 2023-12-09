import React, { useState } from "react";
import "./sections.css";
import FeaturedSection from "./featuredSection";
import OutfitSection from "./outfitSection";
import ArmorSection from "./armorCrates";
import CompanionSection from "./companions";
import AccountsSection from "./accountsSection";

const Sections = () => {

    const [sec, setSection] = useState(0);

    const [opt, setOpt] = useState(false);


    const switchToFeatured = () => {
        setSection(0); 
    };

    const switchToOutfit = () => {
        setSection(1);
    };

    const switchToArmor = () => {
        setSection(2);
    };

    const switchToCompanions = () => {
        setSection(3);
    };

    const switchToAccounts = () => {
        setSection(4);
    };


    return (
        <>
            <div className="mt-12 ml-14 grid grid-cols-5 gap-5">
                <div>
                    <button className="sbutton" onClick={switchToFeatured}>
                        FEATURED
                    </button>
                </div>
                <div>
                    <button className="sbutton" onClick={switchToOutfit}>
                        OUTFIT CRATES
                    </button>
                </div>
                <div>
                    <button className="sbutton" onClick={switchToArmor}>
                        ARMOR CRATES
                    </button>
                </div>
                <div>
                    <button className="sbutton" onClick={switchToCompanions}>
                        COMPANIONS
                    </button>
                </div>
                <div>
                    <button className="sbutton" onClick={switchToAccounts}>
                        ACCOUNTS
                    </button>
                </div>
            </div>
            {
                sec == 0 && <FeaturedSection opt={opt} setOpt={setOpt} />
            }
            {
                sec == 1 && <OutfitSection opt={opt} setOpt={setOpt}/>
            }
            {
                sec == 2 && <ArmorSection opt={opt} setOpt={setOpt}/>
            }
            {
                sec == 3 && <CompanionSection opt={opt} setOpt={setOpt}/>
            }
            {
                sec == 4 && <AccountsSection opt={opt} setOpt={setOpt}/>
            }

        </>
    );
};

export default Sections;
