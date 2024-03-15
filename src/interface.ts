export interface City {
  name: string;
  id: number;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Weather {
  temperature: number;
  id: number;
  description: string;
  humidity: number;
  windSpeed: number;
}
