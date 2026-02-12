import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [

    {
        path: "",
        component: Home  // Set Home component as the default route
    },
    {
        path: "home",
        component: Home  // Set Home component for /home route
    }

];
