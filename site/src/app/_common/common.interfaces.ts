import { Injectable } from "@angular/core";

@Injectable()
export abstract class ILogger {
    abstract log(message: string): void;
    abstract error(message: string): void;
    abstract warning(message: string): void;
    abstract forContext<T>(ctr: Function): ILogger;
}

@Injectable()
export abstract class IDataService {
    abstract getSingle<T extends {id: string}>(ctr: {new(): T}, id: string): Promise<T>;
    abstract getList<T>(ctr: {new(): T}): Promise<T[]>;
}

@Injectable()
export abstract class DataServiceOptions{
    abstract basePath: string;
    abstract mappings: DataServiceTypeMapping;
    fileExtension: string = ".json";
}

export interface DataServiceTypeMapping {
    [path: string]: Function;
}