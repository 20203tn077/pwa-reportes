import { Entity } from 'kernel/types'

export type AuthInformation = Entity<number> & {
  username: string
  password: string
}