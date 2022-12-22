
import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.ententy"
import { Schedule } from "../../entities/schecules.ententy"
import { User } from "../../entities/user.ententy"
import { AppError } from "../../errors/AppError"
import { IScheduleRequest } from "../../interfaces/schedules"

const schedulesCreateService = async ({ date, hour, propertyId, userId }: IScheduleRequest) => {

    const schedulesRepository = AppDataSource.getRepository(Schedule)
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const userRepository = AppDataSource.getRepository(User)


    const properties = await propertiesRepository.findOneBy({ id: propertyId })
    if (!properties) {
        throw new AppError("Property not found", 404);
    }

    const users = await userRepository.findOneBy({ id: userId })
    if (!users) {
        throw new AppError("User not found", 404);
    }

    const newDate = new Date(date).getDay()
    if (newDate === 0 || newDate === 6) {
        throw new AppError("Invalid Date", 400);
    }

    const newHour = Number(hour.split(":").join(""))
    if (newHour < 800 || newHour > 1800) {
        throw new AppError("Invalid hour", 400);
    }

    const existsDate = await AppDataSource.createQueryBuilder().
        select('date').
        from(Schedule, 'date')
        .where("date = :date", { date: date })
        .getOne()

    const existsHour = await AppDataSource.createQueryBuilder().
        select('hour').
        from(Schedule, 'hour')
        .where("hour = :hour", { hour: hour })
        .getOne()


    if (existsDate && existsHour) {
        throw new AppError('Date or hour already exists', 409)
    }

    const newSchedule = schedulesRepository.create({
        date,
        hour,
        property: properties,
        user: users
    })

    await schedulesRepository.save(newSchedule)

    return newSchedule;
}

export default schedulesCreateService;









