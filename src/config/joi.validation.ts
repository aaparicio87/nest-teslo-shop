import * as Joi from 'joi';

export const JoiValidaitonSchema = Joi.object({
  PORT: Joi.number().default(3001),
  DB_NAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432),
  DB_USERNAME: Joi.string().default('postgres'),
});
