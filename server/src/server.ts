import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

/*
* Como eh um aplicacao exemplo nao eh preciso mais nada
* No caso de uma aplicacao real eh preciso definir parametros
* para garantir a seguranca
*/
app.register(cors)

app.get('/', async () => {
    const habits = prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })

    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running')
})