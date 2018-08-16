"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FilmEntity = /** @class */ (function () {
    function FilmEntity() {
        this._characterUrls = [];
        this._created = '';
        this._director = '';
        this._updated = '';
        this._episodeId = 0;
        this._openingCrawl = '';
        this._planetUrls = [];
        this._producer = '';
        this._releaseDate = '';
        this._speciesUrls = [];
        this._starshipUrls = [];
        this._title = '';
        this._url = '';
        this._vehicleUrls = [];
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
    return FilmEntity;
}());
exports.FilmEntity = FilmEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsbUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbG1FbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQWdCSTtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQU8sQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQU0sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSw2QkFBUSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw2QkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVNLGlDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFTSxpQ0FBWSxHQUFuQixVQUFvQixLQUFhO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTSxv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