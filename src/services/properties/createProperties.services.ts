
import AppDataSource from "../../data-source";
import { Address } from "../../entities/adress.ententy";
import { Categories } from "../../entities/categories.ententy";
import { Properties } from "../../entities/properties.ententy";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";


const createPropertiesService = async ({
    value,
    size,
    address,
    categoryId,
}: IPropertyRequest) => {
    const propertiesRepository = AppDataSource.getRepository(Properties);
    const addressesRepository = AppDataSource.getRepository(Address);
    const categoriesRepository = AppDataSource.getRepository(Categories);
    const addresses = await addressesRepository.find();
    const categories = await categoriesRepository.find();


    const category = await categoriesRepository.findOneBy({ id: categoryId });
    if (!category) {
        throw new AppError("Missing categories", 404);
    }
    if (address.state.length > 2) {
        throw new AppError("Invalid state", 400);
    }

    if (address.zipCode.length > 8) {
        throw new AppError("Invalid zip code", 400);
    }

    const adressesExists = addresses.find(
        (addresses) => addresses.zipCode === address.zipCode
    )

    if (adressesExists) {
        throw new AppError("Address already exists", 409);
    }

    const categoryIdValid = categories.find(
        (categories) => categories.id === categoryId
    )

    if (!categoryIdValid) {
        throw new AppError("Invalid category id.", 404);
    }

    const newAddress = new Address();
    newAddress.city = address.city;
    newAddress.district = address.district;
    newAddress.number != address.number;
    newAddress.state = address.state;
    newAddress.zipCode = address.zipCode;

    addressesRepository.create(newAddress);
    await addressesRepository.save(newAddress);

    const newProperty = new Properties();
    newProperty.value = value;
    newProperty.size = size;
    newProperty.address = newAddress;
    newProperty.category = categoryIdValid;

    propertiesRepository.create(newProperty);
    await propertiesRepository.save(newProperty);


    return newProperty;

};
export default createPropertiesService;