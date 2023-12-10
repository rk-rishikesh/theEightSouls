import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./productCard.tsx";
import ProductPage from "./productPage.tsx";


type ProductProps = {
    id: number;
    img: string;
    description: string;
};

interface Props {
    opt: boolean;
    setOpt: (arg0: boolean) => void;
}

const AccountsSection = ({
    opt,
    setOpt,
}: Props) => {

    // let [items, setItems] = useState<ProductProps[]>([]);
    const [uri, setUri] = useState("");
    const items = ([
        { id: 0, img: "/avatars/ten.png", description: "Chronos Chronos Chronos Chronos" },
    ]);

    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-cover bg-center py-16 md:py-20 lg:py-20"
        >
            <div className="grid grid-cols-3 gap-10 lg:max-w-[1200px] lg:grid-rows-1">
                {
                    opt && <>
                        <ProductPage uri={uri} setOpt={setOpt} />
                    </>
                }
                {
                    !opt && <>
                        {items.map((item: ProductProps, i) => (
                            <ProductCard
                                key={i}
                                id={item.id}
                                img={item.img}
                                description={item.description}
                                setUri={setUri} setOpt={setOpt}
                            />
                        ))}
                    </>
                }

            </div>
        </section>
    );
};

export default AccountsSection;
