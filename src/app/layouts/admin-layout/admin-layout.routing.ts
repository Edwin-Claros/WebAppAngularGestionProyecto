import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AgregarEquipoComponent } from 'app/agregar-equipo/agregar-equipo.component';
import { EventoComponent } from 'app/evento/evento.component';
import { ParticipanteComponent } from 'app/participante/participante.component';
import { ListaEquipoComponent } from 'app/lista-equipo/lista-equipo.component';
import { ListaEventoComponent } from 'app/lista-evento/lista-evento.component';

export const AdminLayoutRoutes: Routes = [
  
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
   { path: 'agregar-equipo',  component: AgregarEquipoComponent },
   { path: 'evento',  component:  EventoComponent },
   { path: 'participante',  component:  ParticipanteComponent },
   { path: 'lista-equipo/:id',  component:  ListaEquipoComponent },
   { path: 'lista-evento',  component:  ListaEventoComponent },
   
];
