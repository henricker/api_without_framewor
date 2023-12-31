import { InputListUsersDto, OutputListUsersDto } from "@domain/dto/ListUsersDtos";
import { IListUsersUseCase } from "@domain/useCases/ListUsersUseCase";

export class ListUsersUseCaseMock implements IListUsersUseCase {
  execute(_: InputListUsersDto): Promise<OutputListUsersDto> {
    return Promise.resolve([])
  }
}
