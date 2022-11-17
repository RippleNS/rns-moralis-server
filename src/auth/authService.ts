import Moralis from 'moralis';

export interface RequestMessage {
    address: string;
    chain: string;
    networkType: string;
    domain: string;
    uri: string;
}

const STATEMENT = 'Please sign this message to confirm your identity.';
const EXPIRATION_TIME = '2023-01-01T00:00:00.000Z';
const TIMEOUT = 15;

export async function requestMessage({
                                         address,
                                         chain,
                                         networkType,
                                         domain,
                                         uri
                                     }: {
    address: string;
    chain: string;
    networkType: 'evm';
    domain: string;
    uri: string;
}) {
    const result = await Moralis.Auth.requestMessage({
        address,
        chain,
        networkType,
        domain,
        uri,
        statement: STATEMENT,
        expirationTime: EXPIRATION_TIME,
        timeout: TIMEOUT,
    });

    const {message} = result.toJSON();

    return message;
}
