require('./IndexRoute.css');

import * as React from 'react';
import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import { FilmEntity } from '../../entities/FilmEntity';
import { IndexModel } from '../../models/IndexModel';
import { IndexModelFactory } from '../../models/IndexModelFactory';

import { IndexRouteProps } from './IndexRouteProps';
import { IndexRouteState } from './IndexRouteState';

class IndexRoute extends React.Component<IndexRouteProps, IndexRouteState> {
    private _model: IndexModel;

    public constructor(props: IndexRouteProps) {
        super(props);
        this.state = {
            isLoading: true,
            films:     []
        };

        this._model = IndexModelFactory.create();
    }

    public async componentDidMount() {
        try {
            const films = await this._model.getFilms();
            this.setState({isLoading: false, films: films});
        }
        catch(e) {
            const err: Error = e;
            console.log(err);
        }
    };

    public render() {
        if(this.state.isLoading) {
            return (
                <SpinLoader/>
            );
        }

        return (
            <div className='container IndexRoute'>
                <Header />

                <div className='main'>
                    <div className='row'>
                        <div className='sm-6 sm-offset-3 card'>
                            <div className='card-header'>
                                <h2>Films</h2>
                            </div>

                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-condensed'>
                                        <thead>
                                            <tr>
                                                <th className='text-center'>Episode</th>
                                                <th>Name</th>
                                                <th className='text-center'>Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>{ this.getEpisodes() }</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private getEpisodes = () => {
        const films = this.state.films;

        return (
            films.map((film: FilmEntity) => {
                const episodeId   = film.getEpisodeId();
                const title       = film.getTitle();
                const releaseDate = new Date(Date.parse(film.getReleaseDate()));
                const year = releaseDate.getFullYear();

                return (
                    <tr>
                        <td className='text-center'>{episodeId}</td>
                        <td><a href='#'>{title}</a></td>
                        <td className='text-center'>{year}</td>
                    </tr>
                );
            })
        );
    };
}

export default IndexRoute;