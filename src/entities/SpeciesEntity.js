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
var SpeciesEntity = /** @class */ (function (_super) {
    __extends(SpeciesEntity, _super);
    function SpeciesEntity() {
        var _this = _super.call(this) || this;
        _this._averageHeightInCentimeters = 0;
        _this._averageLifespanInYears = 0;
        _this._characterUrls = [];
        _this._classification = '';
        _this._created = '';
        _this._designation = '';
        _this._eyeColor = '';
        _this._filmUrls = [];
        _this._hairColor = '';
        _this._homePlanetUrl = '';
        _this._language = '';
        _this._name = '';
        _this._skinColor = '';
        _this._updated = '';
        _this._url = '';
        return _this;
    }
    SpeciesEntity.prototype.getId = function () {
        return AbstractEntity.getIdFromUrl(this._url);
    };
    SpeciesEntity.prototype.getUrl = function () {
        return this._url;
    };
    SpeciesEntity.prototype.setUrl = function (value) {
        this._url = value;
    };
    SpeciesEntity.prototype.getCreated = function () {
        return this._created;
    };
    SpeciesEntity.prototype.setCreated = function (value) {
        this._created = value;
    };
    SpeciesEntity.prototype.getUpdated = function () {
        return this._updated;
    };
    SpeciesEntity.prototype.setUpdated = function (value) {
        this._updated = value;
    };
    SpeciesEntity.prototype.getName = function () {
        return this._name;
    };
    SpeciesEntity.prototype.setName = function (value) {
        this._name = value;
    };
    SpeciesEntity.prototype.getClassification = function () {
        return this._classification;
    };
    SpeciesEntity.prototype.setClassification = function (value) {
        this._classification = value;
    };
    SpeciesEntity.prototype.getDesignation = function () {
        return this._designation;
    };
    SpeciesEntity.prototype.setDesignation = function (value) {
        this._designation = value;
    };
    SpeciesEntity.prototype.getAverageHeightInCentimeters = function () {
        return this._averageHeightInCentimeters;
    };
    SpeciesEntity.prototype.setAverageHeightInCentimeters = function (value) {
        this._averageHeightInCentimeters = value;
    };
    SpeciesEntity.prototype.getSkinColor = function () {
        return this._skinColor;
    };
    SpeciesEntity.prototype.setSkinColor = function (value) {
        this._skinColor = value;
    };
    SpeciesEntity.prototype.getHairColor = function () {
        return this._hairColor;
    };
    SpeciesEntity.prototype.setHairColor = function (value) {
        this._hairColor = value;
    };
    SpeciesEntity.prototype.getEyeColor = function () {
        return this._eyeColor;
    };
    SpeciesEntity.prototype.setEyeColor = function (value) {
        this._eyeColor = value;
    };
    SpeciesEntity.prototype.getAverageLifespanInYears = function () {
        return this._averageLifespanInYears;
    };
    SpeciesEntity.prototype.setAverageLifespanInYears = function (value) {
        this._averageLifespanInYears = value;
    };
    SpeciesEntity.prototype.getHomePlanetUrl = function () {
        return this._homePlanetUrl;
    };
    SpeciesEntity.prototype.setHomePlanetUrl = function (value) {
        this._homePlanetUrl = value;
    };
    SpeciesEntity.prototype.getLanguage = function () {
        return this._language;
    };
    SpeciesEntity.prototype.setLanguage = function (value) {
        this._language = value;
    };
    SpeciesEntity.prototype.getCharacterUrls = function () {
        return this._characterUrls;
    };
    SpeciesEntity.prototype.setCharacterUrls = function (value) {
        this._characterUrls = value;
    };
    SpeciesEntity.prototype.getFilmUrls = function () {
        return this._filmUrls;
    };
    SpeciesEntity.prototype.setFilmUrls = function (value) {
        this._filmUrls = value;
    };
    return SpeciesEntity;
}(AbstractEntity));
export { SpeciesEntity };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2llc0VudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNwZWNpZXNFbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRDtJQUFtQyxpQ0FBYztJQWtCN0M7UUFBQSxZQUNJLGlCQUFPLFNBZ0JWO1FBZkcsS0FBSSxDQUFDLDJCQUEyQixHQUFHLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsdUJBQXVCLEdBQU8sQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxjQUFjLEdBQWdCLEVBQUUsQ0FBQztRQUN0QyxLQUFJLENBQUMsZUFBZSxHQUFlLEVBQUUsQ0FBQztRQUN0QyxLQUFJLENBQUMsUUFBUSxHQUFzQixFQUFFLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBa0IsRUFBRSxDQUFDO1FBQ3RDLEtBQUksQ0FBQyxTQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUN0QyxLQUFJLENBQUMsU0FBUyxHQUFxQixFQUFFLENBQUM7UUFDdEMsS0FBSSxDQUFDLFVBQVUsR0FBb0IsRUFBRSxDQUFDO1FBQ3RDLEtBQUksQ0FBQyxjQUFjLEdBQWdCLEVBQUUsQ0FBQztRQUN0QyxLQUFJLENBQUMsU0FBUyxHQUFxQixFQUFFLENBQUM7UUFDdEMsS0FBSSxDQUFDLEtBQUssR0FBeUIsRUFBRSxDQUFDO1FBQ3RDLEtBQUksQ0FBQyxVQUFVLEdBQW9CLEVBQUUsQ0FBQztRQUN0QyxLQUFJLENBQUMsUUFBUSxHQUFzQixFQUFFLENBQUM7UUFDdEMsS0FBSSxDQUFDLElBQUksR0FBMEIsRUFBRSxDQUFDOztJQUMxQyxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNJLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENB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