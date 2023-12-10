// import { fetchQuery } from "@airstack/airstack-react";

interface QueryResponse {
  data: Data;
  error: Error;
}

interface Data {
  Wallet: Wallet;
}

interface Error {
  message: string;
}

interface Wallet {
  socials: Social[];
  addresses: string[];
}

interface Social {
  dappName: "lens" | "farcaster";
  profileName: string;
}

const query = `
query MyQuery {
    TokenBalances(
      input: {
        filter: {
          owner: {
            _in: [
              "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
              "vitalik.eth"
              "lens/@vitalik"
              "fc_fname:vitalik"
            ]
          }
          tokenType: { _in: [ERC1155, ERC721] }
        }
        blockchain: polygon
        limit: 50
      }
    ) {
      TokenBalance {
        owner {
          addresses
          domains {
            name
            isPrimary
          }
          socials {
            profileName
            profileTokenId
            profileTokenIdHex
            userAssociatedAddresses
          }
          xmtp {
            isXMTPEnabled
          }
        }
        amount
        tokenAddress
        tokenId
        tokenType
        tokenNfts {
          contentValue {
            image {
              extraSmall
              small
              medium
              large
            }
          }
        }
      }
      pageInfo {
        nextCursor
        prevCursor
      }
    }
  }
`;

const main = async () => {
//   const { data, error }: QueryResponse = await fetchQuery(query);

//   if (error) {
//     throw new Error(error.message);
//   }

//   console.log(data);
};

main();