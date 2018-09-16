import { SwapiHelpers } from '../domain/SwapiHelpers';

export abstract class AbstractEntity {

    protected static getIdFromUrl(url: string): number {
        return SwapiHelpers.getIdFromUrl(url);
    }
}
