import { AbstractEntity } from './AbstractEntity';

export class AbstractEntityTestable extends AbstractEntity {

    public static getIdFromUrl(url: string): number {
        return AbstractEntity.getIdFromUrl(url);
    }
}