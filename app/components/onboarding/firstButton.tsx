import "./firstButton.css";

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

    const connectWallet = async () => {
        setPage(2);
        // if(NewPlayer) {
        //     setPage(2)
        // }
        // if(OldPlayer) {
        //     setPage(3)
        // }
        // console.log("Wallet")
    };

    return (
        <>
            <button className="sbutton" onClick={() => connectWallet()}>
                {txt}
            </button>
        </>
    );
};

export default FirstButton;
