export class SpeciesEntity {
    private _url:                        string;
    private _created:                    string;
    private _updated:                    string;

    private _name:                       string;
    private _classification:             string;
    private _designation:                string;
    private _averageHeightInCentimeters: number;
    private _skinColor:                  string;
    private _hairColor:                  string;
    private _eyeColor:                   string;
    private _averageLifespanInYears:     number;
    private _homePlanetUrl:              string;
    private _characterUrls:              string[];
    private _filmUrls:                   string[];
    
    public constructor() {
        this._averageHeightInCentimeters = 0;
        this._averageLifespanInYears     = 0;
        this._characterUrls              = [];
        this._classification             = '';
        this._created                    = '';
        this._designation                = '';
        this._eyeColor                   = '';
        this._filmUrls                   = [];
        this._hairColor                  = '';
        this._homePlanetUrl              = '';
        this._name                       = '';
        this._skinColor                  = '';
        this._updated                    = '';
        this._url                        = '';
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

    public getClassification(): string {
        return this._classification;
    }

    public setClassification(value: string) {
        this._classification = value;
    }

    public getDesignation(): string {
        return this._designation;
    }

    public setDesignation(value: string) {
        this._designation = value;
    }

    public getAverageHeightInCentimeters(): number {
        return this._averageHeightInCentimeters;
    }

    public setAverageHeightInCentimeters(value: number) {
        this._averageHeightInCentimeters = value;
    }

    public getSkinColor(): string {
        return this._skinColor;
    }

    public setSkinColor(value: string) {
        this._skinColor = value;
    }

    public getHairColor(): string {
        return this._hairColor;
    }

    public setHairColor(value: string) {
        this._hairColor = value;
    }

    public getEyeColor(): string {
        return this._eyeColor;
    }

    public setEyeColor(value: string) {
        this._eyeColor = value;
    }

    public getAverageLifespanInYears(): number {
        return this._averageLifespanInYears;
    }

    public setAverageLifespanInYears(value: number) {
        this._averageLifespanInYears = value;
    }

    public getHomePlanetUrl(): string {
        return this._homePlanetUrl;
    }

    public setHomePlanetUrl(value: string) {
        this._homePlanetUrl = value;
    }

    public getCharacterUrls(): string[] {
        return this._characterUrls;
    }

    public setCharacterUrls(value: string[]) {
        this._characterUrls = value;
    }

    public getFilmUrls(): string[] {
        return this._filmUrls;
    }

    public setFilmUrls(value: string[]) {
        this._filmUrls = value;
    }
}