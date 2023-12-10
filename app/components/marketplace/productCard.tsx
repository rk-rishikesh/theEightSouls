import React from "react";

import "./productCard.css";

type ProductProps = {
    id: number;
    img: string;
    description: string;
    setUri: (arg0: string) => void;
    setOpt: (arg0: boolean) => void;
};


const ProductCard = ({
    id,
    img,
    description,
    setUri,
    setOpt
}: ProductProps) => {



    const showProduct = () => {
        setOpt(true);
        setUri(img);
    };

    return (
        <>
            <div className="productcard-border">
                <div className="productcard-bg">
                    <div className="container-logo">
                        <div className="logo"></div>
                        <div className="logo-inside">
                            <img className="logo-img" src="https://cryptologos.cc/logos/polygon-matic-logo.png" alt=""/>
                        </div>
                    </div>
                    <div id="blur-area">
                        <img className="product-img" alt="" src={img} />
                    </div>
                    <div className="marquee">
                        <div className="marquee__inner" aria-hidden="true">
                            <span className="viper">{description}</span>
                            <span className="viper">{description}</span>
                            <span className="viper">{description}</span>
                        </div>
                    </div>

                </div>
                {/* <strong id="text-ext">Lorem ipsum</strong>
                <strong id="text-border">Lorem ipsum</strong> */}
                <button className="buy-button" onClick={showProduct}>BUY</button>

            </div>
        </>
    );
};

export default ProductCard;
