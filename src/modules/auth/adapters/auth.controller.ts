import { Request, Response, Router } from 'express'
import { AuthStorageGateway } from './auth.storage.gateway'
import { UserStorageGateway } from 'modules/user/adapters/user-storage-gateway'
import { LoginInteractor } from '../use-cases/login.interactor'
import { Credentials } from '../entities/credentials.dto'

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const authRepository = new AuthStorageGateway()
      const userRepository = new UserStorageGateway()
      const interactor = new LoginInteractor(authRepository, userRepository)
      const user = await interactor.execute(req.body as Credentials)
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: e })
    }
  }
}

export const userRouter = Router()

userRouter.get('/login', [], AuthController.login)