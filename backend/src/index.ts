import { Hono } from 'hono'

const app = new Hono()

app.post ('api/v1/signup', async c => {
   return c.text ('Hello Hono!')
  })

  app.post ('api/v1/signin', async c => {
   return c.text ('Hello Hono!')
  })

  app.post ('api/v1/blog', async c => {
   return c.text ('Hello Hono!')
  })

  app.put ('api/v1/blog', async c => {
   return c.text ('Hello Hono!')
  })

  app.get ('api/v1/blog/:id', async c => {
   return c.text ('Hello Hono!')
  })

export default app
