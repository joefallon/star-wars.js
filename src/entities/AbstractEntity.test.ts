import * as assert from 'assert';
import { AbstractEntityTestable } from './AbstractEntityTestable';

describe('AbstractEntity', () => {
    describe('#getIdFromUrl', () => {
        it('returns id when url is valid', () => {
            const url = 'https://swapi.co/api/people/20/';
            const id  = AbstractEntityTestable.getIdFromUrl(url);
            assert.strictEqual(id, 20);
        });

        it('returns 0 when url is invalid', () => {
            const url = 'https://swapi.co/api/people/20';
            const id  = AbstractEntityTestable.getIdFromUrl(url);
            assert.strictEqual(id, 0);
        });

        it('returns 0 when url is empty', () => {
            const url = '';
            const id  = AbstractEntityTestable.getIdFromUrl(url);
            assert.strictEqual(id, 0);
        });
    });
});