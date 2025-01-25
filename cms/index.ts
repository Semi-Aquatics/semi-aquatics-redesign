import axios from 'axios';
import { ArtistsT } from '../types';

// Define the base URI based on the environment
const baseUri = process.env.DEV_CMS === 'development' ? 'http://localhost:3000' : 'https://semi-aquatics-cms.onrender.com';

class Cms {
  // Method to fetch the next drop using axios
  async getNextDrop() {
    try {
      const response = await axios.get(`${baseUri}/api/next-drop`);
      return response.data; // Return the data from the API
    } catch (error) {
      console.error('Error fetching next drop:', error);
      throw error; // Re-throw the error to handle it later
    }
  }

  // Method to fetch artists using fetch API
  async getArtists(): Promise<ArtistsT> {
    try {
      const response = await fetch(`${baseUri}/api/artists`);

      if (!response.ok) {
        throw new Error('Failed to fetch artists');
      }

      const data = await response.json();

      return data; // Return the parsed JSON data
    } catch (error) {
      console.error('Error fetching artists:', error);
      throw error; // Re-throw the error to handle it later
    }
  }
}

export default Cms;
