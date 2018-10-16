require('./CharacterRoute.css');

import * as React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { CharacterModelFactory } from '../../models/CharacterModelFactory';
import { CharacterRouteProps } from './CharacterRouteProps';
import { CharacterRouteState } from './CharacterRouteState';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';

import { SpeciesEntity } from '../../entities/SpeciesEntity';
import { StarshipEntity } from '../../entities/StarshipEntity';
import { VehicleEntity } from '../../entities/VehicleEntity';

class CharacterRoute extends React.Component<CharacterRouteProps, CharacterRouteState> {
    public constructor(props: CharacterRouteProps) {
        super(props);
        document.title = 'Character Info | API Explorer';

        this.state = {
            isLoading: true,
            id:        parseInt(props.match.params['id'], 10),
            model:     props.model ? props.model : CharacterModelFactory.create()
        };
    }

    public async componentDidMount() {
        try {
            const id    = this.state.id;
            const model = this.state.model;
            await model.loadCharacterInformation(id);

            this.setState({
                isLoading: false
            });
        }
        catch(e) {
            const err: Error = e;
            console.log(err);
        }
    }

    public render(): ReactNode {
        if(this.state.isLoading) {
            return (
                <SpinLoader />
            );
        }

        const model     = this.state.model;
        const character = model.getCharacter();

        return (
            <div className='container CharacterRoute'>
                <Header />

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>{character.getName()}</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <strong>Height: </strong>
                                    <span className='height'>{character.getHeightInCentimeters()} cm</span>
                                </div>

                                <div>
                                    <strong>Mass: </strong>
                                    <span className='mass'>{character.getMassInKilograms()} kg</span>
                                </div>

                                <div>
                                    <strong>Hair Color: </strong>
                                    <span className='hair-color'>{character.getHairColor()}</span>
                                </div>

                                <div>
                                    <strong>Skin Color: </strong>
                                    <span className='skin-color'>{character.getSkinColor()}</span>
                                </div>

                                <div>
                                    <strong>Eye Color: </strong>
                                    <span className='eye-color'>{character.getEyeColor()}</span>
                                </div>

                                <div>
                                    <strong>Birth Year: </strong>
                                    <span className='birth-year'>{character.getBirthYear()}</span>
                                </div>

                                <div>
                                    <strong>Gender: </strong>
                                    <span className='gender'>{character.getGender()}</span>
                                </div>

                                <div>
                                    <strong>Homeworld: </strong>{this.getPlanetLink()}
                                </div>

                                <h3>Films</h3>
                                <div>{this.getFilms()}</div>

                                <h3>Species</h3>
                                <div>{this.getSpecies()}</div>

                                <h3>Vehicles</h3>
                                <div>{this.getVehicles()}</div>

                                <h3>Starships</h3>
                                <div>{this.getStarships()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private getPlanetLink = () => {
        const homeworld = this.state.model.getHomeworld();
        const parts     = homeworld.getUrl().split('/');
        const id        = parts[parts.length - 2];

        const name = homeworld.getName();
        const url  = `/planet/${id}`;

        return (<Link to={url} className='homeworld'>{name}</Link>);
    };

    private getFilms = () => {
        const films = this.state.model.getFilms();

        return (
            <ul className='films'>
                {films.map((film) => {
                    const title = film.getTitle();
                    const id    = film.getId();

                    return (
                        <li key={id} className='film-item'>
                            <Link to={`/film/${id}`}>{title}</Link>
                        </li>
                    );
                })}

            </ul>
        );
    };

    private getSpecies = () => {
        const species = this.state.model.getSpecies();

        return (
            <ul className='species'>
                {species.map((singleSpecies: SpeciesEntity) => {
                    const name = singleSpecies.getName();
                    const id   = singleSpecies.getId();

                    return (
                        <li key=':id' className='species-item'>
                            <Link to={`/species/${id}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };

    private getVehicles = () => {
        const vehicles = this.state.model.getVehicles();

        return (
            <ul className='vehicles'>
                {vehicles.map((vehicle: VehicleEntity) => {
                    const name = vehicle.getName();
                    const id   = vehicle.getId();

                    return (
                        <li key={id} className='vehicle-item'>
                            <Link to={`/vehicle/${id}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };

    private getStarships = () => {
        const starships = this.state.model.getStarships();

        return (
            <ul className='starships'>
                {starships.map((starship: StarshipEntity) => {
                    const name = starship.getName();
                    const id   = starship.getId();

                    return (
                        <li key={id} className='starship-item'>
                            <Link to={`/starship/${id}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    };
}

export default CharacterRoute;