import React from "react";
import "./productCard.css";
import AnimatedBody from "../../animations/AnimatedBody.tsx";
import AnimatedTitle from "../../animations/AnimatedTitle.tsx";
import { createLightNode, Protocols, waitForRemotePeer, createEncoder, createDecoder } from "@waku/sdk";
import protobuf from "protobufjs";

type ProductProps = {
    uri: string;
    setOpt: (arg0: boolean) => void;
};

const ProductPage = ({
    uri,
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

    const goBack = () => {
        setOpt(false);
    };

    return (
        <>
            <div>
                <iframe title="account" src="http://localhost:3000/0x26727ed4f5ba61d3772d1575bca011ae3aef5d36/1/1" width={500} height={500} style={{ borderRadius: "2%" }}></iframe>
                <div
                    className={`absolute text-white right-0 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4 mb-10  md:mb-16 lg:mb-14 `}
                >
                    <AnimatedTitle
                        text="Let's start the training"
                        className={
                            "ml-72 mt-[-10%] max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
                        }
                        wordSpace={"mr-[0.25em]"}
                        charSpace={"-mr-[0.01em]"}
                    />
                    <AnimatedBody
                        text="You have been chosen to lead the resistance against the Vanguard"
                        className={
                            "ml-72 mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
                        }
                    />
                    <div> Past Bids</div>
                    <div className="flex">
                        <button className="sbutton ml-72 mt-16" onClick={waaaku}>BUY</button>
                        <button className="sbutton ml-8 mt-16" onClick={goBack}>BACK</button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default ProductPage;
