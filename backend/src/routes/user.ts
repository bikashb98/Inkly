import {Hono} from 'hono'
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {sign} from 'hono/jwt'


export const userRouter = new Hono<{
  Bindings: {
      ACCELERATE_URL: string;
      JWT_SECRET: string;
  }
}>()



userRouter.post ('/signup', async c => {
  // Debug: Return the DATABASE_URL to see what value it has
  
  const prisma = new PrismaClient({
    datasourceUrl: c.env.ACCELERATE_URL,
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
 
  const token = await sign({ id: user.id}, c.env.JWT_SECRET)
   return c.json({token}, 200)
  })

  userRouter.post ('/signin', async c => {
      const prisma = new PrismaClient({
    datasourceUrl: c.env.ACCELERATE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();


   const findUser = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  })

  if (!findUser) {
    c.status(400)
    return c.json({error: 'User not found'})
  }

  const jwt = await sign({ id: findUser.id}, c.env.JWT_SECRET)
  return c.json({token: jwt}, 200)


 

 
   
  })

