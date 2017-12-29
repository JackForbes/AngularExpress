import AppService from './AppService';

describe('app', () => {

  describe('AppService', () => {
    let service;

    beforeEach(() => {
      let mockConstants = {
        KEY_CODE: {
          ENTER: 1,
          COMMA: 2,
          SEMICOLON: 3,
          TAB: 4
        }
      };
      service = new AppService(null, null, null, null, null, mockConstants, null);
      // angular.mock.module(AppService);
      // angular.mock.inject(($controller) => {
      //   ctrl = $controller('AppCtrl', {});
      // });
    });

    it('should contain the getPlaceResults method', () => {
      expect(service.getPlaceResults).toBeDefined();
    });

    it('should contain the placesSearch method', () => {
      expect(service.placesSearch).toBeDefined();
    });

    it('should contain the getPlaceDetails method', () => {
      expect(service.getPlaceDetails).toBeDefined();
    });

    it('should contain the showToast method', () => {
      expect(service.showToast).toBeDefined();
    });

    it('should contain the handleSuccess method', () => {
      expect(service.handleSuccess).toBeDefined();
    });

    it('should contain the handleError method', () => {
      expect(service.handleError).toBeDefined();
    });

    it('should contain the getRequest method', () => {
      expect(service.getRequest).toBeDefined();
    });

    it('should contain the postRequest method', () => {
      expect(service.postRequest).toBeDefined();
    });

    it('should contain the putRequest method', () => {
      expect(service.putRequest).toBeDefined();
    });

    it('should contain the nextStartMonth method', () => {
      expect(service.nextStartMonth).toBeDefined();
    });

    it('should contain the formatPlacesResponse method', () => {
      expect(service.formatPlacesResponse).toBeDefined();
    });

    it('should contain getDateObject which returns a date object', () => {
      expect(service.getDateObject).toBeDefined();
      let date = new Date(2017, 2, 1);
      expect(service.getDateObject(2, 2017)).toEqual(date);
    });
  });
});
