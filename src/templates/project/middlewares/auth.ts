import type { NextFunction, Response } from 'express';
import Jwt from 'jsonwebtoken';
import { ResponseObj } from '../src/lib/responseBuilder.ts';
import type { AuthRequest } from '../src/types/authRequest.interface.ts';

type DecodedToken = { userId: string };

const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(400)
      .json(ResponseObj.doResponse(true, 'User not authentified', {}));
  }

  try {
    const decodedToken = Jwt.verify(token, 'SECRET') as DecodedToken;
    req.auth = {
      userId: decodedToken.userId,
    };
    next();
  } catch {
    res
      .status(400)
      .json(ResponseObj.doResponse(true, 'User not authentified', {}));
  }
};

export default auth;
