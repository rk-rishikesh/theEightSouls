import "./firstButton.css";
import { useSDK } from "@metamask/sdk-react";
import detectEthereumProvider from '@metamask/detect-provider';
import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
interface Props {
    txt: string
    page: number;
    setPage: (arg0: number) => void;
}

const FirstButton = ({
    txt,
    page,
    setPage,
}: Props) => {

    const { sdk, connected, connecting, provider, chainId } = useSDK();
    const [account, setAccount] = useState<string>();

    const [hasProvider, setHasProvider] = useState<boolean | null>(null)
    const initialState = { accounts: [] }
    const [wallet, setWallet] = useState(initialState)

    useEffect(() => {
        const getProvider = async () => {
            const provider = await detectEthereumProvider({ silent: true })
            console.log(provider)
            // const ethereum:any = await window.ethereum;

            // const signer = await new ethers.BrowserProvider(ethereum).getSigner();
            // console.log(signer)
            setHasProvider(Boolean(provider)) // transform provider to true or false
        }

        getProvider()
    }, [])


    const updateWallet = async (accounts: any) => {
        setWallet({ accounts })
    }

    const handleConnect = async () => {
        let accounts = await window.ethereum?.request({
            method: "eth_requestAccounts",
        })
        updateWallet(accounts)
        console.log(wallet)
        setPage(2)
    }

    //const connectWallet = async () => {

    // if(NewPlayer) {
    //     setPage(2)
    // }
    // if(OldPlayer) {
    //     setPage(3)
    // }
    // console.log("Wallet")
    //};

    return (
        <>
            <button className="sbutton" onClick={() => handleConnect()}>
                {txt}
            </button>
        </>
    );
};

export default FirstButton;
