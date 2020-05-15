import { Request, Response } from 'express';
import login from '../services/auth/login';
import signup from '../services/auth/signup';

export default [
    {
        path: '/login',
        method: 'POST',
        handler: login
    },
    {
      path: '/signup',
      method: 'POST',
      handler: signup
  }
];