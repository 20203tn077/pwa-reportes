import { Client, PoolConfig } from 'pg'
import Pool from 'pg-pool'
import { config as envconfig } from 'dotenv'

envconfig()

const { DB_PORT, DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD } = process.env

const config: Pool.Config<Client> = {
  database: DB_DATABASE,
  port: Number(DB_PORT),
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  max: 5
}

export const pool = new Pool(config)