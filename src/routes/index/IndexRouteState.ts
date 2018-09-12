import { FilmEntity } from '../../entities/FilmEntity';

export interface IndexRouteState {
    isLoading: boolean,
    films:     FilmEntity[],
    tableData: any[]
}