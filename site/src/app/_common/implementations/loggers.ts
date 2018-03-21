import { Injectable } from "@angular/core";
import { ILogger } from "../common.interfaces";

export class EmptyLogger implements ILogger {
    log(message: string): void {
    }
    error(message: string): void {

    }
    warning(message: string): void {

    }
    forContext<T>(ctr: { new(): T }): ILogger {
        return this;
    }
}

@Injectable()
export class ConsoleLogger implements ILogger {
    private context: string;

    log(message: string): void {
        console.log(this.context + ":" + message);
    }
    error(message: string): void {
        console.log(this.context + ":" + message);
    }
    warning(message: string): void {
        console.log(this.context + ":" + message);
    }
    forContext(ctr: any): ILogger {
        if (typeof ctr === "function"){
            var innerLogger = new ConsoleLogger();
            innerLogger.context = (this.context ? this.context + "." : "") + ctr["name"];
            return innerLogger;
        }
        else
            return this;
    }
}