import { hashSync, compareSync } from 'bcryptjs'

export async function hash(password: string) {
  return hashSync(password, 10)
}

export async function compare(password: string, hashedPassword: string) {
  return compareSync(password, hashedPassword)
}