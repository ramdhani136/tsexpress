import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

class TodoValidator {
  public static validate = [
    check("description").isString(),
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).send({ errors: errors.array() });
      } else {
        return next();
      }
    },
  ];
}

export default TodoValidator.validate;
