var AbstractEntity = /** @class */ (function () {
    function AbstractEntity() {
    }
    AbstractEntity.getIdFromUrl = function (url) {
        var segments = url.split('/');
        var id = parseInt(segments[segments.length - 2], 10);
        if (isNaN(id)) {
            return 0;
        }
        return id;
    };
    return AbstractEntity;
}());
export { AbstractEntity };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RFbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBYnN0cmFjdEVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBWUEsQ0FBQztJQVZvQiwyQkFBWSxHQUE3QixVQUE4QixHQUFXO1FBQ3JDLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBTSxFQUFFLEdBQVMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTdELElBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUMifQ==