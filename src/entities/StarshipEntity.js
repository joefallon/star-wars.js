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
var StarshipEntity = /** @class */ (function (_super) {
    __extends(StarshipEntity, _super);
    function StarshipEntity() {
        var _this = _super.call(this) || this;
        _this._cargoCapacityInKilograms = 0;
        _this._consumables = '';
        _this._costInCredits = 0;
        _this._created = '';
        _this._crewCount = 0;
        _this._filmUrls = [];
        _this._hyperdriveRating = '';
        _this._lengthInMeters = 0;
        _this._manufacturer = '';
        _this._maxAtmospheringSpeedInKPH = 0;
        _this._megalightSpeed = 0;
        _this._model = '';
        _this._name = '';
        _this._passengerCount = 0;
        _this._pilotCharacterUrls = [];
        _this._starshipClass = '';
        _this._updated = '';
        _this._url = '';
        return _this;
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
    StarshipEntity.prototype.getId = function () {
        return AbstractEntity.getIdFromUrl(this._url);
    };
    return StarshipEntity;
}(AbstractEntity));
export { StarshipEntity };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhcnNoaXBFbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGFyc2hpcEVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxEO0lBQW9DLGtDQUFjO0lBcUI5QztRQUFBLFlBQ0ksaUJBQU8sU0FtQlY7UUFsQkcsS0FBSSxDQUFDLHlCQUF5QixHQUFJLENBQUMsQ0FBQztRQUNwQyxLQUFJLENBQUMsWUFBWSxHQUFpQixFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLGNBQWMsR0FBZSxDQUFDLENBQUM7UUFDcEMsS0FBSSxDQUFDLFFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxVQUFVLEdBQW1CLENBQUMsQ0FBQztRQUNwQyxLQUFJLENBQUMsU0FBUyxHQUFvQixFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLGlCQUFpQixHQUFZLEVBQUUsQ0FBQztRQUNyQyxLQUFJLENBQUMsZUFBZSxHQUFjLENBQUMsQ0FBQztRQUNwQyxLQUFJLENBQUMsYUFBYSxHQUFnQixFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLDBCQUEwQixHQUFHLENBQUMsQ0FBQztRQUNwQyxLQUFJLENBQUMsZUFBZSxHQUFjLENBQUMsQ0FBQztRQUNwQyxLQUFJLENBQUMsTUFBTSxHQUF1QixFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLEtBQUssR0FBd0IsRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxlQUFlLEdBQWMsQ0FBQyxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxtQkFBbUIsR0FBVSxFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLGNBQWMsR0FBZSxFQUFFLENBQUM7UUFDckMsS0FBSSxDQUFDLFFBQVEsR0FBcUIsRUFBRSxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQXlCLEVBQUUsQ0FBQzs7SUFDekMsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLCtCQUFNLEdBQWIsVUFBYyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxtQ0FBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0sbUNBQVUsR0FBakIsVUFBa0IsS0FBYTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU0sbUNBQVUsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLG1DQUFVLEdBQWpCLFVBQWtCLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVNLGdDQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxpQ0FBUSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxpQ0FBUSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLHdDQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFTSx3Q0FBZSxHQUF0QixVQUF1QixLQUFhO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFTSx5Q0FBZ0IsR0FBdkI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVNLHlDQUFnQixHQUF2QixVQUF3QixLQUFhO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFTSwwQ0FBaUIsR0FBeEI7UUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUVNLDBDQUFpQixHQUF4QixVQUF5QixLQUFhO1FBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxxREFBNEIsR0FBbkM7UUFDSSxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUMzQyxDQUFDO0lBRU0scURBQTRCLEdBQW5DLFVBQW9DLEtBQWE7UUFDN0MsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVNLHFDQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVNLDBDQUFpQixHQUF4QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sMENBQWlCLEdBQXhCLFVBQXlCLEtBQWE7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVNLG9EQUEyQixHQUFsQztRQUNJLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQzFDLENBQUM7SUFFTSxvREFBMkIsR0FBbEMsVUFBbUMsS0FBYTtRQUM1QyxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7SUFFTSx1Q0FBYyxHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRU0sdUNBQWMsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRU0sNENBQW1CLEdBQTFCO1FBQ0ksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVNLDRDQUFtQixHQUExQixVQUEyQixLQUFhO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVNLDBDQUFpQixHQUF4QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sMENBQWlCLEdBQXhCLFVBQXlCLEtBQWE7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVNLHlDQUFnQixHQUF2QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDO0lBRU0seUNBQWdCLEdBQXZCLFVBQXdCLEtBQWE7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVNLDhDQUFxQixHQUE1QjtRQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BDLENBQUM7SUFFTSw4Q0FBcUIsR0FBNUIsVUFBNkIsS0FBZTtRQUN4QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxvQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0sb0NBQVcsR0FBbEIsVUFBbUIsS0FBZTtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTlMRCxDQUFvQyxjQUFjLEdBOExqRCJ9