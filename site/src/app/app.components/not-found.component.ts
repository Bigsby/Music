import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";

@Component({
    template: ""
})
export class NotFoundComponent implements OnInit {
    constructor(private router: Router, private activeRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        let params = this.activeRoute.snapshot.params;
        let path = decodeURI(params.path || "");
        let queryParams = decodeURI(params.query || "");

        if (!path) {
            this.router.navigate([""]);
        } else {
            let pathParts = decodeURI(path).split("/");

            let extras: NavigationExtras = {
                queryParams: {}
            };

            if (queryParams) {
                queryParams.split("&").forEach(p => {
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