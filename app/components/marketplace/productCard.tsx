import React from "react";
import { createLightNode, Protocols, waitForRemotePeer, createEncoder, createDecoder } from "@waku/sdk";
import protobuf from "protobufjs";
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

    const waaaku = async () => {
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
                <strong id="text-ext">Lorem ipsum</strong>
                <strong id="text-border">Lorem ipsum</strong>
                <button className="buy-button" onClick={showProduct}>BUY</button>

            </div>
        </>
    );
};

export default ProductCard;
