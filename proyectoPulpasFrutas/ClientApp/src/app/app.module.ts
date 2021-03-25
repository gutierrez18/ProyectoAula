import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClienteConsultaComponent } from './cliente/cliente-consulta/cliente-consulta.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductoConsultaComponent } from './pulpa/producto-consulta/producto-consulta.component';
import { ProductoRegistroComponent } from './pulpa/producto-registro/producto-registro.component';
import { ClienteRegistroComponent } from './cliente/cliente-registro/cliente-registro.component';
import { PersonaService } from './services/persona.service';
import { PulpaService } from './services/pulpa.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteConsultaComponent,
    ProductoConsultaComponent,
    ProductoRegistroComponent,
    ClienteRegistroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule
  ],
  providers: [PersonaService,PulpaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
