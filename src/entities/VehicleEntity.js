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
export default VehicleEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVoaWNsZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZlaGljbGVFbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFtQkk7UUFDSSxJQUFJLENBQUMseUJBQXlCLEdBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFlLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFxQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBbUIsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQW9CLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFjLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFnQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUF1QixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQWMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsR0FBVSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQXlCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFnQixFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxrQ0FBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJ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