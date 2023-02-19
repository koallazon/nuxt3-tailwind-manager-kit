import { schema } from '../validate'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('🚀 ~ file: outer.post.ts:3 ~ defineEventHandler ~ body', body)
  try {
    const valid = await schema.validateAsync(body)
    console.log('🚀 ~ file: outer.post.ts:7 ~ defineEventHandler ~ valid', valid)
    $fetch('http://localhost:3000/user?name=koallazon')
      .then((res) => {
        console.log('user res', res)
      })
      .catch((err) => {
        console.log('user err', err)
      })

    return `success - ${new Date().toLocaleTimeString()}`
  } catch (err: any) {
    const errorObj = createError({ statusCode: 400, statusMessage: err.details[0].message })
    sendError(event, errorObj)
  }
})
