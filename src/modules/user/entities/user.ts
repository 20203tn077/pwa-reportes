import { Entity, Status } from '../../../kernel/types'
import { Person } from './person'

export type User = Entity<number> & {
  username: string
  password?: string
  token?: string
  kastSignin?: Date
  createdAt?: string
  status?: Status
  person?: Person
}