import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

type ProductProps = {
    id: number;
    img: string;
    description: string;
};

interface Props {
    opt: boolean;
    setOpt: (arg0: boolean) => void;
}

const OutfitSection = ({
    opt,
    setOpt,
}: Props) => {

    const [items, setItems] = useState<ProductProps[]>([]);
    const [uri, setUri] = useState("");
    useEffect(() => {
        setItems([
            { id: 0, img: "", description: "outfit outift outfit outift" },
            { id: 1, img: "", description: "outfit outift outfit outift" },
            { id: 2, img: "", description: "outfit outift outfit outift" },
            { id: 3, img: "", description: "outfit outift outfit outift" },
            { id: 4, img: "", description: "outfit outift outfit outift" },
            { id: 5, img: "", description: "outfit outift outfit outift" },
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

export default OutfitSection;
