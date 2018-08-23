export class CharactersGateway {
    private readonly _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;

    public constructor(baseApi: string) {
        this._api = baseApi + 'characters/';
        this._axiosConfig = { timeout: 5000 };
        console.log(this._api);
    }


}