// require("jest-enzyme"); //add enzyme matchers to global expect
// require("babel-polyfill"); //need babel for newer ES features on older node versions

global.clearJestMocks = (...mocks) => {
	mocks.forEach((mock) => mock.mockClear())
};