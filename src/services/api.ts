import axios from 'axios';
import { Event } from '../types';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000, 
});

export const getEvents = async (): Promise<Event[]> => {
  const response = await api.get<any[]>(`/posts?_=${new Date().getTime()}`);
  return response.data.map(post => ({
    id: post.id,
    title: post.title,
    date: new Date().toISOString().split('T')[0],
    location: 'Location ' + post.id,
  }));
};
