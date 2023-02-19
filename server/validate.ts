import Joi from 'joi'

export const schema = Joi.object({
  host: Joi.string().min(3).max(30).required(),
  domain: Joi.string().pattern(/([a-z0-9w]+.*)+[a-z0-9]{2,4}/),
}).with('host', 'domain')
