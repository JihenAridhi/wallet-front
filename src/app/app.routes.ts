import { Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WalletMngComponent } from './components/wallet-mng/wallet-mng.component';
import { AccountingComponent } from './components/accounting/accounting.component';

export const routes: Routes = [
    {
        path: "admin", component: SidebarComponent, children:
        [
            {path: "wallets", component: WalletMngComponent},
            {path:"accounting", component: AccountingComponent}
        ]
    }
];
