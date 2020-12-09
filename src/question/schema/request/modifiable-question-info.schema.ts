import Joi from 'joi';

export const ModifiableQuestionInfoSchema = Joi.object({
  score: Joi.number().positive().optional(),
  difficult: Joi.number().positive().allow(0).optional(),
  answer: Joi.string().optional(),
  type: Joi.string().allow('subjective', 'objective').optional(),
  hints: Joi.array().items({
    time: Joi.number().positive().required(),
    value: Joi.string().required(),
  }).optional(),
  flows: Joi.array().items(Joi.array().items(Joi.string().required()).required()).optional(),
});

export default {
  ModifiableQuestionInfoSchema,
};
