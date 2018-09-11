export class CharacterEntity {
    private _url:                 string;
    private _name:                string;
    private _heightInCentimeters: number;
    private _massInKilograms:     number;
    private _hairColor:           string;
    private _skinColor:           string;
    private _eyeColor:            string;
    private _birthYear:           string;
    private _gender:              string;
    private _homePlanetUrl:       string;
    private _speciesUrl:          string[];
    private _filmUrls:            string[];
    private _vehicleUrls:         string[];
    private _starshipUrls:        string[];
    private _created:             string;
    private _updated:             string;

    public constructor() {
        this._birthYear           = '';
        this._created             = '';
        this._eyeColor            = '';
        this._filmUrls            = [];
        this._gender              = '';
        this._hairColor           = '';
        this._heightInCentimeters = 0;
        this._homePlanetUrl       = '';
        this._massInKilograms     = 0;
        this._name                = '';
        this._skinColor           = '';
        this._speciesUrl          = [];
        this._starshipUrls        = [];
        this._updated             = '';
        this._url                 = '';
        this._vehicleUrls         = [];
    }

    public getUrl(): string {
        return this._url;
    }

    public setUrl(value: string) {
        this._url = value;
    }

    public getName(): string {
        return this._name;
    }

    public setName(value: string) {
        this._name = value;
    }

    public getHeightInCentimeters(): number {
        return this._heightInCentimeters;
    }

    public setHeightInCentimeters(value: number) {
        this._heightInCentimeters = value;
    }

    public getMassInKilograms(): number {
        return this._massInKilograms;
    }

    public setMassInKilograms(value: number) {
        this._massInKilograms = value;
    }

    public getHairColor(): string {
        return this._hairColor;
    }

    public setHairColor(value: string) {
        this._hairColor = value;
    }

    public getSkinColor(): string {
        return this._skinColor;
    }

    public setSkinColor(value: string) {
        this._skinColor = value;
    }

    public getEyeColor(): string {
        return this._eyeColor;
    }

    public setEyeColor(value: string) {
        this._eyeColor = value;
    }

    public getBirthYear(): string {
        return this._birthYear;
    }

    public setBirthYear(value: string) {
        this._birthYear = value;
    }

    public getGender(): string {
        return this._gender;
    }

    public setGender(value: string) {
        this._gender = value;
    }

    public getHomePlanetUrl(): string {
        return this._homePlanetUrl;
    }

    public setHomePlanetUrl(value: string) {
        this._homePlanetUrl = value;
    }

    public getFilmUrls(): string[] {
        return this._filmUrls;
    }

    public setFilmUrls(value: string[]) {
        this._filmUrls = value;
    }

    public getSpeciesUrls(): string[] {
        return this._speciesUrl;
    }

    public setSpeciesUrls(value: string[]) {
        this._speciesUrl = value;
    }

    public getVehicleUrls(): string[] {
        return this._vehicleUrls;
    }

    public setVehicleUrls(value: string[]) {
        this._vehicleUrls = value;
    }

    public getStarshipUrls(): string[] {
        return this._starshipUrls;
    }

    public setStarshipUrls(value: string[]) {
        this._starshipUrls = value;
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
}