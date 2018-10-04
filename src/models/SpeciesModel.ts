import { Gateways } from '../gateways/Gateways';
import { SpeciesEntity } from '../entities/SpeciesEntity';

export class SpeciesModel {
    private _gateways: Gateways;
    private _species:  SpeciesEntity;

    public constructor(gateways: Gateways) {
        this._gateways = gateways;
    }

    public async loadData(id: number) {
        const speciesGateway = this._gateways.speciesGateway;
        const species        = await speciesGateway.retrieveSpecies(`https://swapi.co/api/species/${id}/`);
        this._species        = species;
    }

    public getSpecies(): SpeciesEntity {
        return this._species;
    }
}