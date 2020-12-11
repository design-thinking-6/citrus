import Joi from 'joi';

export const CreatableNoticeInfoSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

export default {
  CreatableNoticeInfoSchema,
};
