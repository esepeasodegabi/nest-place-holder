import { AddressDto } from './address.dto';
import { CompanyDto } from './company.dto';

export interface UserDto {

    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: AddressDto;
    company: CompanyDto;

}
