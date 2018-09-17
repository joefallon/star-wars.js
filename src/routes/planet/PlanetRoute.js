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
require('./PlanetRoute.css');
import * as React from 'react';
import { PlanetModelFactory } from '../../models/PlanetModelFactory';
var PlanetRoute = /** @class */ (function (_super) {
    __extends(PlanetRoute, _super);
    function PlanetRoute(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            model: props.model ? props.model : PlanetModelFactory.create()
        };
        return _this;
    }
    PlanetRoute.prototype.render = function () {
        return (null);
    };
    return PlanetRoute;
}(React.Component));
export default PlanetRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhbmV0Um91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQbGFuZXRSb3V0ZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRTdCLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRS9CLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSXJFO0lBQTBCLCtCQUFtRDtJQUV6RSxxQkFBbUIsS0FBdUI7UUFBMUMsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FLZjtRQUhHLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFO1NBQ2pFLENBQUM7O0lBQ04sQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQWJELENBQTBCLEtBQUssQ0FBQyxTQUFTLEdBYXhDO0FBRUQsZUFBZSxXQUFXLENBQUMifQ==