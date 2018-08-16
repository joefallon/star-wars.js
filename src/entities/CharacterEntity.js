"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharacterEntity = /** @class */ (function () {
    function CharacterEntity() {
        this._birthYear = '';
        this._created = '';
        this._eyeColor = '';
        this._filmUrls = [];
        this._gender = '';
        this._hairColor = '';
        this._heightInCentimeters = 0;
        this._homePlanetUrl = '';
        this._massInKilograms = 0;
        this._name = '';
        this._skinColor = '';
        this._speciesUrl = '';
        this._starshipUrls = [];
        this._updated = '';
        this._url = '';
        this._vehicleUrls = [];
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
    CharacterEntity.prototype.getSpeciesUrl = function () {
        return this._speciesUrl;
    };
    CharacterEntity.prototype.setSpeciesUrl = function (value) {
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
    return CharacterEntity;
}());
exports.CharacterEntity = CharacterEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhcmFjdGVyRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFrQkk7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFhLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFjLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFjLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFnQixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBYSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFhLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFZLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFtQixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLGdDQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLGdDQUFNLEdBQWIsVUFBYyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxpQ0FBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RC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