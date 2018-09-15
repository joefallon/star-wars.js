import { FilmModel } from '../../models/FilmModel';
import { CharacterEntity } from '../../entities/CharacterEntity';
import { FilmEntity } from '../../entities/FilmEntity';
import { PlanetEntity } from '../../entities/PlanetEntity';
import { SpeciesEntity } from '../../entities/SpeciesEntity';
import StarshipEntity from '../../entities/StarshipEntity';
import VehicleEntity from '../../entities/VehicleEntity';

export interface FilmRouteState {
    isLoading:   boolean,
    episodeId:   number,
    model:       FilmModel,
    film?:       FilmEntity,
    characters?: CharacterEntity[],
    vehicles?:   VehicleEntity[],
    starships?:  StarshipEntity[],
    planets?:    PlanetEntity[],
    species?:    SpeciesEntity[]
}