"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StarshipEntity = /** @class */ (function () {
    function StarshipEntity() {
        this._cargoCapacityInKilograms = 0;
        this._consumables = '';
        this._costInCredits = 0;
        this._created = '';
        this._crewCount = 0;
        this._filmUrls = [];
        this._hyperdriveRating = '';
        this._lengthInMeters = 0;
        this._manufacturer = '';
        this._maxAtmospheringSpeedInKPH = 0;
        this._megalightSpeed = 0;
        this._model = '';
        this._name = '';
        this._passengerCount = 0;
        this._pilotCharacterUrls = [];
        this._starshipClass = '';
        this._updated = '';
        this._url = '';
    }
    StarshipEntity.prototype.getUrl = function () {
        return this._url;
    };
    StarshipEntity.prototype.setUrl = function (value) {
        this._url = value;
    };
    StarshipEntity.prototype.getCreated = function () {
        return this._created;
    };
    StarshipEntity.prototype.setCreated = function (value) {
        this._created = value;
    };
    StarshipEntity.prototype.getUpdated = function () {
        return this._updated;
    };
    StarshipEntity.prototype.setUpdated = function (value) {
        this._updated = value;
    };
    StarshipEntity.prototype.getName = function () {
        return this._name;
    };
    StarshipEntity.prototype.setName = function (value) {
        this._name = value;
    };
    StarshipEntity.prototype.getModel = function () {
        return this._model;
    };
    StarshipEntity.prototype.setModel = function (value) {
        this._model = value;
    };
    StarshipEntity.prototype.getManufacturer = function () {
        return this._manufacturer;
    };
    StarshipEntity.prototype.setManufacturer = function (value) {
        this._manufacturer = value;
    };
    StarshipEntity.prototype.getCostInCredits = function () {
        return this._costInCredits;
    };
    StarshipEntity.prototype.setCostInCredits = function (value) {
        this._costInCredits = value;
    };
    StarshipEntity.prototype.getLengthInMeters = function () {
        return this._lengthInMeters;
    };
    StarshipEntity.prototype.setLengthInMeters = function (value) {
        this._lengthInMeters = value;
    };
    StarshipEntity.prototype.getMaxAtmospheringSpeedInKPH = function () {
        return this._maxAtmospheringSpeedInKPH;
    };
    StarshipEntity.prototype.setMaxAtmospheringSpeedInKPH = function (value) {
        this._maxAtmospheringSpeedInKPH = value;
    };
    StarshipEntity.prototype.getCrewCount = function () {
        return this._crewCount;
    };
    StarshipEntity.prototype.setCrewCount = function (value) {
        this._crewCount = value;
    };
    StarshipEntity.prototype.getPassengerCount = function () {
        return this._passengerCount;
    };
    StarshipEntity.prototype.setPassengerCount = function (value) {
        this._passengerCount = value;
    };
    StarshipEntity.prototype.getCargoCapacityInKilograms = function () {
        return this._cargoCapacityInKilograms;
    };
    StarshipEntity.prototype.setCargoCapacityInKilograms = function (value) {
        this._cargoCapacityInKilograms = value;
    };
    StarshipEntity.prototype.getConsumables = function () {
        return this._consumables;
    };
    StarshipEntity.prototype.setConsumables = function (value) {
        this._consumables = value;
    };
    StarshipEntity.prototype.getHyperdriveRating = function () {
        return this._hyperdriveRating;
    };
    StarshipEntity.prototype.setHyperdriveRating = function (value) {
        this._hyperdriveRating = value;
    };
    StarshipEntity.prototype.getMegalightSpeed = function () {
        return this._megalightSpeed;
    };
    StarshipEntity.prototype.setMegalightSpeed = function (value) {
        this._megalightSpeed = value;
    };
    StarshipEntity.prototype.getStarshipClass = function () {
        return this._starshipClass;
    };
    StarshipEntity.prototype.setStarshipClass = function (value) {
        this._starshipClass = value;
    };
    StarshipEntity.prototype.getPilotCharacterUrls = function () {
        return this._pilotCharacterUrls;
    };
    StarshipEntity.prototype.setPilotCharacterUrls = function (value) {
        this._pilotCharacterUrls = value;
    };
    StarshipEntity.prototype.getFilmUrls = function () {
        return this._filmUrls;
    };
    StarshipEntity.prototype.setFilmUrls = function (value) {
        this._filmUrls = value;
    };
    return StarshipEntity;
}());
exports.StarshipEntity = StarshipEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhcnNoaXBFbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGFyc2hpcEVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBcUJJO1FBQ0ksSUFBSSxDQUFDLHlCQUF5QixHQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFpQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBZSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQW1CLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFvQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFZLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFjLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFnQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFjLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUF1QixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQWMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsR0FBVSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBZSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQXlCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sK0JBQU0sR0FBYixVQUFjLEtBQWE7UUFDdkIsSUFBSSxDQUFDLElB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