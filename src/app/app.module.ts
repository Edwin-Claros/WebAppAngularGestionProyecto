import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {EquipoService} from './equipo.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AgregarEquipoComponent } from './agregar-equipo/agregar-equipo.component';
import {HttpClientModule} from '@angular/common/http';
import { EventoComponent } from './evento/evento.component';
import { ParticipanteComponent } from './participante/participante.component';
import { ListaEquipoComponent } from './lista-equipo/lista-equipo.component';
import { ListaEventoComponent } from './lista-evento/lista-evento.component';
import { CalificarEquipoComponent } from './calificar-equipo/calificar-equipo.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
   // AgmCoreModule.forRoot({
    //  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    //})
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CalificarEquipoComponent,
   
    
   
   // AgregarEquipoComponent,

  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
