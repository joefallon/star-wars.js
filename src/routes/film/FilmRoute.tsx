require('./FilmRoute.css');
import { ReactNode } from 'react';
import * as React from 'react';

import { FilmRouteProps } from './FilmRouteProps';
import { FilmRouteState } from './FilmRouteState';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import { FilmModelFactory } from '../../models/FilmModelFactory';

class FilmRoute extends React.Component<FilmRouteProps, FilmRouteState> {

    public constructor(props: FilmRouteProps) {
        super(props);

        this.state = {
            isLoading: true,
            episodeId: props.match.params['episodeId'],
            model:     FilmModelFactory.create()
        };

        console.log(this.state);
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
            <div className={'container FilmRoute'}>
                <Header />

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>Film Name Here</h2>
                            </div>
                            <div className='card-body'>
                                <div><strong>Title:</strong> {film.getTitle()}</div>
                                <div><strong>Episode:</strong> {film.getEpisodeId()}</div>
                                <div><strong>Release Date:</strong> {film.getReleaseDate()}</div>
                                <div><strong>Director:</strong> {film.getDirector()}</div>
                                <div><strong>Producer:</strong> {film.getProducer()}</div>

                                <h3>Opening</h3>

                                <p>{film.getOpeningCrawl()}</p>

                                <h3>Characters</h3>

                                <div>
                                    {this.getCharacters()}
                                </div>
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

              </ul>
        );
    };
}

export default FilmRoute;