import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import ProductPage from "./productPage";

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

    const [items, setItems] = useState<ProductProps[]>([]);
    const [uri, setUri] = useState("");

    useEffect(() => {
        setItems([
            { id: 0, img: "/avatars/one.png", description: "account account account account" },
            { id: 1, img: "/avatars/two.png", description: "account account account account" },
            { id: 2, img: "/avatars/three.png", description: "account account account account" },
            { id: 3, img: "/avatars/four.png", description: "account account account account" },
            { id: 4, img: "/avatars/five.png", description: "account account account account" },
            { id: 5, img: "/avatars/six.png", description: "account account account account" },
        ]);
    });

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
