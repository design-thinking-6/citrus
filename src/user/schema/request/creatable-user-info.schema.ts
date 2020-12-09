import Joi from 'joi';

export const CreatableUserInfoSchema = Joi.object({
  id: Joi.string().min(8).max(30).required(),
  nickname: Joi.string().min(1).max(60).required(),
  password: Joi.string().min(8).max(30).required(),
});

export default {
  CreatableUserInfoSchema,
};
