import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {ComponentsComponent} from './components/components.component';
import {ProfileComponent} from './examples/profile/profile.component';
import {SignupComponent} from './examples/signup/signup.component';
import {LandingComponent} from './examples/landing/landing.component';
import {NucleoiconsComponent} from './components/nucleoicons/nucleoicons.component';
import {NotFoundComponent} from './examples/not-found/not-found.component';
import {NosotrosComponent} from './examples/nosotros/nosotros.component';
import {ServiciosComponent} from './examples/servicios/servicios.component';
import {ContactanosComponent} from './examples/contactanos/contactanos.component';
import {EducacionComponent} from './examples/educacion/educacion.component';
import {GaleriaComponent} from './examples/galeria/galeria.component';
import {DiabetesComponent} from './examples/diabetes/diabetes.component';
import {TiposdiabetesComponent} from './examples/tiposdiabetes/tiposdiabetes.component';
import {HipoehiperComponent} from './examples/hipoehiper/hipoehiper.component';
import {PrincipiosTrabajoComponent} from './examples/principios-trabajo/principios-trabajo.component';
import {CampoAmigoComponent} from './examples/campo-amigo/campo-amigo.component';
import {EscuelaComponent} from './examples/escuela/escuela.component';
import {InsulinaComponent} from './examples/insulina/insulina.component';
import {NutricionComponent} from './examples/nutricion/nutricion.component';
import {EjerciciosComponent} from './examples/ejercicios/ejercicios.component';
import {PsicologiaComponent} from './examples/psicologia/psicologia.component';
import {JuegosComponent} from './examples/juegos/juegos.component';
import {AdminComponent} from './admin/admin.component';
import {ProgramasSocialesComponent} from './examples/programas-sociales/programas-sociales.component';
import {HipoComponent} from './examples/hipo/hipo.component';
import {MisionComponent} from "./examples/mision/mision.component";
import {RecursosComponent} from "./examples/recursos/recursos.component";
import {InsumosComponent} from "./examples/insumos/insumos.component";

// @ts-ignore
// @ts-ignore
const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ComponentsComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'login', component: SignupComponent},
    {path: 'user-profile', component: ProfileComponent},
    {path: 'landing', component: LandingComponent},
    {path: 'nucleoicons', component: NucleoiconsComponent},
    {path: 'historia', component: NosotrosComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'contactanos', component: ContactanosComponent},
    {path: 'educacion', component: EducacionComponent},
    {path: 'guia-pacientes-familiares', component: DiabetesComponent},
    {path: 'tipos-diabetes', component: TiposdiabetesComponent},
    {path: 'hiperglucemia', component: HipoehiperComponent},
    {path: 'hipoglucemia', component: HipoComponent},
    {path: 'insulina', component: InsulinaComponent},
    {path: 'nutricion', component: NutricionComponent},
    {path: 'ejercicios', component: EjerciciosComponent},
    {path: 'psicologia', component: PsicologiaComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: 'principios-trabajo', component: PrincipiosTrabajoComponent},
    {path: 'campo-amigo', component: CampoAmigoComponent},
    {path: 'escuela', component: EscuelaComponent},
    {path: 'transparencia-institucional', component: ProgramasSocialesComponent},
    {path: 'mision', component: MisionComponent},
    {path: 'recursos', component: RecursosComponent},
    {path: 'insumos', component: InsumosComponent},
    {path: 'entretenimiento', component: JuegosComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
