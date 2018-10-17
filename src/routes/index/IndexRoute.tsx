require('./IndexRoute.css');
import 'react-table/react-table.css'

import * as React from 'react';
import { Link } from 'react-router-dom';
import ReactTable, { Column } from 'react-table';

import { IndexModel } from '../../models/IndexModel';
import { IndexModelFactory } from '../../models/IndexModelFactory';
import { IndexRouteProps } from './IndexRouteProps';
import { IndexRouteState } from './IndexRouteState';

import { Header } from '../../components/header/Header';
import { SpinLoader } from '../../components/spin-loader/SpinLoader';

import { FilmEntity } from '../../entities/FilmEntity';

class IndexRoute extends React.Component<IndexRouteProps, IndexRouteState> {
    private _model: IndexModel;

    public constructor(props: IndexRouteProps) {
        super(props);
        this.state = {
            isLoading: true,
            films:     [],
            tableData: []
        };

        document.title = 'API Explorer | Films';

        this._model = props.model ? props.model : IndexModelFactory.create();
    }

    public async componentDidMount() {
        try {
            const films     = await this._model.getFilms();
            const tableData = this.makeTableData(films);
            this.setState({isLoading: false, films: films, tableData: tableData});
        }
        catch(e) {
            const err: Error = e;
            console.log(err);
        }
    };

    private makeTableData(films: FilmEntity[]): any[] {
        const data = [];

        films.map((film: FilmEntity) => {
            const episodeId   = film.getEpisodeId();
            const title       = film.getTitle();
            const releaseDate = new Date(Date.parse(film.getReleaseDate()));
            const year        = releaseDate.getFullYear();

            data.push({
                'id':        film.getId(),
                'episodeId': episodeId,
                'title':     title,
                'year':      year,
                'filmUrl':   film.getUrl()
            });
        });

        return data;
    }

    public render() {
        if(this.state.isLoading) {
            return (
                <SpinLoader/>
            );
        }

        const columns: Column[]  = [
            {
                Header:   'Episode',
                accessor: 'episodeId',
                className: 'text-center episodeId'
            }, {
                Header:   'Title',
                accessor: 'title',
                Cell:     row => (<Link to={'/film/' + row['original']['id']}>{row['value']}</Link>)
            }, {
                Header:   'Year',
                accessor: 'year',
                className: 'text-center'
            }
        ];

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
                                <ReactTable data={this.state.tableData}
                                            columns={columns}
                                            showPagination={false}
                                            minRows={0}
                                            multiSort={false}
                                            resizable={false}
                                            className={'-striped -highlight'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default IndexRoute;