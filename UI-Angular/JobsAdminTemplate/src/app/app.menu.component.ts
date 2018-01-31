import {Component, Input, OnInit, trigger, state, transition, style, animate} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="menu">
            <ul app-submenu [item]="model" root="true"></ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: MenuItem[];

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'fa-home', routerLink: ['/']},
            {
                label: 'Applicants', icon: 'fa-home', badge: '1',
                items: [
                    {label: 'List applicants', icon: 'fa-table', routerLink: ['/listapplicants']},

                ]
            },
            {
              label: 'Jobs', icon: 'fa-home', badge: '2',
              items: [
                  {label: 'List Jobs', icon: 'fa-table', routerLink: ['/listjobs']},
                  {label: 'Add Job', icon: 'fa-table', routerLink: ['/addjob']},
                  {label: 'Login', icon: 'fa-table', routerLink: ['/login']}

              ]
          },
            {
                label: 'Template Pages', icon: 'fa-life-saver', badge: '8', badgeStyleClass: 'green-badge',
                items: [
                    {label: 'Empty Page', icon: 'fa-square-o', routerLink: ['/empty']},
                    {label: 'Login Page', icon: 'fa-sign-in', url: 'assets/pages/login.html', target: '_blank'},
                    {label: 'Error Page', icon: 'fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank'},
                    {label: '404 Page', icon: 'fa-times', url: 'assets/pages/404.html', target: '_blank'},
                    {label: 'Access Denied Page', icon: 'fa-exclamation-triangle', url: 'assets/pages/access.html', target: '_blank'}
                ]
            }
        ];
    }
}

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-submenu]',
    /* tslint:enable:component-selector */
    template: `
        <ul>
            <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
                <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass">
                    <a *ngIf="!child.routerLink" [href]="child.url||'#'" (click)="itemClick($event,child,i)"
                       [attr.tabindex]="!visible ? '-1' : null"  [attr.target]="child.target">
                        <i class="fa fa-fw" [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                        <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                    </a>
                    <a *ngIf="child.routerLink" (click)="itemClick($event,child,i)" [attr.target]="child.target"
                        [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                       [routerLinkActiveOptions]="{exact: true}">
                        <i class="fa fa-fw" [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                        <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                    </a>
                    <ul app-submenu [item]="child" *ngIf="child.items" [@children]="isActive(i) ? 'visible' : 'hidden'" ></ul>
                </li>
            </ng-template>
        </ul>
    `,
    animations: [
        trigger('children', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    activeIndex: number;

    constructor(public app: AppComponent) {}

    itemClick(event: Event, item: MenuItem, index: number) {
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        this.activeIndex = (this.activeIndex === index) ? null : index;

        // execute command
        if (item.command) {
            item.command({originalEvent: event, item: item});
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }

        if (!item.items) {
            this.app.menuActiveMobile = false;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }
}
