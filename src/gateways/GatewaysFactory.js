import { FilmsGateway } from './FilmsGateway';
var GatewaysFactory = /** @class */ (function () {
    function GatewaysFactory() {
    }
    GatewaysFactory.create = function () {
        return {
            filmsGateway: new FilmsGateway(__API__)
        };
    };
    return GatewaysFactory;
}());
export { GatewaysFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2F0ZXdheXNGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2F0ZXdheXNGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUs5QztJQUFBO0lBTUEsQ0FBQztJQUxpQixzQkFBTSxHQUFwQjtRQUNJLE9BQU87WUFDSCxZQUFZLEVBQUUsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDO1NBQzlCLENBQUM7SUFDbEIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUMifQ==