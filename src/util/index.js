const BASE_URL = 'https://strangers-things.herokuapp.com/api/2108-CSE-RM-WEB-PT'

export const callApi = async ({ url, method, token, body }) => {
  try {
    const options = {
      method: method ? method.toUpperCase() : 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
    if (token) options.headers['Authorization'] = `Bearer ${token}`;
    const response = await fetch(`${BASE_URL}${url}`, options);
    const data = await response.json();
    if(data.error) {
    (data.error);
  }
  return data;
  } catch (error) {
  console.log('ERROR', error)
  }
}