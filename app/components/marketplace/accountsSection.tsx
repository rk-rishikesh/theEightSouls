import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./productCard.tsx";
import ProductPage from "./productPage.tsx";
import { createLightNode, Protocols, waitForRemotePeer, createEncoder, createDecoder } from "@waku/sdk";
import protobuf from "protobufjs";

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

    const selectAvatar = async () => {
        const node = await createLightNode({ defaultBootstrap: true });
        await node.start();


        await waitForRemotePeer(node, [Protocols.Store]);

        // 2

        // Choose a content topic
        const contentTopic = "/light-guide/1/message/proto";

        // Create a message encoder and decoder
        const encoder = createEncoder({ contentTopic });
        const decoder = createDecoder(contentTopic);

        //3

        // Create a message structure using Protobuf
        const ChatMessage = new protobuf.Type("ChatMessage")
            .add(new protobuf.Field("timestamp", 1, "uint64"))
            .add(new protobuf.Field("sender", 2, "string"))
            .add(new protobuf.Field("message", 3, "string"));


        // Create a new message object
        const wakuMessage = ChatMessage.create({
            timestamp: Date.now(),
            sender: "Alice",
            message: "Hello, World!",
        });

        // Serialise the message using Protobuf
        const serialisedMessage = ChatMessage.encode(wakuMessage).finish();

        // Send the message using Light Push
        await node.lightPush.send(encoder, {
            payload: serialisedMessage,
        });

        // Create the callback function
        const callback = (wakuMessage: any) => {
            // Render the message/payload in your application
            console.log(wakuMessage);
        };

        // Query the Store peer
        await node.store.queryWithOrderedCallback(
            [decoder],
            callback,
        );


        // Create the store query
        const storeQuery = node.store.queryGenerator([decoder]);

        // Process the messages
        for await (const messagesPromises of storeQuery) {
            // Fulfil the messages promises
            const messages = await Promise.all(messagesPromises
                .map(async (p) => {
                    const msg = await p;
                    // Render the message/payload in your application
                    console.log(msg);
                })
            );
        }
    };

    useEffect(() => {
        const getData = async () => {
            setItems([
                { id: 0, img: "/avatars/one.png", description: "account account account account" },
                { id: 1, img: "/avatars/two.png", description: "account account account account" },
                { id: 2, img: "/avatars/three.png", description: "account account account account" },
                { id: 3, img: "/avatars/four.png", description: "account account account account" },
                { id: 4, img: "/avatars/five.png", description: "account account account account" },
                { id: 5, img: "/avatars/six.png", description: "account account account account" },
            ]);
        };
        getData();



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
