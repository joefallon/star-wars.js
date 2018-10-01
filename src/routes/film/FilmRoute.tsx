require('./FilmRoute.css');
import * as React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { CharacterEntity } from '../../entities/CharacterEntity';
import { FilmModelFactory } from '../../models/FilmModelFactory';
import { FilmRouteProps } from './FilmRouteProps';
import { FilmRouteState } from './FilmRouteState';
import { Header } from '../../components/header/Header';
import { PlanetEntity } from '../../entities/PlanetEntity';
import { SpeciesEntity } from '../../entities/SpeciesEntity';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import { StarshipEntity } from '../../entities/StarshipEntity';
import { VehicleEntity } from '../../entities/VehicleEntity';

class FilmRoute extends React.Component<FilmRouteProps, FilmRouteState> {

    public constructor(props: FilmRouteProps) {
        super(props);

        this.state = {
            isLoading: true,
            episodeId: props.match.params['id'],
            model:     props.model ? props.model : FilmModelFactory.create()
        };
    }

    public async componentDidMount() {
        try {
            const episodeId = this.state.episodeId;
            const model     = this.state.model;
            await model.loadFilmData(episodeId);

            const film       = model.getFilm();
            const characters = model.getCharacters();
            const vehicles   = model.getVehicles();
            const starships  = model.getStarships();
            const planets    = model.getPlanets();
            const species    = model.getSpecies();

            this.setState({
                isLoading:  false,
                film:       film,
                characters: characters,
                vehicles:   vehicles,
                starships:  starships,
                planets:    planets,
                species:    species
            });
        }
        catch(e) {
            const err: Error = e;
            console.log(err);
        }
    }

    public render() {
        if(this.state.isLoading) {
            return (<SpinLoader />);
        }

        const film = this.state.film;

        return (
            <div className='container FilmRoute'>
                <Header />

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>{film.getTitle()}</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <strong>Episode: </strong>
                                    <span className='episode-id'>{film.getEpisodeId()}</span>
                                </div>
                                <div>
                                    <strong>Release Date: </strong>
                                    <span className='release-date'>{film.getReleaseDate()}</span>
                                </div>
                                <div>
                                    <strong>Director: </strong>
                                    <span className='director'>{film.getDirector()}</span>
                                </div>
                                <div>
                                    <strong>Producer: </strong>
                                    <span className='producer'>{film.getProducer()}</span>
                                </div>

                                <h3>Opening</h3>

                                <p className='opening-crawl'>{film.getOpeningCrawl()}</p>

                                <h3>Characters</h3>
                                <div>{this.getCharacters()}</div>

                                <h3>Planets</h3>
                                <div>{this.getPlanets()}</div>

                                <h3>Starships</h3>
                                <div>{this.getStarships()}</div>

                                <h3>Vehicles</h3>
                                <div>{this.getVehicles()}</div>

                                <h3>Species</h3>
                                <div>{this.getSpecies()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private getCharacters = (): ReactNode => {
        const characters = this.state.characters;

        return (
              <ul>
                  {characters.map((character: CharacterEntity) => {
                      const url = character.getUrl();
                      const id  = FilmRoute.getIdFromUrl(url);

                      return (
                          <li key={id} className='characters'>
                              <Link to={'/character/' + id}>{character.getName()}</Link>
                          </li>
                      );
                  })}
              </ul>
        );
    };

    private getPlanets(): ReactNode {
        const planets = this.state.planets;

        return (
            <ul>
                {planets.map((planet: PlanetEntity) => {
                    const url = planet.getUrl();
                    const id  = FilmRoute.getIdFromUrl(url);

                    return (
                        <li key={id} className='planets'>
                            <Link to={'/planet/' + id}>{planet.getName()}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    }

    private getStarships(): ReactNode {
        const starships = this.state.starships;

        return (
            <ul>
                {starships.map((starship: StarshipEntity) => {
                    const url = starship.getUrl();
                    const id  = FilmRoute.getIdFromUrl(url);

                    return (
                        <li key={id} className='starships'>
                            <Link to={'/starship/' + id}>{starship.getName()}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    }

    private getVehicles(): ReactNode {
        const vehicles = this.state.vehicles;

        return (
            <ul>
                {vehicles.map((vehicle: VehicleEntity) => {
                    const url = vehicle.getUrl();
                    const id  = FilmRoute.getIdFromUrl(url);

                    return (
                        <li key={id} className='vehicles'>
                            <Link to={'/vehicle/' + id}>{vehicle.getName()}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    }

    private getSpecies(): ReactNode {
        const species = this.state.species;

        return (
            <ul>
                {species.map((singleSpecies: SpeciesEntity) => {
                    const url = singleSpecies.getUrl();
                    const id  = FilmRoute.getIdFromUrl(url);

                    return (
                        <li key={id} className='species'>
                            <Link to={'/species/' + id}>{singleSpecies.getName()}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    }

    private static getIdFromUrl(url: string): string {
        const parts = url.split('/');
        const id    = parts[parts.length - 2];

        return id;
    }
}

export default FilmRoute;