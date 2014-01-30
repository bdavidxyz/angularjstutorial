
describe('Starting application', function () {
    it('Should access to the application', function () {
        browser().navigateTo(ROOT_URL);
        expect(repeater('#HB_main-container').count()).toEqual(1);
        activateXHRlog();
    });
});