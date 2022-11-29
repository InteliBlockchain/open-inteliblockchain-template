import { ethers } from 'ethers'
import Contract from '../../backend/build/contracts/NFTsFactory.json'

export const createNFT = async (tokenURI: string, contractAddress: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contractInstance = new ethers.Contract(
        Contract.networks[5].address,
        Contract.abi,
        provider
    )
    await contractInstance.createNFT('teste')
}

export const readNFTs = (wallet: string, contractAddress: string) => {
    console.log(wallet, contractAddress)

    return { wallet, contractAddress }
}

export const transferNFT = async (wallet: string, contractAddress: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contractInstance = new ethers.Contract(
        Contract.networks[5].address,
        Contract.abi,
        provider
    )
    await contractInstance.createNFT('teste')

    return { wallet, contractAddress }
}

export const burnNFT = (wallet: string, contractAddress: string) => {
    console.log(wallet, contractAddress)

    return { wallet, contractAddress }
}
