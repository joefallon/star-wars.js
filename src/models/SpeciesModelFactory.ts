import { SpeciesModel } from './SpeciesModel';

export class SpeciesModelFactory {

    public static create(): SpeciesModel {
        return new SpeciesModel();
    }
}