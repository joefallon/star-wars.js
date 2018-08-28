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
var _this = this;
import * as assert from 'assert';
import { FilmEntity } from '../../entities/FilmEntity';
import sinon from 'sinon';
describe('IndexRoute', function () {
    beforeEach(function () {
        document.title = '';
    });
    context('on initial display', function () {
        it('displays the list of films', function () { return __awaiter(_this, void 0, void 0, function () {
            function renderRoute(props) {
                var film = new FilmEntity();
                film.setCharacterUrls(['character1']);
                film.setCreated('2012-12-12T12:12:12');
                film.setDirector('director');
                film.setUpdated('2012-12-12T11:11:11');
                film.setEpisodeId(1);
                film.setOpeningCrawl('opening crawl');
                film.setPlanetUrls(['planet1']);
                film.setProducer('producer');
                film.setReleaseDate('2012-12-12');
                film.setSpeciesUrls(['species1']);
                film.setStarshipUrls(['starship1']);
                film.setTitle('title');
                film.setUrl('url');
                film.setVehicleUrls(['vehicle1']);
                var films = [film];
                var retrieveAllFilmsStub = sinon.stub();
                // retrieveAllFilmsStub.returns(films);
                // const filmsGateway = {} as FilmsGateway;
                // filmsGateway.retrieveAllFilms = retrieveAllFilmsStub;
                // const gateways = {} as Gateways;
                // gateways.filmsGateway = filmsGateway;
                //
                // const model = new IndexModel(gateways);
            }
            return __generator(this, function (_a) {
                // const wrapper = mount(
                //     <MemoryRouter initialEntries={['/']} initialIndex={0}>
                //         <Switch>
                //             <Route exact path='/' render={(props) => renderRoute(props)}/>
                //         </Switch>
                //     </MemoryRouter>
                // );
                assert.ok(1);
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXhSb3V0ZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW5kZXhSb3V0ZS50ZXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQTZERztBQTdESCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUtqQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBTzFCLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFDbkIsVUFBVSxDQUFDO1FBQ1AsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsb0JBQW9CLEVBQUU7UUFDMUIsRUFBRSxDQUFDLDRCQUE0QixFQUFFO1lBRTdCLHFCQUFxQixLQUFzQjtnQkFDdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUVsQyxJQUFNLEtBQUssR0FBaUIsQ0FBRSxJQUFJLENBQUUsQ0FBQztnQkFFckMsSUFBSSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hDLHVDQUF1QztnQkFDdkMsMkNBQTJDO2dCQUMzQyx3REFBd0Q7Z0JBQ3hELG1DQUFtQztnQkFDbkMsd0NBQXdDO2dCQUN4QyxFQUFFO2dCQUNGLDBDQUEwQztZQUM5QyxDQUFDOztnQkFFRCx5QkFBeUI7Z0JBQ3pCLDZEQUE2RDtnQkFDN0QsbUJBQW1CO2dCQUNuQiw2RUFBNkU7Z0JBQzdFLG9CQUFvQjtnQkFDcEIsc0JBQXNCO2dCQUN0QixLQUFLO2dCQUVMLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7OzthQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=