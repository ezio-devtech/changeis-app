import axios from 'axios';

const fakerApiUrl = 'https://fakerapi.it/api/v1';

export const getFakeImages = async () => {
  try {
    const response = await axios.get(`${fakerApiUrl}/images?_width=380`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fake images:', error);
    throw error;
  }
};
