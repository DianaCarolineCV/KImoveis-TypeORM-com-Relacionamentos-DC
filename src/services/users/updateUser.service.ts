import { IUser, IUserUpdate } from "../../interfaces/users/index"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.ententy"
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers"
import { hash } from "bcryptjs"

const updateUserService = async (userData: IUserUpdate, userId: string): Promise<IUser> => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id: userId
    })

    const userUpdated = {
        name: userData.name ? userData.name : findUser?.name,
        email: userData.email ? userData.email : findUser?.email,
        createdOn: findUser?.createdAt,
        updatedOn: new Date(),
        uuid: userId,
        isAdm: findUser?.isAdm,
        isActive: findUser?.isActive,
        password: userData.password ? await hash(userData.password, 10) : findUser?.password,
    };

    const updatedUser = userRepository.create({
        ...findUser,
        ...userUpdated
    })
    await userRepository.save(updatedUser)

    const userWithoutPassord = await userWithoutPasswordSerializer.validate(userUpdated, {
        stripUnknown: true
    })

    return userWithoutPassord;
}

export default updateUserService