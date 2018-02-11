import { alerts } from 'src/utils';
import { fetch } from 'src/lib';
import FetchMock from 'react-native-fetch-mock';

const CONNECTION_INFO_TYPE_NONE = 'none';

// Mock api
global.fetch = new FetchMock(require('../../mocks')).fetch;

let connectionInfo;

export const setConnectionInfo = info => {
    connectionInfo = info
};

export const isConnected = () => !connectionInfo || connectionInfo.type !== CONNECTION_INFO_TYPE_NONE;

export const sendRequest = (...args) => {
    if (!isConnected()) {
        alerts.showNetworkErrorAlert();

        throw new Error('Not connected');
    }

    return fetch(...args)
};