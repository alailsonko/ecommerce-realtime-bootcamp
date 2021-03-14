import Env from '@ioc:Adonis/Core/Env'

export default {
   connection: Env.get('DB_CONNECTION', 'mysql'),
   mysql: {
     client: 'mysql',
     connection: {
       host: Env.get('DB_HOST', 'localhost'),
       port: Env.get('DB_PORT', ''),
       user: Env.get('DB_USER', 'root'),
       password: Env.get('DB_PASSWORD', ''),
       database: Env.get('DB_DATABASE', 'db'),
     }
   }
}
