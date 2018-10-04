import { Gateways } from '../gateways/Gateways';

export class SpeciesModel {
    private _gateways: Gateways;

    public constructor(gateways: Gateways) {
        this._gateways = gateways;
    }
}