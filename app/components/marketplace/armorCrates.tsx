import React, { useEffect, useState } from "react";
import ProductCard from "./productCard.tsx";

type ProductProps = {
    id: number;
    img: string;
    description: string;
};

interface Props {
    opt: boolean;
    setOpt: (arg0: boolean) => void;
}

const ArmorSection = ({
    opt,
    setOpt,
}: Props) => {

    const [items, setItems] = useState<ProductProps[]>([]);
    const [uri, setUri] = useState("");
    useEffect(() => {
        setItems([
            { id: 0, img: "https://www.rocketprices.com/upload/20190603/6369518071200252744883424.png", description: "armor armor armor armor" },
            { id: 1, img: "https://www.rocketprices.com/images/rocket%20league/items/PS4-Champion-Crate-1.png", description: "armor armor armor armor" },
            { id: 2, img: "https://www.rocketprices.com/upload/20180601/6366346527555408866058737.png", description: "armor armor armor armor" },
            { id: 3, img: "https://www.aoeah.com/images/rocket%20league/items/PS4-rl-beach-blast-crate.png", description: "armor armor armor armor" },
            { id: 4, img: "https://www.aoeah.com/images/rocket%20league/items/PS4-Turbo-Crate.png", description: "armor armor armor armor" },
            { id: 5, img: "https://www.aoeah.com/images/rocket%20league/items/PS4-Elevation-Crate.png", description: "armor armor armor armor" },
        ]);
    });

    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-cover bg-center py-16 md:py-20 lg:py-20"
        >
            <div className="grid grid-cols-3 gap-10 lg:max-w-[1200px] lg:grid-rows-1">
                {items.map((item: ProductProps, i) => (
                    <ProductCard
                        key={i}
                        id={item.id}
                        img={item.img}
                        description={item.description}
                        setUri={setUri} setOpt={setOpt}
                    />
                ))}
            </div>
        </section>
    );
};

export default ArmorSection;
