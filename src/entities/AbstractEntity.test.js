import * as assert from 'assert';
import { AbstractEntityTestable } from './AbstractEntityTestable';
describe('AbstractEntity', function () {
    describe('#getIdFromUrl', function () {
        it('returns id when url is valid', function () {
            var url = 'https://swapi.co/api/people/20/';
            var id = AbstractEntityTestable.getIdFromUrl(url);
            assert.strictEqual(id, 20);
        });
        it('returns 0 when url is invalid', function () {
            var url = 'https://swapi.co/api/people/20';
            var id = AbstractEntityTestable.getIdFromUrl(url);
            assert.strictEqual(id, 0);
        });
        it('returns 0 when url is empty', function () {
            var url = '';
            var id = AbstractEntityTestable.getIdFromUrl(url);
            assert.strictEqual(id, 0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RFbnRpdHkudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFic3RyYWN0RW50aXR5LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEUsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3ZCLFFBQVEsQ0FBQyxlQUFlLEVBQUU7UUFDdEIsRUFBRSxDQUFDLDhCQUE4QixFQUFFO1lBQy9CLElBQU0sR0FBRyxHQUFHLGlDQUFpQyxDQUFDO1lBQzlDLElBQU0sRUFBRSxHQUFJLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywrQkFBK0IsRUFBRTtZQUNoQyxJQUFNLEdBQUcsR0FBRyxnQ0FBZ0MsQ0FBQztZQUM3QyxJQUFNLEVBQUUsR0FBSSxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUU7WUFDOUIsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBTSxFQUFFLEdBQUksc0JBQXNCLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9