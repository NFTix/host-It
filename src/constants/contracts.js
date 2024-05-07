import { ethers } from "ethers";
import factoryAbi from "./factoryAbi.json";
import eventsAbi from "./eventsAbi.json";

export const getFactoryContract = (providerOrSigner) =>
    new ethers.Contract(
        process.env.REACT_APP_FACTORY_CONTRACT_ADDRESS,
        factoryAbi,
        providerOrSigner
    );

    export const getEventContract = (providerOrSigner, eventAddress) =>
    new ethers.Contract(
        eventAddress,
        eventsAbi,
        providerOrSigner
    );