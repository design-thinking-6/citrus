import Joi from 'joi';

export const CreatableQuestionInfoSchema = Joi.object({
  id: Joi.string().required(),
  score: Joi.number().positive().required(),
  difficult: Joi.number().positive().allow(0).required(),
  answer: Joi.string().required(),
  type: Joi.string().allow('subjective', 'objective').required(),
  hints: Joi.array().items({
    time: Joi.number().positive().required(),
    value: Joi.string().required(),
  }).required(),
  flows: Joi.array().items(Joi.array().items(Joi.string().required()).required()).required(),
});

export default {
  CreatableQuestionInfoSchema,
};
