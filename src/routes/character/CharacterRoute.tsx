require('./CharacterRoute.css');
import * as React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';
import CharacterModelFactory from '../../models/CharacterModelFactory';
import CharacterRouteProps from './CharacterRouteProps';
import CharacterRouteState from './CharacterRouteState';

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
                                    <strong>Homeworld: </strong> {this.getPlanetLink()}
                                </div>

                                <h3>Films</h3>

                                <div>
                                    <li key='id' className='films'>
                                        <Link to={'/film/:id'}>Example Film Name</Link>
                                    </li>
                                </div>

                                <h3>Species</h3>

                                <div>
                                    <li key='id' className='species'>
                                        <Link to={'/species/:id'}>Example Species Name</Link>
                                    </li>
                                </div>

                                <h3>Vehicles</h3>

                                <div>
                                    <li key='id' className='vehicles'>
                                        <Link to={'/vehicle/:id'}>Example Vehicle Name</Link>
                                    </li>
                                </div>

                                <h3>Starships</h3>

                                <div>
                                    <li key='id' className='starships'>
                                        <Link to={'/starship/:id'}>Example Starship Name</Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private getPlanetLink = () => {

        const name = 'Planet Name';
        const url  = '/planet/:id';

        return (<Link to={url} className='homeworld'>{name}</Link>);
    };
}

export default CharacterRoute;