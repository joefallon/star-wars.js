export default class FilmEntity {
    private _url:           string;
    private _title:         string;
    private _episodeId:     number;
    private _openingCrawl:  string;
    private _director:      string;
    private _producer:      string;
    private _releaseDate:   string;
    private _created:       string;
    private _updated:        string;
    private _characterUrls: string[];
    private _planetUrls:    string[];
    private _starshipUrls:  string[];
    private _vehicleUrls:   string[];
    private _speciesUrls:   string[];

    public constructor() {
        this._characterUrls = [];
        this._created       = '';
        this._director      = '';
        this._updated       = '';
        this._episodeId     = 0;
        this._openingCrawl  = '';
        this._planetUrls    = [];
        this._producer      = '';
        this._releaseDate   = '';
        this._speciesUrls   = [];
        this._starshipUrls  = [];
        this._title         = '';
        this._url           = '';
        this._vehicleUrls   = [];
    }

    public getTitle(): string {
        return this._title;
    }

    public setTitle(value: string) {
        this._title = value;
    }

    public getEpisodeId(): number {
        return this._episodeId;
    }

    public setEpisodeId(value: number) {
        this._episodeId = value;
    }

    public getOpeningCrawl(): string {
        return this._openingCrawl;
    }

    public setOpeningCrawl(value: string) {
        this._openingCrawl = value;
    }

    public getDirector(): string {
        return this._director;
    }

    public setDirector(value: string) {
        this._director = value;
    }

    public getProducer(): string {
        return this._producer;
    }

    public setProducer(value: string) {
        this._producer = value;
    }

    public getReleaseDate(): string {
        return this._releaseDate;
    }

    public setReleaseDate(value: string) {
        this._releaseDate = value;
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

    public getUrl(): string {
        return this._url;
    }

    public setUrl(value: string) {
        this._url = value;
    }

    public getCharacterUrls(): string[] {
        return this._characterUrls;
    }

    public setCharacterUrls(value: string[]) {
        this._characterUrls = value;
    }

    public getPlanetUrls(): string[] {
        return this._planetUrls;
    }

    public setPlanetUrls(value: string[]) {
        this._planetUrls = value;
    }

    public getStarshipUrls(): string[] {
        return this._starshipUrls;
    }

    public setStarshipUrls(value: string[]) {
        this._starshipUrls = value;
    }

    public getVehicleUrls(): string[] {
        return this._vehicleUrls;
    }

    public setVehicleUrls(value: string[]) {
        this._vehicleUrls = value;
    }

    public getSpeciesUrls(): string[] {
        return this._speciesUrls;
    }

    public setSpeciesUrls(value: string[]) {
        this._speciesUrls = value;
    }
}