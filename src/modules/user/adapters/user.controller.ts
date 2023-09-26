import { Request, Response } from 'express'
import { GetAllUsersInteractor } from '../use-cases/get-all-users.interactor'
import { UserStorageGateway } from './user-storage-gateway'

export class UserController {
  static async getAll(req: Request, res: Response) {
    try {
      const repository = new UserStorageGateway()
      const interactor = new GetAllUsersInteractor(repository)
      const users = await interactor.execute()
      res.status(200).json(users)
    } catch (e) {
      console.log(e)
      
      
    }
  }
}
export 

userRouter.get('/')