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
var CharacterEntity = /** @class */ (function (_super) {
    __extends(CharacterEntity, _super);
    function CharacterEntity() {
        var _this = _super.call(this) || this;
        _this._birthYear = '';
        _this._created = '';
        _this._eyeColor = '';
        _this._filmUrls = [];
        _this._gender = '';
        _this._hairColor = '';
        _this._heightInCentimeters = 0;
        _this._homePlanetUrl = '';
        _this._massInKilograms = 0;
        _this._name = '';
        _this._skinColor = '';
        _this._speciesUrl = [];
        _this._starshipUrls = [];
        _this._updated = '';
        _this._url = '';
        _this._vehicleUrls = [];
        return _this;
    }
    CharacterEntity.prototype.getUrl = function () {
        return this._url;
    };
    CharacterEntity.prototype.setUrl = function (value) {
        this._url = value;
    };
    CharacterEntity.prototype.getName = function () {
        return this._name;
    };
    CharacterEntity.prototype.setName = function (value) {
        this._name = value;
    };
    CharacterEntity.prototype.getHeightInCentimeters = function () {
        return this._heightInCentimeters;
    };
    CharacterEntity.prototype.setHeightInCentimeters = function (value) {
        this._heightInCentimeters = value;
    };
    CharacterEntity.prototype.getMassInKilograms = function () {
        return this._massInKilograms;
    };
    CharacterEntity.prototype.setMassInKilograms = function (value) {
        this._massInKilograms = value;
    };
    CharacterEntity.prototype.getHairColor = function () {
        return this._hairColor;
    };
    CharacterEntity.prototype.setHairColor = function (value) {
        this._hairColor = value;
    };
    CharacterEntity.prototype.getSkinColor = function () {
        return this._skinColor;
    };
    CharacterEntity.prototype.setSkinColor = function (value) {
        this._skinColor = value;
    };
    CharacterEntity.prototype.getEyeColor = function () {
        return this._eyeColor;
    };
    CharacterEntity.prototype.setEyeColor = function (value) {
        this._eyeColor = value;
    };
    CharacterEntity.prototype.getBirthYear = function () {
        return this._birthYear;
    };
    CharacterEntity.prototype.setBirthYear = function (value) {
        this._birthYear = value;
    };
    CharacterEntity.prototype.getGender = function () {
        return this._gender;
    };
    CharacterEntity.prototype.setGender = function (value) {
        this._gender = value;
    };
    CharacterEntity.prototype.getHomePlanetUrl = function () {
        return this._homePlanetUrl;
    };
    CharacterEntity.prototype.setHomePlanetUrl = function (value) {
        this._homePlanetUrl = value;
    };
    CharacterEntity.prototype.getFilmUrls = function () {
        return this._filmUrls;
    };
    CharacterEntity.prototype.setFilmUrls = function (value) {
        this._filmUrls = value;
    };
    CharacterEntity.prototype.getSpeciesUrls = function () {
        return this._speciesUrl;
    };
    CharacterEntity.prototype.setSpeciesUrls = function (value) {
        this._speciesUrl = value;
    };
    CharacterEntity.prototype.getVehicleUrls = function () {
        return this._vehicleUrls;
    };
    CharacterEntity.prototype.setVehicleUrls = function (value) {
        this._vehicleUrls = value;
    };
    CharacterEntity.prototype.getStarshipUrls = function () {
        return this._starshipUrls;
    };
    CharacterEntity.prototype.setStarshipUrls = function (value) {
        this._starshipUrls = value;
    };
    CharacterEntity.prototype.getCreated = function () {
        return this._created;
    };
    CharacterEntity.prototype.setCreated = function (value) {
        this._created = value;
    };
    CharacterEntity.prototype.getUpdated = function () {
        return this._updated;
    };
    CharacterEntity.prototype.setUpdated = function (value) {
        this._updated = value;
    };
    CharacterEntity.prototype.getId = function () {
        return CharacterEntity.getIdFromUrl(this._url);
    };
    return CharacterEntity;
}(AbstractEntity));
export { CharacterEntity };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhcmFjdGVyRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQ7SUFBcUMsbUNBQWM7SUFrQi9DO1FBQUEsWUFDSSxpQkFBTyxTQWlCVjtRQWhCRyxLQUFJLENBQUMsVUFBVSxHQUFhLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsU0FBUyxHQUFjLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsU0FBUyxHQUFjLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsT0FBTyxHQUFnQixFQUFFLENBQUM7UUFDL0IsS0FBSSxDQUFDLFVBQVUsR0FBYSxFQUFFLENBQUM7UUFDL0IsS0FBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztRQUM5QixLQUFJLENBQUMsY0FBYyxHQUFTLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsZ0JBQWdCLEdBQU8sQ0FBQyxDQUFDO1FBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsVUFBVSxHQUFhLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsV0FBVyxHQUFZLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsYUFBYSxHQUFVLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMvQixLQUFJLENBQUMsSUFBSSxHQUFtQixFQUFFLENBQUM7UUFDL0IsS0FBSSxDQUFDLFlBQVksR0FBVyxFQUFFLENBQUM7O0lBQ25DLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxnQ0FBTSxHQUFiLFVBQWMsS0FBYTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0saUNBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0saUNBQU8sR0FBZCxVQUFlLEtBQWE7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLGdEQUFzQixHQUE3QjtRQUNJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ3JDLENBQUM7SUFFTSxnREFBc0IsR0FBN0IsVUFBOEIsS0FBYTtRQUN2QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFTSw0Q0FBa0IsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBRU0sNENBQWtCLEdBQXpCLFVBQTBCLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRU0sc0NBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVNLHNDQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVNLHNDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFTSxzQ0FBWSxHQUFuQixVQUFvQixLQUFhO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0scUNBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRU0sc0NBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVNLHNDQUFZLEdBQW5CLFVBQW9CLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVNLG1DQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxtQ0FBUyxHQUFoQixVQUFpQixLQUFhO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFTSwwQ0FBZ0IsR0FBdkI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVNLDBDQUFnQixHQUF2QixVQUF3QixLQUFhO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxxQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0scUNBQVcsR0FBbEIsVUFBbUIsS0FBZTtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRU0sd0NBQWMsR0FBckI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVNLHdDQUFjLEdBQXJCLFVBQXNCLEtBQWU7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVNLHdDQUFjLEdBQXJCO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFTSx3Q0FBYyxHQUFyQixVQUFzQixLQUFlO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSx5Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRU0seUNBQWUsR0FBdEIsVUFBdUIsS0FBZTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRU0sb0NBQVUsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLG9DQUFVLEdBQWpCLFVBQWtCLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVNLG9DQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxvQ0FBVSxHQUFqQixVQUFrQixLQUFhO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQ0ksT0FBTyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBektELENBQXFDLGNBQWMsR0F5S2xEIn0=