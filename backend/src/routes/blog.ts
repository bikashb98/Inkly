import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@bikashb13/inkly-common";

export const blogRouter = new Hono<{
  Bindings: {
      ACCELERATE_URL: string;
      JWT_SECRET: string;
  },
  Variables: {
    userId: string;
  }
}>()


blogRouter.use ('/*', async (c, next) => {
  const header = c.req.header('Authorization')
  if (!header) {
    c.status(401)
    return c.json({error: "unauthorized"})
  }

  const token = header.split(' ')[1]
  const response = await verify (token, c.env.JWT_SECRET)
  if (response.id) {
    c.set('userId', response.id as string)
    await next()
  }
  else {
    c.status(403)
    return c.json({error: "unauthorized"})
  } 
})

blogRouter.post ('/', async c => {
    const prisma = new PrismaClient({
    datasourceUrl: c.env.ACCELERATE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const {success} = createBlogInput.safeParse(body)

  if (!success) {
    return c.json({error: 'Invalid input'}, 400)
  }

  const authorId = c.get('userId')
   const posts = await prisma.post.create({
     data: {
       title: body.title,
       content: body.content,
       authorId: authorId
     },
   })

    return c.json({
        id: posts.id
    })

  })

  blogRouter.put ('/update', async c => {

      const prisma = new PrismaClient({
    datasourceUrl: c.env.ACCELERATE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const {success} = updateBlogInput.safeParse(body)

  if (!success) {
    return c.json({error: 'Invalid input'}, 400)
  }

  const posts = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  })

  return c.json({
    id: posts.id
  })
  })

 blogRouter.get('/bulk', async  c => {
       const prisma = new PrismaClient({
    datasourceUrl: c.env.ACCELERATE_URL,
  }).$extends(withAccelerate())

  const posts = await prisma.post.findMany();

  return c.json({
    posts //add pagination
  })
  })

  blogRouter.get ('/:id', async c => {

      const prisma = new PrismaClient({
    datasourceUrl: c.env.ACCELERATE_URL,
  }).$extends(withAccelerate())

  const params = await c.req.param()

  const posts = await prisma.post.findFirst({
    where: {
      id: params.id,
    }
  })

  return c.json({
     posts
  })
 
  })

  