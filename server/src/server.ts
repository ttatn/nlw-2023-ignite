import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

/*
* Como eh um aplicacao exemplo nao eh preciso mais nada
* No caso de uma aplicacao real eh preciso definir parametros
* para garantir a seguranca
*/
app.register(cors)

app.register(appRoutes)

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running')
})