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

const CompanionSection = ({
    opt,
    setOpt,
}: Props) => {

    const [items, setItems] = useState<ProductProps[]>([]);
    const [uri, setUri] = useState("");
    useEffect(() => {
        setItems([
            { id: 0, img: "https://i.pinimg.com/originals/bc/f3/a3/bcf3a371b9303c27752e1109e96a2fe6.gif", description: "companion companion companion companion" }, 
            { id: 1, img: "https://i.pinimg.com/originals/a8/a4/56/a8a4561433ee9fd5e4aef69e930bff79.gif", description: "companion companion companion companion" }, 
            { id: 2, img: "https://www.smogon.com/forums/attachments/218141/", description: "companion companion companion companion" }, 
            { id: 3, img: "https://img1.picmix.com/output/stamp/normal/1/0/7/8/1978701_1a1d2.gif", description: "companion companion companion companion" }
        ]);
      });

    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-cover bg-center py-16 md:py-20 lg:py-20"
        >
            <div className="grid grid-cols-3 gap-10 lg:max-w-[1200px] lg:grid-rows-1">
            {items.map((item: ProductProps) => (
                    <ProductCard
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

export default CompanionSection;
