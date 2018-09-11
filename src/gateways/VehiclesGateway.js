var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import axios from 'axios';
import VehicleEntity from '../entities/VehicleEntity';
var VehiclesGateway = /** @class */ (function () {
    function VehiclesGateway(baseApi, cache, timeout) {
        this._api = baseApi + VehiclesGateway.API_SEGMENT;
        this._axiosConfig = { timeout: timeout };
        this._cache = cache;
    }
    VehiclesGateway.prototype.retrieveVehicle = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var cache, config, response, data, vehicle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cache = this._cache;
                        if (cache.has(url)) {
                            return [2 /*return*/, cache.get(url)];
                        }
                        config = this._axiosConfig;
                        return [4 /*yield*/, axios.get(url, config)];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        vehicle = VehiclesGateway.mapResponseDataToVehicle(data);
                        cache.set(url, vehicle);
                        return [2 /*return*/, vehicle];
                }
            });
        });
    };
    VehiclesGateway.mapResponseDataToVehicle = function (data) {
        var vehicle = new VehicleEntity();
        vehicle.setCargoCapacityInKilograms(parseInt(data['cargo_capacity']));
        vehicle.setConsumables(data['consumables']);
        vehicle.setCostInCredits(parseInt(data['cost_in_credits'], 10));
        vehicle.setCreated(data['created']);
        vehicle.setCrewCount(parseInt(data['crew'], 10));
        vehicle.setFilmUrls(data['films']);
        vehicle.setLengthInMeters(parseFloat(data['length']));
        vehicle.setManufacturer(data['manufacturer']);
        vehicle.setMaxAtmospheringSpeedInKPH(parseFloat(data['max_atmosphering_speed']));
        vehicle.setModel(data['model']);
        vehicle.setName(data['name']);
        vehicle.setPassengerCount(parseInt(data['passengers'], 10));
        vehicle.setPilotCharacterUrls(data['pilots']);
        vehicle.setUpdated(data['edited']);
        vehicle.setUrl(data['url']);
        vehicle.setVehicleClass(data['vehicle_class']);
        return vehicle;
    };
    VehiclesGateway.API_SEGMENT = 'vehicles/';
    return VehiclesGateway;
}());
export default VehiclesGateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVoaWNsZXNHYXRld2F5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmVoaWNsZXNHYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUE2QixNQUFNLE9BQU8sQ0FBQztBQUdsRCxPQUFPLGFBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RDtJQU9JLHlCQUFtQixPQUFlLEVBQUUsS0FBNkIsRUFBRSxPQUFlO1FBQzlFLElBQUksQ0FBQyxJQUFJLEdBQVcsT0FBTyxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFTLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRVkseUNBQWUsR0FBNUIsVUFBNkIsR0FBVzs7Ozs7O3dCQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFFMUIsSUFBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNmLHNCQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7eUJBQ3pCO3dCQUVLLE1BQU0sR0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUNsQixxQkFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBQTs7d0JBQXZDLFFBQVEsR0FBRyxTQUE0Qjt3QkFDdkMsSUFBSSxHQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ3pCLE9BQU8sR0FBSSxlQUFlLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUV4QixzQkFBTyxPQUFPLEVBQUM7Ozs7S0FDbEI7SUFFYyx3Q0FBd0IsR0FBdkMsVUFBd0MsSUFBUztRQUM3QyxJQUFNLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBRXBDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFFL0MsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQWpEdUIsMkJBQVcsR0FBRyxXQUFXLENBQUM7SUFrRHRELHNCQUFDO0NBQUEsQUFuREQsSUFtREM7ZUFuRG9CLGVBQWUifQ==