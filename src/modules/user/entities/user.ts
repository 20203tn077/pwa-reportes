import { Entity, Status } from '../../../kernel/types'
import { Person } from './person'

export type User = Entity<number> & {
  username: string
  password?: string
  userDetails: object
  type: number
  status?: Status
  person?: Person
}