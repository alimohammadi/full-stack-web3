const { ethers } = require("ethers");

document.getElementById("connect").addEventListener("click", async () => {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log("Wallet connected");
    console.log(await ethereum.request({ method: "eth_accounts" }));
  }
});

window.execute = async function execute() {
  // address
  // contract ABI(blueprint to interact with contract)
  // function
  // node connection => Metamask
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const abi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_favoriteNumber",
          type: "uint256",
        },
      ],
      name: "addPerson",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "nameToFavoriteNumber",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "people",
      outputs: [
        {
          internalType: "uint256",
          name: "favoriteNumber",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "retrieve",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_favoriteNumber",
          type: "uint256",
        },
      ],
      name: "store",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner(); // this is going to get the connected account
  const contract = new ethers.Contract(contractAddress, abi, signer);

  await contract.store(42);
};

window.addEventListener("load", async () => {
  if (typeof window.ethereum !== "undefined") {
    console.log("We see MetaMask!");
    await window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    console.log("MetaMask not found");
  }
});
