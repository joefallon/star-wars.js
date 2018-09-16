var SwapiHelpers = /** @class */ (function () {
    function SwapiHelpers() {
    }
    SwapiHelpers.getIdFromUrl = function (url) {
        var segments = url.split('/');
        var id = parseInt(segments[segments.length - 2], 10);
        if (isNaN(id)) {
            return 0;
        }
        return id;
    };
    return SwapiHelpers;
}());
export { SwapiHelpers };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dhcGlIZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3dhcGlIZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0lBQUE7SUFZQSxDQUFDO0lBVmlCLHlCQUFZLEdBQTFCLFVBQTJCLEdBQVc7UUFDbEMsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFNLEVBQUUsR0FBUyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFN0QsSUFBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsQ0FBQztTQUNaO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyJ9