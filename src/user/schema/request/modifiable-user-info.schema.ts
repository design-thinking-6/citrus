import Joi from 'joi';

export const ModifiableUserInfoSchema = Joi.object({
  nickname: Joi.string().min(1).max(60).optional(),
  password: Joi.string().min(8).max(30).optional(),
  grade: Joi.number().optional(),
  short_message: Joi.string().optional(),
  url: Joi.string().optional(),
});

export default {
  ModifiableUserInfoSchema,
};
