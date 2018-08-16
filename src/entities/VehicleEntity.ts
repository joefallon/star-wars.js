export class VehicleEntity {
    private _url:     string;
    private _created: string;
    private _updated: string;
    
    private _name: string;
    private _model: string;
    private _manufacturer: string;
    private _costInCredits: number;
    private _lengthInMeters: number;
    private _maxAtmospheringSpeedInKPH: number;
    private _crewCount: number;
    private _passengerCount: number;
    private _cargoCapacityInKilograms: number;
    private _consumables: string;
    private _vehicleClass: string;
    private _pilotCharacterUrls: string[];
    private _filmUrls: string[];
    
    public constructor() {
        this._cargoCapacityInKilograms  = 0;
        this._consumables               = '';
        this._costInCredits             = 0;
        this._created                   = '';
        this._crewCount                 = 0;
        this._filmUrls                  = [];
        this._lengthInMeters            = 0;
        this._manufacturer              = '';
        this._maxAtmospheringSpeedInKPH = 0;
        this._model                     = '';
        this._name                      = '';
        this._passengerCount            = 0;
        this._pilotCharacterUrls        = [];
        this._updated                   = '';
        this._url                       = '';
        this._vehicleClass              = '';
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

    public getModel(): string {
        return this._model;
    }

    public setModel(value: string) {
        this._model = value;
    }

    public getManufacturer(): string {
        return this._manufacturer;
    }

    public setManufacturer(value: string) {
        this._manufacturer = value;
    }

    public getCostInCredits(): number {
        return this._costInCredits;
    }

    public setCostInCredits(value: number) {
        this._costInCredits = value;
    }

    public getLengthInMeters(): number {
        return this._lengthInMeters;
    }

    public setLengthInMeters(value: number) {
        this._lengthInMeters = value;
    }

    public getMaxAtmospheringSpeedInKPH(): number {
        return this._maxAtmospheringSpeedInKPH;
    }

    public setMaxAtmospheringSpeedInKPH(value: number) {
        this._maxAtmospheringSpeedInKPH = value;
    }

    public getCrewCount(): number {
        return this._crewCount;
    }

    public setCrewCount(value: number) {
        this._crewCount = value;
    }

    public getPassengerCount(): number {
        return this._passengerCount;
    }

    public setPassengerCount(value: number) {
        this._passengerCount = value;
    }

    public getCargoCapacityInKilograms(): number {
        return this._cargoCapacityInKilograms;
    }

    public setCargoCapacityInKilograms(value: number) {
        this._cargoCapacityInKilograms = value;
    }

    public getConsumables(): string {
        return this._consumables;
    }

    public setConsumables(value: string) {
        this._consumables = value;
    }

    public getVehicleClass(): string {
        return this._vehicleClass;
    }

    public setVehicleClass(value: string) {
        this._vehicleClass = value;
    }

    public getPilotCharacterUrls(): string[] {
        return this._pilotCharacterUrls;
    }

    public setPilotCharacterUrls(value: string[]) {
        this._pilotCharacterUrls = value;
    }

    public getFilmUrls(): string[] {
        return this._filmUrls;
    }

    public setFilmUrls(value: string[]) {
        this._filmUrls = value;
    }
}