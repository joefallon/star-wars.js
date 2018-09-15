var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AbstractEntity } from './AbstractEntity';
var PlanetEntity = /** @class */ (function (_super) {
    __extends(PlanetEntity, _super);
    function PlanetEntity() {
        var _this = _super.call(this) || this;
        _this._climate = '';
        _this._created = '';
        _this._diameterInKilometers = 0;
        _this._filmUrls = [];
        _this._gravity = '';
        _this._name = '';
        _this._orbitalPeriodInDays = 0;
        _this._population = 0;
        _this._residentCharacterUrls = [];
        _this._rotationPeriodInDays = 0;
        _this._surfaceWaterPercent = 0;
        _this._terrain = '';
        _this._updated = '';
        _this._url = '';
        return _this;
    }
    PlanetEntity.prototype.getId = function () {
        return AbstractEntity.getIdFromUrl(this._url);
    };
    PlanetEntity.prototype.getUrl = function () {
        return this._url;
    };
    PlanetEntity.prototype.setUrl = function (value) {
        this._url = value;
    };
    PlanetEntity.prototype.getCreated = function () {
        return this._created;
    };
    PlanetEntity.prototype.setCreated = function (value) {
        this._created = value;
    };
    PlanetEntity.prototype.getUpdated = function () {
        return this._updated;
    };
    PlanetEntity.prototype.setUpdated = function (value) {
        this._updated = value;
    };
    PlanetEntity.prototype.getName = function () {
        return this._name;
    };
    PlanetEntity.prototype.setName = function (value) {
        this._name = value;
    };
    PlanetEntity.prototype.getRotationPeriodInDays = function () {
        return this._rotationPeriodInDays;
    };
    PlanetEntity.prototype.setRotationPeriodInDays = function (value) {
        this._rotationPeriodInDays = value;
    };
    PlanetEntity.prototype.getOrbitalPeriodInDays = function () {
        return this._orbitalPeriodInDays;
    };
    PlanetEntity.prototype.setOrbitalPeriodInDays = function (value) {
        this._orbitalPeriodInDays = value;
    };
    PlanetEntity.prototype.getDiameterInKilometers = function () {
        return this._diameterInKilometers;
    };
    PlanetEntity.prototype.setDiameterInKilometers = function (value) {
        this._diameterInKilometers = value;
    };
    PlanetEntity.prototype.getClimate = function () {
        return this._climate;
    };
    PlanetEntity.prototype.setClimate = function (value) {
        this._climate = value;
    };
    PlanetEntity.prototype.getGravity = function () {
        return this._gravity;
    };
    PlanetEntity.prototype.setGravity = function (value) {
        this._gravity = value;
    };
    PlanetEntity.prototype.getTerrain = function () {
        return this._terrain;
    };
    PlanetEntity.prototype.setTerrain = function (value) {
        this._terrain = value;
    };
    PlanetEntity.prototype.getSurfaceWaterPercent = function () {
        return this._surfaceWaterPercent;
    };
    PlanetEntity.prototype.setSurfaceWaterPercent = function (value) {
        this._surfaceWaterPercent = value;
    };
    PlanetEntity.prototype.getPopulation = function () {
        return this._population;
    };
    PlanetEntity.prototype.setPopulation = function (value) {
        this._population = value;
    };
    PlanetEntity.prototype.getResidentCharacterUrls = function () {
        return this._residentCharacterUrls;
    };
    PlanetEntity.prototype.setResidentCharacterUrls = function (value) {
        this._residentCharacterUrls = value;
    };
    PlanetEntity.prototype.getFilmUrls = function () {
        return this._filmUrls;
    };
    PlanetEntity.prototype.setFilmUrls = function (value) {
        this._filmUrls = value;
    };
    return PlanetEntity;
}(AbstractEntity));
export { PlanetEntity };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhbmV0RW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGxhbmV0RW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQ7SUFBa0MsZ0NBQWM7SUFpQjVDO1FBQUEsWUFDSSxpQkFBTyxTQWVWO1FBZEcsS0FBSSxDQUFDLFFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxRQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUNqQyxLQUFJLENBQUMscUJBQXFCLEdBQUksQ0FBQyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUNqQyxLQUFJLENBQUMsUUFBUSxHQUFpQixFQUFFLENBQUM7UUFDakMsS0FBSSxDQUFDLEtBQUssR0FBb0IsRUFBRSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxvQkFBb0IsR0FBSyxDQUFDLENBQUM7UUFDaEMsS0FBSSxDQUFDLFdBQVcsR0FBYyxDQUFDLENBQUM7UUFDaEMsS0FBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUNqQyxLQUFJLENBQUMscUJBQXFCLEdBQUksQ0FBQyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxvQkFBb0IsR0FBSyxDQUFDLENBQUM7UUFDaEMsS0FBSSxDQUFDLFFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxRQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUNqQyxLQUFJLENBQUMsSUFBSSxHQUFxQixFQUFFLENBQUM7O0lBQ3JDLENBQUM7SUFFTSw0QkFBSyxHQUFaO1FBQ0ksT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLEtB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