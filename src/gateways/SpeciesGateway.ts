import axios, { AxiosRequestConfig } from 'axios';
import { SpeciesEntity } from '../entities/SpeciesEntity';

export class SpeciesGateway {
    private _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;

    public constructor(baseApi: string) {
        this._api = baseApi + 'species/';
        this._axiosConfig = { timeout: 5000 };
    }

    public retrieveSpecies(url: string): Promise<SpeciesEntity> {
        return new Promise(async (resolve, reject) => {
            const response = await axios.get(url, this._axiosConfig);
            const data     = response.data;

            const species = new SpeciesEntity();
            species.setAverageHeightInCentimeters(parseFloat(data['average_height']));
            species.setAverageLifespanInYears(parseFloat(data['average_lifespan']));
            species.setCharacterUrls(data['people']);
            species.setClassification(data['classification']);
            species.setCreated(data['created']);
            species.setDesignation(data['designation']);
            species.setEyeColor(data['eye_colors']);
            species.setFilmUrls(data['']);
            species.setHairColor(data['hair_colors']);
            species.setHomePlanetUrl(data['homeworld']);
            species.setName(data['name']);
            species.setSkinColor(data['skin_colors']);
            species.setUpdated(data['edited']);
            species.setUrl(data['url']);

            // todo: add language to entity

            resolve(species);
        });
    }
}