import { Request, Response } from "express";

import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'carlos@rocketseat.com.br',
    password: '123',
    techs: [
      'Node.js',
      'ReactJS',
      { title: 'JavaScript', experience: 80 },
    ],
  });

  return response.json(user);
}
