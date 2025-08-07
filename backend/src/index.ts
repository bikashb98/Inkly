import { Hono } from 'hono'
import { PrismaClient } from "./generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {decode, sign, verify} from 'hono/jwt'



const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

app.post ('api/v1/signup', async c => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

   const findUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  })

  if (findUser) {
    return c.json({error: 'User already exists'}, 400)
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  })
 
  const token = sign({ id: user.id}, c.env.JWT_SECRET)
   return c.json({token})
  })

  app.post ('api/v1/signin', async c => {
     const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

 
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
