describe('CharacterRoute', function () {
    beforeEach(function () {
        document.title = '';
    });
    // it('displays the character information', (done) => {
    //
    //     function renderRoute(props: CharacterRouteProps) {
    //         const gateways = GatewaysTestFactory.create();
    //
    //         const char = CharacterEntityTestFactory.create();
    //         const retrieveCharacterStub = sinon.stub();
    //         retrieveCharacterStub.returns(char);
    //         gateways.charactersGateway.retrieveCharacter = retrieveCharacterStub;
    //
    //         const film = FilmEntityTestFactory.create();
    //         const retrieveFilmStub = sinon.stub();
    //         retrieveFilmStub.returns(film);
    //         gateways.filmsGateway.retrieveFilm = retrieveFilmStub;
    //
    //         const planet = PlanetEntityTestFactory.create();
    //         const retrievePlanetStub = sinon.stub();
    //         retrievePlanetStub.returns(planet);
    //         gateways.planetsGateway.retrievePlanet = retrievePlanetStub;
    //
    //         const species = SpeciesEntityTestFactory.create();
    //         const retrieveSpeciesStub = sinon.stub();
    //         retrieveSpeciesStub.returns(species);
    //
    //         gateways.speciesGateway.retrieveSpecies = retrieveSpeciesStub;
    //
    //         props.model = new CharacterModel(gateways);
    //
    //         return (<CharacterRoute {...props}/>);
    //     }
    //
    //     const wrapper = mount(
    //         <MemoryRouter initialEntries={['/character/1']} initialIndex={0}>
    //             <Switch>
    //                 <Route exact path='/character/:id' render={(props) => renderRoute(props)}/>
    //             </Switch>
    //         </MemoryRouter>
    //     );
    //
    //     setTimeout(() => {
    //         wrapper.update();
    //         assert.strictEqual(document.title, 'Character Info | API Explorer');
    //
    //         assert.strictEqual(wrapper.find('h2').text(),          'test name');
    //         assert.strictEqual(wrapper.find('.height').text(),     '1 cm');
    //         assert.strictEqual(wrapper.find('.mass').text(),       '2 kg');
    //         assert.strictEqual(wrapper.find('.hair-color').text(), 'green');
    //         assert.strictEqual(wrapper.find('.skin-color').text(), 'white');
    //         assert.strictEqual(wrapper.find('.eye-color').text(),  'brown');
    //         assert.strictEqual(wrapper.find('.birth-year').text(), '1900');
    //         assert.strictEqual(wrapper.find('.gender').text(),     'male');
    //
    //         const homeworldLink = wrapper.find('.homeworld').first();
    //         assert.strictEqual(homeworldLink.props()['to'], '/planet/2');
    //         assert.strictEqual(homeworldLink.text(),        'test planet name');
    //
    //         const films = wrapper.find('.film-item');
    //         const filmLink = films.first().find('Link');
    //         assert.strictEqual(filmLink.props()['to'], '/film/2');
    //         assert.strictEqual(filmLink.text(),        'test title');
    //
    //         assert.fail('not implemented');
    //         done();
    //     }, 0);
    // });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyUm91dGUudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYXJhY3RlclJvdXRlLnRlc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN2QixVQUFVLENBQUM7UUFDUCxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUVILHVEQUF1RDtJQUN2RCxFQUFFO0lBQ0YseURBQXlEO0lBQ3pELHlEQUF5RDtJQUN6RCxFQUFFO0lBQ0YsNERBQTREO0lBQzVELHNEQUFzRDtJQUN0RCwrQ0FBK0M7SUFDL0MsZ0ZBQWdGO0lBQ2hGLEVBQUU7SUFDRix1REFBdUQ7SUFDdkQsaURBQWlEO0lBQ2pELDBDQUEwQztJQUMxQyxpRUFBaUU7SUFDakUsRUFBRTtJQUNGLDJEQUEyRDtJQUMzRCxtREFBbUQ7SUFDbkQsOENBQThDO0lBQzlDLHVFQUF1RTtJQUN2RSxFQUFFO0lBQ0YsNkRBQTZEO0lBQzdELG9EQUFvRDtJQUNwRCxnREFBZ0Q7SUFDaEQsRUFBRTtJQUNGLHlFQUF5RTtJQUN6RSxFQUFFO0lBQ0Ysc0RBQXNEO0lBQ3RELEVBQUU7SUFDRixpREFBaUQ7SUFDakQsUUFBUTtJQUNSLEVBQUU7SUFDRiw2QkFBNkI7SUFDN0IsNEVBQTRFO0lBQzVFLHVCQUF1QjtJQUN2Qiw4RkFBOEY7SUFDOUYsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1QsRUFBRTtJQUNGLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsK0VBQStFO0lBQy9FLEVBQUU7SUFDRiwrRUFBK0U7SUFDL0UsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwyRUFBMkU7SUFDM0UsMkVBQTJFO0lBQzNFLDJFQUEyRTtJQUMzRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLEVBQUU7SUFDRixvRUFBb0U7SUFDcEUsd0VBQXdFO0lBQ3hFLCtFQUErRTtJQUMvRSxFQUFFO0lBQ0Ysb0RBQW9EO0lBQ3BELHVEQUF1RDtJQUN2RCxpRUFBaUU7SUFDakUsb0VBQW9FO0lBQ3BFLEVBQUU7SUFDRiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixNQUFNO0FBQ1YsQ0FBQyxDQUFDLENBQUMifQ==