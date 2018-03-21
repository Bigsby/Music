import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise'

import { IDataService, DataServiceOptions, DataServiceTypeMapping, ILogger } from "./../common.interfaces";

@Injectable()
export class DataService implements IDataService {
    private mappings: { [typeName: string]: string } = {};
    private basePath = "data/";
    private fileExtension: string = "";

    constructor(private http: Http,
        private options: DataServiceOptions,
        private logger: ILogger

    ) {
        this.logger = logger.forContext(DataService);
        this.processMappings();
        this.basePath += options.basePath + "/";
        this.fileExtension = options.fileExtension;
    }

    getSingle<T>(ctr: { new(): T }, id: string): Promise<T> {
        let mapping = this.getMapping(ctr);
        if (!mapping) {
            this.logger.error("Unable to find mapping for: " + ctr["name"]);
            return new Promise(() => null);
        }

        return this.getListFromPath<T>(mapping, id)
            .catch(error => {
                this.logger.error("Error getting item from " + mapping + " id '" + id + "':" + error);
                return null;
            });;
    }

    getList<T>(ctr: { new(): T }): Promise<T[]> {
        let mapping = this.getMapping(ctr);
        if (!mapping) {
            this.logger.error("Unable to find mapping for: " + ctr["name"]);
            return new Promise(() => []);
        }

        return this.getListFromPath<T[]>(mapping)
            .catch(error => {
                this.logger.error("Error getting list from " + mapping + ":" + error);
                return [];
            });;
    }

    private getListFromPath<T>(path: string, file?: string): Promise<T> {
        return this.http.get(this.basePath + path + (file || "") + this.fileExtension)
            .toPromise()
            .then(response => response.json() as T);
    }

    private getMapping<T>(ctr: { new(): T }) {
        return this.mappings[ctr["name"]];
    }

    private processMappings() {
        for (let path in this.options.mappings) {
            this.mappings[this.options.mappings[path]["name"]] = path;
        }
    }
}