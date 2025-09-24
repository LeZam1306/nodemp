import type { NextFunction, Response } from 'express';
import Jwt from 'jsonwebtoken';
import { ResponseObj } from '../src/lib/responseBuilder.ts';
import type { AuthRequest } from '../types/AuthRequest.interface.ts';

type DecodedToken = { userId: string };

const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  try{
    const token = req.cookies.token;
  if (!token) {
    return res
      .status(400)
      .json(ResponseObj.doResponse(true, 'User not authentified', {}));
  }
  const decodedToken = Jwt.verify(token, 'SECRET') as DecodedToken;
  req.auth = {
    userId: decodedToken.userId,
  };
  next();
  }catch{
    res.status(500).json(ResponseObj.doResponse(true, 'User not authentified', {}));
  }
};

export default auth;
