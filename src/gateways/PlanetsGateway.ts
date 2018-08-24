import axios, { AxiosRequestConfig } from 'axios';
import { PlanetEntity } from '../entities/PlanetEntity';

export class PlanetsGateway {
    private _api: string;
    private readonly _axiosConfig: AxiosRequestConfig;

    public constructor(baseApi: string) {
        this._api = baseApi + 'planets/';
        this._axiosConfig = { timeout: 5000 };
    }

    public retrievePlanet(url: string): Promise<PlanetEntity> {
        return new Promise(async (resolve, reject) => {
            const response = await axios.get(url, this._axiosConfig);
            const data = response.data;

            const planet = new PlanetEntity();
            planet.setClimate(data['climate']);
            planet.setCreated(data['created']);
            planet.setDiameterInKilometers(parseInt(data['diameter'], 10));
            planet.setFilmUrls(data['films']);
            planet.setGravity(data['gravity']);
            planet.setName(data['name']);
            planet.setOrbitalPeriodInDays(parseInt(data['orbital_period'], 10));
            planet.setPopulation(data['population']);
            planet.setResidentCharacterUrls(data['residents']);
            planet.setRotationPeriodInDays(parseInt(data['rotation_period'], 10));
            planet.setSurfaceWaterPercent(parseFloat(data['surface_water']));
            planet.setTerrain(data['terrain']);
            planet.setUpdated(data['edited']);
            planet.setUrl(data['url']);

            resolve(planet);
        });
    }
}