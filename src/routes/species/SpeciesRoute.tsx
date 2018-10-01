require('./SpeciesRoute.css');

import * as React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import { SpeciesModelFactory } from '../../models/SpeciesModelFactory';
import { SpeciesRouteProps } from './SpeciesRouteProps';
import { SpeciesRouteState } from './SpeciesRouteState';

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

    public componentDidMount() {
        this.setState({isLoading: false});
    }

    public render() {
        if(this.state.isLoading) {
            return (
                <SpinLoader />
            );
        }

        return (
            <div className='container SpeciesRoute'>
                <Header/>

                <div className='row'>
                    <div className='md-offset-3 md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>Species Planet Name</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <strong>Classification: </strong>
                                    <span className='classification'>classification</span>
                                </div>

                                <div>
                                    <strong>Designation: </strong>
                                    <span className='designation'>designation</span>
                                </div>

                                <div>
                                    <strong>Average Height: </strong>
                                    <span className='average-height'>xx cm</span>
                                </div>

                                <div>
                                    <strong>Skin Colors: </strong>
                                    <span className='skin-colors'>skin colors</span>
                                </div>

                                <div>
                                    <strong>Hair Colors: </strong>
                                    <span className='hair-colors'>hair colors</span>
                                </div>

                                <div>
                                    <strong>Eye Colors: </strong>
                                    <span className='eye-colors'>eye colors</span>
                                </div>

                                <div>
                                    <strong>Average Lifespan: </strong>
                                    <span className='average-lifespan'>average-lifespan</span>
                                </div>

                                <div>
                                    <strong>Language: </strong>
                                    <span className='language'>language</span>
                                </div>

                                <div>
                                    <strong>Homeworld: </strong>
                                    <Link to='/planet/:id'>homeworld</Link>
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
        return (null);
    }

    private getFilms() {
        return (null);
    }
}

export default SpeciesRoute;