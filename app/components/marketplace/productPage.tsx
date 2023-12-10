import React from "react";
import "./productCard.css";
import AnimatedBody from "../../animations/AnimatedBody.tsx";
import AnimatedTitle from "../../animations/AnimatedTitle.tsx";
import { createLightNode, Protocols, waitForRemotePeer, createEncoder, createDecoder } from "@waku/sdk";
import protobuf from "protobufjs";
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from "ethers";

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
        const contentTopic = "/toy-chat/" + 1 + "/huilong/proto";

        // Create a message encoder and decoder
        const encoder = createEncoder({ contentTopic });
        const decoder = createDecoder(contentTopic);

        //3



        // Create a message structure using Protobuf
        const ChatMessage = new protobuf.Type("ChatMessage")
            .add(new protobuf.Field("tokenID", 1, "uint64"))
            .add(new protobuf.Field("sender", 2, "string"))
            .add(new protobuf.Field("bidVal", 3, "uint64"));

        const provider = await detectEthereumProvider({ silent: true });
        console.log(provider);
        const ethereum: any = await window.ethereum;

        const signer = await new ethers.BrowserProvider(ethereum).getSigner();
        console.log(signer.address);


        // Create a new message object
        const wakuMessage = ChatMessage.create({
            tokenID: Date.now(),
            sender: signer.address,
            bidVal: "50 MATIC",
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
                <iframe title="account" src="https://accountframe.vercel.app/0xCB130af9A5902E19EeDCDc75248075829dd8a6A3/1/137?disableloading=true&logo=galverse" width={500} height={500} style={{ borderRadius: "2%" }}></iframe>
                <div
                    className={`absolute text-white right-0 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-60  lg:mr-4 mb-10  md:mb-16 lg:mb-14 `}
                >
                    <AnimatedTitle
                        text="Bid using Waku"
                        className={
                            "ml-72 mt-[-10%] max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
                        }
                        wordSpace={"mr-[0.25em]"}
                        charSpace={"-mr-[0.01em]"}
                    />
                    <AnimatedBody
                        text="Last Bid Was 50 MATIC, Bid for 51 MATIC"
                        className={
                            "ml-72 mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] "
                        }
                    />
                    
                    <div className="flex">
                        <button className="sbutton ml-72 mt-16" onClick={waaaku}>BID</button>
                        <button className="sbutton ml-8 mt-16" onClick={goBack}>BACK</button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default ProductPage;
