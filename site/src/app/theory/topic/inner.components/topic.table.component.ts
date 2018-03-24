import { Component } from "@angular/core";

import { TopicBaseComponent } from "./topic.base.component";

@Component({
    selector: "topic-table",
    templateUrl: "./topic.table.component.html",
    styleUrls: [
        "./topic.table.component.scss"
    ]
})
export class TopicTableComponent extends TopicBaseComponent {
    get definition(): TableDefinition{
        return this.content as TableDefinition;
    }
}

class TableDefinition{
    headers: CellDefinition[];
    rows: RowDefinition[];
}

class RowDefinition{
    cells: CellDefinition[];
}

class CellDefinition {
    content: string;
    class: string;
    colSpan: number;
    rowSpan: number;
}