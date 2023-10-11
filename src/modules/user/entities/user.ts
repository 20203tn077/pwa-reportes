import { Entity, Json, Status } from '../../../kernel/types'
import { Person } from './person'

export type User = Entity<number> & {
  username: string
  password?: string
  userDetails: Json
  type: number
  status?: Status
  person?: Person
}