import { AuthInformation } from 'modules/auth/entities/auth-information'
import { Credentials } from '../../entities/credentials.dto'
import { User } from 'modules/user/entities/user'

export interface IAuthrepository {
  login(username: string): Promise<AuthInformation>
}