import { Routes } from '@angular/router';

import { TableListComponent } from '../../table-list/table-list.component';
import { CreatePromotionComponent } from '../../create-promotion/create-promotion.component';
import {PromotionStatiqueComponent} from "../../Promotion-statique/promotion-statique.component";
export const AdminLayoutRoutes: Routes = [

    { path: 'table-list',     component: TableListComponent },
    { path: 'create-promotion',     component: CreatePromotionComponent },
    { path: 'promotion-statique',     component: PromotionStatiqueComponent }
];
