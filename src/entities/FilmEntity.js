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
var FilmEntity = /** @class */ (function (_super) {
    __extends(FilmEntity, _super);
    function FilmEntity() {
        var _this = _super.call(this) || this;
        _this._characterUrls = [];
        _this._created = '';
        _this._director = '';
        _this._updated = '';
        _this._episodeId = 0;
        _this._openingCrawl = '';
        _this._planetUrls = [];
        _this._producer = '';
        _this._releaseDate = '';
        _this._speciesUrls = [];
        _this._starshipUrls = [];
        _this._title = '';
        _this._url = '';
        _this._vehicleUrls = [];
        return _this;
    }
    FilmEntity.prototype.getTitle = function () {
        return this._title;
    };
    FilmEntity.prototype.setTitle = function (value) {
        this._title = value;
    };
    FilmEntity.prototype.getEpisodeId = function () {
        return this._episodeId;
    };
    FilmEntity.prototype.setEpisodeId = function (value) {
        this._episodeId = value;
    };
    FilmEntity.prototype.getOpeningCrawl = function () {
        return this._openingCrawl;
    };
    FilmEntity.prototype.setOpeningCrawl = function (value) {
        this._openingCrawl = value;
    };
    FilmEntity.prototype.getDirector = function () {
        return this._director;
    };
    FilmEntity.prototype.setDirector = function (value) {
        this._director = value;
    };
    FilmEntity.prototype.getProducer = function () {
        return this._producer;
    };
    FilmEntity.prototype.setProducer = function (value) {
        this._producer = value;
    };
    FilmEntity.prototype.getReleaseDate = function () {
        return this._releaseDate;
    };
    FilmEntity.prototype.setReleaseDate = function (value) {
        this._releaseDate = value;
    };
    FilmEntity.prototype.getCreated = function () {
        return this._created;
    };
    FilmEntity.prototype.setCreated = function (value) {
        this._created = value;
    };
    FilmEntity.prototype.getUpdated = function () {
        return this._updated;
    };
    FilmEntity.prototype.setUpdated = function (value) {
        this._updated = value;
    };
    FilmEntity.prototype.getUrl = function () {
        return this._url;
    };
    FilmEntity.prototype.setUrl = function (value) {
        this._url = value;
    };
    FilmEntity.prototype.getCharacterUrls = function () {
        return this._characterUrls;
    };
    FilmEntity.prototype.setCharacterUrls = function (value) {
        this._characterUrls = value;
    };
    FilmEntity.prototype.getPlanetUrls = function () {
        return this._planetUrls;
    };
    FilmEntity.prototype.setPlanetUrls = function (value) {
        this._planetUrls = value;
    };
    FilmEntity.prototype.getStarshipUrls = function () {
        return this._starshipUrls;
    };
    FilmEntity.prototype.setStarshipUrls = function (value) {
        this._starshipUrls = value;
    };
    FilmEntity.prototype.getVehicleUrls = function () {
        return this._vehicleUrls;
    };
    FilmEntity.prototype.setVehicleUrls = function (value) {
        this._vehicleUrls = value;
    };
    FilmEntity.prototype.getSpeciesUrls = function () {
        return this._speciesUrls;
    };
    FilmEntity.prototype.setSpeciesUrls = function (value) {
        this._speciesUrls = value;
    };
    FilmEntity.prototype.getId = function () {
        return AbstractEntity.getIdFromUrl(this._url);
    };
    return FilmEntity;
}(AbstractEntity));
export { FilmEntity };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbG1FbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRDtJQUFnQyw4QkFBYztJQWdCMUM7UUFBQSxZQUNJLGlCQUFPLFNBZVY7UUFkRyxLQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsUUFBUSxHQUFTLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsU0FBUyxHQUFRLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsUUFBUSxHQUFTLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsVUFBVSxHQUFPLENBQUMsQ0FBQztRQUN4QixLQUFJLENBQUMsYUFBYSxHQUFJLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsV0FBVyxHQUFNLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsU0FBUyxHQUFRLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsWUFBWSxHQUFLLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsWUFBWSxHQUFLLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsYUFBYSxHQUFJLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUN6QixLQUFJLENBQUMsWUFBWSxHQUFLLEVBQUUsQ0FBQzs7SUFDN0IsQ0FBQztJQUVNLDZCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLDZCQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRU0saUNBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0Is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