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
var VehicleEntity = /** @class */ (function (_super) {
    __extends(VehicleEntity, _super);
    function VehicleEntity() {
        var _this = _super.call(this) || this;
        _this._cargoCapacityInKilograms = 0;
        _this._consumables = '';
        _this._costInCredits = 0;
        _this._created = '';
        _this._crewCount = 0;
        _this._filmUrls = [];
        _this._lengthInMeters = 0;
        _this._manufacturer = '';
        _this._maxAtmospheringSpeedInKPH = 0;
        _this._model = '';
        _this._name = '';
        _this._passengerCount = 0;
        _this._pilotCharacterUrls = [];
        _this._updated = '';
        _this._url = '';
        _this._vehicleClass = '';
        return _this;
    }
    VehicleEntity.prototype.getUrl = function () {
        return this._url;
    };
    VehicleEntity.prototype.setUrl = function (value) {
        this._url = value;
    };
    VehicleEntity.prototype.getCreated = function () {
        return this._created;
    };
    VehicleEntity.prototype.setCreated = function (value) {
        this._created = value;
    };
    VehicleEntity.prototype.getUpdated = function () {
        return this._updated;
    };
    VehicleEntity.prototype.setUpdated = function (value) {
        this._updated = value;
    };
    VehicleEntity.prototype.getName = function () {
        return this._name;
    };
    VehicleEntity.prototype.setName = function (value) {
        this._name = value;
    };
    VehicleEntity.prototype.getModel = function () {
        return this._model;
    };
    VehicleEntity.prototype.setModel = function (value) {
        this._model = value;
    };
    VehicleEntity.prototype.getManufacturer = function () {
        return this._manufacturer;
    };
    VehicleEntity.prototype.setManufacturer = function (value) {
        this._manufacturer = value;
    };
    VehicleEntity.prototype.getCostInCredits = function () {
        return this._costInCredits;
    };
    VehicleEntity.prototype.setCostInCredits = function (value) {
        this._costInCredits = value;
    };
    VehicleEntity.prototype.getLengthInMeters = function () {
        return this._lengthInMeters;
    };
    VehicleEntity.prototype.setLengthInMeters = function (value) {
        this._lengthInMeters = value;
    };
    VehicleEntity.prototype.getMaxAtmospheringSpeedInKPH = function () {
        return this._maxAtmospheringSpeedInKPH;
    };
    VehicleEntity.prototype.setMaxAtmospheringSpeedInKPH = function (value) {
        this._maxAtmospheringSpeedInKPH = value;
    };
    VehicleEntity.prototype.getCrewCount = function () {
        return this._crewCount;
    };
    VehicleEntity.prototype.setCrewCount = function (value) {
        this._crewCount = value;
    };
    VehicleEntity.prototype.getPassengerCount = function () {
        return this._passengerCount;
    };
    VehicleEntity.prototype.setPassengerCount = function (value) {
        this._passengerCount = value;
    };
    VehicleEntity.prototype.getCargoCapacityInKilograms = function () {
        return this._cargoCapacityInKilograms;
    };
    VehicleEntity.prototype.setCargoCapacityInKilograms = function (value) {
        this._cargoCapacityInKilograms = value;
    };
    VehicleEntity.prototype.getConsumables = function () {
        return this._consumables;
    };
    VehicleEntity.prototype.setConsumables = function (value) {
        this._consumables = value;
    };
    VehicleEntity.prototype.getVehicleClass = function () {
        return this._vehicleClass;
    };
    VehicleEntity.prototype.setVehicleClass = function (value) {
        this._vehicleClass = value;
    };
    VehicleEntity.prototype.getPilotCharacterUrls = function () {
        return this._pilotCharacterUrls;
    };
    VehicleEntity.prototype.setPilotCharacterUrls = function (value) {
        this._pilotCharacterUrls = value;
    };
    VehicleEntity.prototype.getFilmUrls = function () {
        return this._filmUrls;
    };
    VehicleEntity.prototype.setFilmUrls = function (value) {
        this._filmUrls = value;
    };
    VehicleEntity.prototype.getId = function () {
        return AbstractEntity.getIdFromUrl(this._url);
    };
    return VehicleEntity;
}(AbstractEntity));
export { VehicleEntity };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVoaWNsZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZlaGljbGVFbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRDtJQUFtQyxpQ0FBYztJQW1CN0M7UUFBQSxZQUNJLGlCQUFPLFNBaUJWO1FBaEJHLEtBQUksQ0FBQyx5QkFBeUIsR0FBSSxDQUFDLENBQUM7UUFDcEMsS0FBSSxDQUFDLFlBQVksR0FBaUIsRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxjQUFjLEdBQWUsQ0FBQyxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxRQUFRLEdBQXFCLEVBQUUsQ0FBQztRQUNyQyxLQUFJLENBQUMsVUFBVSxHQUFtQixDQUFDLENBQUM7UUFDcEMsS0FBSSxDQUFDLFNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxlQUFlLEdBQWMsQ0FBQyxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxhQUFhLEdBQWdCLEVBQUUsQ0FBQztRQUNyQyxLQUFJLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxNQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUNyQyxLQUFJLENBQUMsS0FBSyxHQUF3QixFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLGVBQWUsR0FBYyxDQUFDLENBQUM7UUFDcEMsS0FBSSxDQUFDLG1CQUFtQixHQUFVLEVBQUUsQ0FBQztRQUNyQyxLQUFJLENBQUMsUUFBUSxHQUFxQixFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLElBQUksR0FBeUIsRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxhQUFhLEdBQWdCLEVBQUUsQ0FBQzs7SUFDekMsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxLQUFhO1FBQ3ZC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