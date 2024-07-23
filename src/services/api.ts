import axios from 'axios';
import { Event } from '../types';  // Adjust the import path as necessary

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getEvents = async (): Promise<Event[]> => {
  const response = await api.get<Event[]>('/posts'); // Using 'posts' to simulate 'events'
  return response.data.map(post => ({
    id: post.id,
    title: post.title,
    date: new Date().toISOString().split('T')[0], // Simulate current date
    location: 'Location ' + post.id, // Simulate location
  }));
};
