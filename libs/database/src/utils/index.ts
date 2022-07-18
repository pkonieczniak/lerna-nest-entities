import { DataSource, EntityTarget, Repository } from 'typeorm'

type ICreateRepository = <T>(EntityClass: EntityTarget<T>) => (dataSource: DataSource) => Repository<T> 
export const createRepository: ICreateRepository = <T>(EntityClass: EntityTarget<T>) => {
  return (dataSource: DataSource) => dataSource.getRepository(EntityClass)
} 

export function createCustomRepository<T, K>(EntityClass: EntityTarget<T>, cb: (repository: Repository<T>) => K) {
  return (dataSource: DataSource) => {
    const repository = dataSource.getRepository(EntityClass) 
    return repository.extend(cb(repository))
  }
}