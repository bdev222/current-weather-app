const mockAxios = jest.genMockFromModule("axios");
console.log("in mock setup");
mockAxios.interceptors = mockAxios.interceptors || {};
mockAxios.interceptors.response = mockAxios.interceptors.response || {};
mockAxios.interceptors.response.use = jest.fn();
mockAxios.create = () => {
    console.log("in mock create");
    return mockAxios;
};
export default mockAxios;
