var SyntheticEventTestFactory = /** @class */ (function () {
    function SyntheticEventTestFactory() {
    }
    SyntheticEventTestFactory.create = function (value) {
        if (value === void 0) { value = null; }
        var event = {
            preventDefault: function () { return null; },
            target: {}
        };
        event.target['value'] = value;
        return event;
    };
    return SyntheticEventTestFactory;
}());
export { SyntheticEventTestFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ludGhldGljRXZlbnRUZXN0RmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN5bnRoZXRpY0V2ZW50VGVzdEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFBQTtJQVdBLENBQUM7SUFWaUIsZ0NBQU0sR0FBcEIsVUFBcUIsS0FBVTtRQUFWLHNCQUFBLEVBQUEsWUFBVTtRQUMzQixJQUFNLEtBQUssR0FBRztZQUNWLGNBQWMsRUFBRSxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUk7WUFDMUIsTUFBTSxFQUFVLEVBQWlCO1NBQ0wsQ0FBQztRQUVqQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUU5QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQyJ9