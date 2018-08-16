var PlanetEntity = /** @class */ (function () {
    function PlanetEntity() {
        this._climate = '';
        this._created = '';
        this._diameterInKilometers = 0;
        this._filmUrls = [];
        this._gravity = '';
        this._name = '';
        this._orbitalPeriodInDays = 0;
        this._population = 0;
        this._residentCharacterUrls = [];
        this._rotationPeriodInDays = 0;
        this._surfaceWaterPercent = 0;
        this._terrain = '';
        this._updated = '';
        this._url = '';
    }
    PlanetEntity.prototype.getUrl = function () {
        return this._url;
    };
    PlanetEntity.prototype.setUrl = function (value) {
        this._url = value;
    };
    PlanetEntity.prototype.getCreated = function () {
        return this._created;
    };
    PlanetEntity.prototype.setCreated = function (value) {
        this._created = value;
    };
    PlanetEntity.prototype.getUpdated = function () {
        return this._updated;
    };
    PlanetEntity.prototype.setUpdated = function (value) {
        this._updated = value;
    };
    PlanetEntity.prototype.getName = function () {
        return this._name;
    };
    PlanetEntity.prototype.setName = function (value) {
        this._name = value;
    };
    PlanetEntity.prototype.getRotationPeriodInDays = function () {
        return this._rotationPeriodInDays;
    };
    PlanetEntity.prototype.setRotationPeriodInDays = function (value) {
        this._rotationPeriodInDays = value;
    };
    PlanetEntity.prototype.getOrbitalPeriodInDays = function () {
        return this._orbitalPeriodInDays;
    };
    PlanetEntity.prototype.setOrbitalPeriodInDays = function (value) {
        this._orbitalPeriodInDays = value;
    };
    PlanetEntity.prototype.getDiameterInKilometers = function () {
        return this._diameterInKilometers;
    };
    PlanetEntity.prototype.setDiameterInKilometers = function (value) {
        this._diameterInKilometers = value;
    };
    PlanetEntity.prototype.getClimate = function () {
        return this._climate;
    };
    PlanetEntity.prototype.setClimate = function (value) {
        this._climate = value;
    };
    PlanetEntity.prototype.getGravity = function () {
        return this._gravity;
    };
    PlanetEntity.prototype.setGravity = function (value) {
        this._gravity = value;
    };
    PlanetEntity.prototype.getTerrain = function () {
        return this._terrain;
    };
    PlanetEntity.prototype.setTerrain = function (value) {
        this._terrain = value;
    };
    PlanetEntity.prototype.getSurfaceWaterPercent = function () {
        return this._surfaceWaterPercent;
    };
    PlanetEntity.prototype.setSurfaceWaterPercent = function (value) {
        this._surfaceWaterPercent = value;
    };
    PlanetEntity.prototype.getPopulation = function () {
        return this._population;
    };
    PlanetEntity.prototype.setPopulation = function (value) {
        this._population = value;
    };
    PlanetEntity.prototype.getResidentCharacterUrls = function () {
        return this._residentCharacterUrls;
    };
    PlanetEntity.prototype.setResidentCharacterUrls = function (value) {
        this._residentCharacterUrls = value;
    };
    PlanetEntity.prototype.getFilmUrls = function () {
        return this._filmUrls;
    };
    PlanetEntity.prototype.setFilmUrls = function (value) {
        this._filmUrls = value;
    };
    return PlanetEntity;
}());
export { PlanetEntity };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhbmV0RW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGxhbmV0RW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBaUJJO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMscUJBQXFCLEdBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQWdCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFpQixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBb0IsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxvQkFBb0IsR0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBYyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMscUJBQXFCLEdBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxvQkFBb0IsR0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFxQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxpQ0FBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0saUNBQVUsR0FBakIsVUFBa0IsS0FBYTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLGlDQUFVLEdBQWpCLFVBQWtCLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVNLDhCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLDhCQUFPLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw4Q0FBdUIsR0FBOUI7UUFDSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUN0QyxDQUFDO0lBRU0sOENBQXVCLEdBQTlCLFVBQStCLEtBQWE7UUFDeEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRU0sNkNBQXNCLEdBQTdCO1FBQ0ksT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDckMsQ0FBQztJQUVNLDZDQUFzQixHQUE3QixVQUE4QixLQUFhO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVNLDhDQUF1QixHQUE5QjtRQUNJLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3RDLENBQUM7SUFFTSw4Q0FBdUIsR0FBOUIsVUFBK0IsS0FBYTtRQUN4QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxpQ0FBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0saUNBQVUsR0FBakIsVUFBa0IsS0FBYTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLGlDQUFVLEdBQWpCLFVBQWtCLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVNLGlDQUFVLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxpQ0FBVSxHQUFqQixVQUFrQixLQUFhO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFTSw2Q0FBc0IsR0FBN0I7UUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDO0lBRU0sNkNBQXNCLEdBQTdCLFVBQThCLEtBQWE7UUFDdkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRU0sb0NBQWEsR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVNLG9DQUFhLEdBQXBCLFVBQXFCLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVNLCtDQUF3QixHQUEvQjtRQUNJLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3ZDLENBQUM7SUFFTSwrQ0FBd0IsR0FBL0IsVUFBZ0MsS0FBZTtRQUMzQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxrQ0FBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0sa0NBQVcsR0FBbEIsVUFBbUIsS0FBZTtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBakpELElBaUpDIn0=