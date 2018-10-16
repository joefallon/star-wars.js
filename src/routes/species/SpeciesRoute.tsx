require('./SpeciesRoute.css');

import * as React from 'react';
import { Link } from 'react-router-dom';

import { SpeciesModelFactory } from '../../models/SpeciesModelFactory';
import { SpeciesRouteProps } from './SpeciesRouteProps';
import { SpeciesRouteState } from './SpeciesRouteState';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';

import { CharacterEntity } from '../../entities/CharacterEntity';
import { FilmEntity } from '../../entities/FilmEntity';

class SpeciesRoute extends React.Component<SpeciesRouteProps, SpeciesRouteState> {

    public constructor(props: SpeciesRouteProps) {
        super(props);
        document.title = 'Species Info | API Explorer';
        this.state = {
            isLoading: true,
            id:        parseInt(props.match.params['id'], 10),
            model:     props.model ? props.model : SpeciesModelFactory.create()
        };
    }

    public async componentDidMount() {
        const id    = this.state.id;
        const model = this.state.model;
        await model.loadData(id);
        this.setState({isLoading: false});
    }

    public render() {
        if(this.state.isLoading) {
            return (
                <SpinLoader />
            );
        }

        const model   = this.state.model;
        const species = model.getSpecies();

        return (
            <div className='container SpeciesRoute'>
                <Header/>

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>{species.getName()}</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <strong>Classification: </strong>
                                    <span className='classification'>{species.getClassification()}</span>
                                </div>

                                <div>
                                    <strong>Designation: </strong>
                                    <span className='designation'>{species.getDesignation()}</span>
                                </div>

                                <div>
                                    <strong>Average Height: </strong>
                                    <span className='average-height'>
                                        {species.getAverageHeightInCentimeters()} cm
                                    </span>
                                </div>

                                <div>
                                    <strong>Skin Colors: </strong>
                                    <span className='skin-colors'>{species.getSkinColor()}</span>
                                </div>

                                <div>
                                    <strong>Hair Colors: </strong>
                                    <span className='hair-colors'>{species.getHairColor()}</span>
                                </div>

                                <div>
                                    <strong>Eye Colors: </strong>
                                    <span className='eye-colors'>{species.getEyeColor()}</span>
                                </div>

                                <div>
                                    <strong>Average Lifespan: </strong>
                                    <span className='average-lifespan'>
                                        {species.getAverageLifespanInYears()} years
                                    </span>
                                </div>

                                <div>
                                    <strong>Language: </strong>
                                    <span className='language'>{species.getLanguage()}</span>
                                </div>

                                <div>
                                    <strong>Homeworld: </strong>
                                    {this.getHomeWorldLink()}
                                </div>

                                <h3>Characters</h3>
                                <div>{this.getCharacters()}</div>

                                <h3>Films</h3>
                                <div>{this.getFilms()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private getCharacters() {
        const characters = this.state.model.getCharacters();

        return (
            <ul className='link-list'>
                {characters.map((character: CharacterEntity) => {
                    const id   = character.getId();
                    const name = character.getName();

                    return (
                        <li key={id} className='link-list-item character-item'>
                            <Link to={`/character/${id}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    }

    private getFilms() {
        const films = this.state.model.getFilms();

        return (
            <ul className='link-list'>
                {films.map((film: FilmEntity) => {
                    const id   = film.getId();
                    const name = film.getTitle();

                    return (
                        <li key={id} className='link-list-item film-item'>
                            <Link to={`/film/${id}`}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        );
    }

    private getHomeWorldLink() {
        const homeworld = this.state.model.getHomeworld();

        if(homeworld == null) {
            return (<>none</>);
        }

        const id   = homeworld.getId();
        const name = homeworld.getName();

        return (
            <Link to={`/planet/${id}`} className='homeworld'>{name}</Link>
        );
    }
}

export default SpeciesRoute;