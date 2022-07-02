/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Database from '@ioc:Adonis/Lucid/Database'
import Hash from '@ioc:Adonis/Core/Hash'
import Route from '@ioc:Adonis/Core/Route'
import { testVariable } from '@desimir/chess-shared/dist'

Route.get('/', async () => {
  return { hello: testVariable }
})

Route.post('api/register', async ({ request }) => {
  const firstName = request.input('first_name')
  const lastName = request.input('last_name')
  const email = request.input('email')
  const password = request.input('password')

  // selecting table also returns an instance of the query builder
  await Database.table('users')
    .returning('id')
    .insert({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: await Hash.make(password),
    })
})

Route.post('api/login', async ({ auth, request }) => {
  const email = request.input('email')
  const password = request.input('password')

  return await auth.use('api').attempt(email, password)
})
