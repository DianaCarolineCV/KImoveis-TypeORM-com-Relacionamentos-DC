import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUserRequest, IUser, IUserUpdate, IUserLogin } from "../interfaces/users/"

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required(),
    isActive: yup.boolean().notRequired()
})

const iUserSerializer: SchemaOf<IUser> = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().notRequired(),
    email: yup.string().email().required(),
    isAdm: yup.boolean().required(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required()
})

const iUserLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),

})

const IUserUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired(),

})

const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    isAdm: yup.boolean().required(),
    isActive: yup.boolean().required(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired()
})

export const listUsersWithoutPassword = yup.array(userWithoutPasswordSerializer);

export { userSerializer, iUserSerializer, iUserLoginSerializer, IUserUpdateSerializer, userWithoutPasswordSerializer }