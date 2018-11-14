import axios, { AxiosRequestConfig } from 'axios';
import { IronDB } from 'iron-db';

export class CachedGateway {
    private _axiosConfig: AxiosRequestConfig;

    public constructor(timeout: number) {
        this._axiosConfig = { timeout: timeout };
    }

    public async getRequest(url: string): Promise<any> {
        let cachedResponse: string | null = localStorage.getItem(url);
        let response = null;

        if(cachedResponse == null) {
            response = await axios.get(url, this._axiosConfig);
            localStorage.setItem(url, JSON.stringify(response));
        }
        else {
            response = JSON.parse(cachedResponse);
        }

        return response;
    }
}