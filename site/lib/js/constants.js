let baseUrl = '';

function getBaseUrl() {
  let fullUrl = window.location.href;

  let indexOfHashBang = fullUrl.indexOf('#');

  if (indexOfHashBang === -1)
    return fullUrl;

  return fullUrl.substring(0, indexOfHashBang);
}

getBaseUrl();

export const backendApiAddress = baseUrl + "api/articles"; // "http://localhost:3000/api/articles";
export const backendApiBaseAddress = baseUrl + "api"; //  "http://localhost:3000/api";
export const frontendAddress = baseUrl + "#/"; // "http://localhost:3000/#/"
export const mainContent = 'MainContent';
export const pageSize = 10;