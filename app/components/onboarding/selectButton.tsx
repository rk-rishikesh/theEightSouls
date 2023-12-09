import React from "react";
import "./firstButton.css";

interface Props {
    txt: string
    page: number;
    setPage: (arg0: number) => void;
}

const SelectButton = ({
    txt,
    page,
    setPage,
}: Props) => {



    const selectAvatar = () => {
        setPage(2);
        console.log("Wallet");
    };

    return (
        <button className="sbutton" onClick={() => selectAvatar()}>
            {txt}
        </button>
    );

};

export default SelectButton;
