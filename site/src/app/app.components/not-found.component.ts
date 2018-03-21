import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";

@Component({
})
export class NotFoundComponent implements OnInit {
    constructor(private router: Router, private activeRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        let path = this.activeRoute.queryParams["path"] as string;
        let queryParams = this.activeRoute.queryParams["query"] as string;

        if (!path) {
            this.router.navigate([""]);
        } else {
            let pathParts = decodeURI(path).substr(1).split("/");

            let query = "";
            let extras: NavigationExtras = {
                queryParams: {}
            };

            if (query) {
                query = decodeURI(queryParams).substr(1);
                query.split("&").forEach(p => {
                    var pair = p.split("=");
                    extras.queryParams[pair[0]] = pair[1];
                });
            }

            let routePath = pathParts[0];
            let routeRemain = pathParts.splice(1);
            routeRemain.unshift("/" + routePath);
            this.router.navigate(routeRemain, extras);
        }
    }
}