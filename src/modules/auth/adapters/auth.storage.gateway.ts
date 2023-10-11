import { AuthInformation } from '../entities/auth-information'
import { IAuthrepository } from '../use-cases/ports/auth.repository'

export class AuthStorageGateway implements IAuthrepository {
  login(username: string): Promise<AuthInformation> {
    throw new Error('Method not implemented.')
  }
}