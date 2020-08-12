import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs';

import { PATH } from '../../app.constants';
import Message from '../constant/message.constant';

import { Paginator } from '../model/paginator.model';

import { NotificationService } from '../../core/service/notification.service';

interface ListAllInterface<T> {
    getAll(page: any, search?: any, sort?: any): Observable<Paginator<T>>;
}

/**
 * Interface Genérica para lista
 */
export abstract class ListAbstract<T> implements OnInit {

    abstract displayedColumns: Array<string>;

    @ViewChild(MatSort)
    sort: MatSort;

    @ViewChild('input')
    input: ElementRef;

    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    pageSize = 15;

    pageIndex = 0;

    resultsLength = 0;

    filter: any = [];

    order: any = {};

    displayFilter: any = {};

    isfiltring = false;

    isLoadingResults = false;

    dataSource = new MatTableDataSource<T>();

    selection = new SelectionModel<T>(true, []);

    protected constructor(
        protected router: Router,
        protected endPoint: string,
        protected notificationService: NotificationService
    ) {}

    ngOnInit() {
        this.paginator.page.subscribe(this.updateDataSource.bind(this));
        this.updateDataSource();
    }

    selectAll(): void {
        this.dataSource.data.forEach((T) => {
            this.selection.select(T);
        });
    }

    deselectAll(): void {
        this.selection.clear();
    }

    onAdd(): void {
        this.router.navigate([`${this.endPoint}/${PATH.ACAO.ADD}`]);
    }

    onEdit(data: T): void {
        this.router.navigate([
            `${this.endPoint}/${PATH.ACAO.EDIT
                .replace(':id', `${data['id']}`)}`,
        ]);
    }

    onDetail(data: T): void {
        this.router.navigate([
            `${this.endPoint}/${PATH.ACAO.DETAIL
                .replace(':id', `${data['id']}`)}`,
        ]);
    }

    applyFilter(): void {
        this.updateDataSource();
    }

    onToggleFilter() {
        this.displayFilter = !this.displayFilter;
    }

    updateDataSource(data?: any) {
        for (const key in this.filter) {
            if (this.filter[key]) {
                this.isfiltring = true;
            }
        }

        const filter = this.filter;
        const order = this.order;
        const page = data ? data.pageIndex + 1 : 1;
        this.isLoadingResults = true;
        this.selection.clear();
        // this.dataService.getAll(page.toString(), filter, order)
        //     .subscribe((result: Paginator<T>) => {
        //         this.isLoadingResults = false;
        //         this.dataSource.data = result.data;
        //         this.pageSize = result.per_page;
        //         this.resultsLength = result.total;
        //         if (this.isfiltring && !this.resultsLength) {
        //             this.notificationService.notify(Message.MSG002);
        //         }
        //     }, error => {
        //         this.isLoadingResults = false;
        //         throw error;
        //     });
    }

    sortData(sort: Sort): void {
        this.paginator.pageIndex = 0;
        this.order.field = sort.active;
        this.order.direction = sort.direction;

        const filter = this.filter;
        const order = this.order;
        this.isLoadingResults = true;
        this.selection.clear();
        // this.dataService.getAll('0', filter, order).subscribe((result: Paginator<T>) => {
        //     this.dataSource.data = result.data;
        //     this.pageSize = result.per_page;
        //     this.resultsLength = result.total;
        //     this.isLoadingResults = false;
        // }, error => {
        //     this.isLoadingResults = false;
        //     throw error;
        // });
    }

}
