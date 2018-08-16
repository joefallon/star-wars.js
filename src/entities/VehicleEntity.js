"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VehicleEntity = /** @class */ (function () {
    function VehicleEntity() {
        this._cargoCapacityInKilograms = 0;
        this._consumables = '';
        this._costInCredits = 0;
        this._created = '';
        this._crewCount = 0;
        this._filmUrls = [];
        this._lengthInMeters = 0;
        this._manufacturer = '';
        this._maxAtmospheringSpeedInKPH = 0;
        this._model = '';
        this._name = '';
        this._passengerCount = 0;
        this._pilotCharacterUrls = [];
        this._updated = '';
        this._url = '';
        this._vehicleClass = '';
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
    return VehicleEntity;
}());
exports.VehicleEntity = VehicleEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVoaWNsZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZlaGljbGVFbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQW1CSTtRQUNJLElBQUksQ0FBQyx5QkFBeUIsR0FBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBaUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQWUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQXFCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFtQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQWMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQWdCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUF3QixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBYyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixHQUFVLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFxQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBeUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQWdCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sOEJBQU0sR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLGtDQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFD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