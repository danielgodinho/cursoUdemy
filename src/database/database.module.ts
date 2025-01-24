import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',   
    host: 'localhost',  
    port: 5432,
    username: 'postgres',   
    password: 'postgres',    
    database: 'davtraining',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
}

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => dataSourceOptions,
        }),
    ],
})
export class DatabaseModule {}
