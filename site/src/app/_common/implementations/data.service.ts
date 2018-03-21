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

    getSingle<T extends { id: string }>(ctr: { new(): T, id: string }, id: string): Promise<T> {
        let mapping = this.getMapping(ctr);
        if (!mapping) {
            this.logger.error("Unable to find mapping for: " + ctr["name"]);
            return new Promise(() => null);
        }

        return this.getListFromPath<T>(mapping)
            .then(list => list.find(item => item.id == id));
    }
    getList<T>(ctr: { new(): T }): Promise<T[]> {
        let mapping = this.getMapping(ctr);
        if (!mapping) {
            this.logger.error("Unable to find mapping for: " + ctr["name"]);
            return new Promise(() => []);
        }

        return this.getListFromPath<T>(mapping);
    }

    private getListFromPath<T>(path: string): Promise<T[]> {
        return this.http.get(this.basePath + path + this.fileExtension)
            .toPromise()
            .then(response => response.json() as T[])
            .catch(error => {
                this.logger.error("Error getting from " + path);
                return [];
            });
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