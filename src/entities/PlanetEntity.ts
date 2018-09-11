export default class PlanetEntity {
    private _url: string;
    private _created: string;
    private _updated: string;

    private _name:                  string;
    private _rotationPeriodInDays:  number;
    private _orbitalPeriodInDays:   number;
    private _diameterInKilometers:  number;
    private _climate:               string;
    private _gravity:               string;
    private _terrain:               string;
    private _surfaceWaterPercent:   number;
    private _population:            number;
    private _residentCharacterUrls: string[];
    private _filmUrls:              string[];
    
    public constructor() {
        this._climate               = '';
        this._created               = '';
        this._diameterInKilometers  = 0;
        this._filmUrls              = [];
        this._gravity               = '';
        this._name                  = '';
        this._orbitalPeriodInDays   = 0;
        this._population            = 0;
        this._residentCharacterUrls = [];
        this._rotationPeriodInDays  = 0;
        this._surfaceWaterPercent   = 0;
        this._terrain               = '';
        this._updated               = '';
        this._url                   = '';
    }

    public getUrl(): string {
        return this._url;
    }

    public setUrl(value: string) {
        this._url = value;
    }

    public getCreated(): string {
        return this._created;
    }

    public setCreated(value: string) {
        this._created = value;
    }

    public getUpdated(): string {
        return this._updated;
    }

    public setUpdated(value: string) {
        this._updated = value;
    }

    public getName(): string {
        return this._name;
    }

    public setName(value: string) {
        this._name = value;
    }

    public getRotationPeriodInDays(): number {
        return this._rotationPeriodInDays;
    }

    public setRotationPeriodInDays(value: number) {
        this._rotationPeriodInDays = value;
    }

    public getOrbitalPeriodInDays(): number {
        return this._orbitalPeriodInDays;
    }

    public setOrbitalPeriodInDays(value: number) {
        this._orbitalPeriodInDays = value;
    }

    public getDiameterInKilometers(): number {
        return this._diameterInKilometers;
    }

    public setDiameterInKilometers(value: number) {
        this._diameterInKilometers = value;
    }

    public getClimate(): string {
        return this._climate;
    }

    public setClimate(value: string) {
        this._climate = value;
    }

    public getGravity(): string {
        return this._gravity;
    }

    public setGravity(value: string) {
        this._gravity = value;
    }

    public getTerrain(): string {
        return this._terrain;
    }

    public setTerrain(value: string) {
        this._terrain = value;
    }

    public getSurfaceWaterPercent(): number {
        return this._surfaceWaterPercent;
    }

    public setSurfaceWaterPercent(value: number) {
        this._surfaceWaterPercent = value;
    }

    public getPopulation(): number {
        return this._population;
    }

    public setPopulation(value: number) {
        this._population = value;
    }

    public getResidentCharacterUrls(): string[] {
        return this._residentCharacterUrls;
    }

    public setResidentCharacterUrls(value: string[]) {
        this._residentCharacterUrls = value;
    }

    public getFilmUrls(): string[] {
        return this._filmUrls;
    }

    public setFilmUrls(value: string[]) {
        this._filmUrls = value;
    }
}