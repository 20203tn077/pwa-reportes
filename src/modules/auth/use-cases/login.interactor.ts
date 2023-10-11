import { UseCase } from '../../../kernel/contract'
import { Credentials } from '../entities/credentials.dto'
import { User } from '../../../modules/user/entities/user'
import { IAuthrepository } from './ports/auth.repository'
import { IUserRepository } from 'modules/user/use-cases/ports/user.repository'
import { compare } from 'kernel/functions'
import { Errors } from 'kernel/types'

export class LoginInteractor implements UseCase<Credentials, User> {
  constructor(
    private readonly _authRepository: IAuthrepository,
    private readonly _userRepository: IUserRepository
  ) {}

  async execute(payload: Credentials): Promise<User> {
    const authInfo = await this._authRepository.login(payload.username)
    if (await compare(authInfo.password, payload.password)) return {} as User
    else throw new Error(Errors.CREDENTIALS_MISMATCH)
  }
}