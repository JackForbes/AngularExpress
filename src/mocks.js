const Mock$state = jasmine.createSpyObj('$state', [
  'go'
]);

const MockAppService = jasmine.createSpyObj('AppService', [
  'analyticsEvent',
  'getRequest',
  'postRequest',
  'nextStartMonth',
  'updateMeta',
  'isJson'
]);

const MockSignupService = jasmine.createSpyObj('SignupService', [
  'getNewAccountObject',
  'getYearOptions'
]);

export {
  Mock$state,
  MockAppService,
  MockSignupService
};
