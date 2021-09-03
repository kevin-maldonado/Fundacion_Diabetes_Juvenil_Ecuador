import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { EducacionComponent } from './educacion/educacion.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PrincipiosTrabajoComponent } from './principios-trabajo/principios-trabajo.component';
import { CampoAmigoComponent } from './campo-amigo/campo-amigo.component';
import { EscuelaComponent } from './escuela/escuela.component';
import {ValidatetextPipe} from '../Services/validatetext.pipe';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { TiposdiabetesComponent } from './tiposdiabetes/tiposdiabetes.component';
import { HipoehiperComponent } from './hipoehiper/hipoehiper.component';
import { InsulinaComponent } from './insulina/insulina.component';
import { NutricionComponent } from './nutricion/nutricion.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { JuegosComponent } from './juegos/juegos.component';
import { ProgramasSocialesComponent } from './programas-sociales/programas-sociales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamecardComponent } from './juegos/game-card/gamecard.component';
import { LanguageSelectorComponent } from './juegos/game-card/language-selector/language-selector.component';
import { HeaderComponent } from './juegos/game-card/header/header.component';
import { LevelSelectorComponent } from './juegos/game-card/level-selector/level-selector.component';
import { GameButtonsComponent } from './juegos/game-card/game-buttons/game-buttons.component';
import { GameCronoComponent } from './juegos/game-card/game-crono/game-crono.component';
import { GameInfoComponent } from './juegos/game-card/game-info/game-info.component';
import { GameGridComponent } from './juegos/game-card/game-grid/game-grid.component';
import { TileItemComponent } from './juegos/game-card/tile-item/tile-item.component';
import { GameMovementsComponent } from './juegos/game-card/components/game-movements/game-movements.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HipoComponent } from './hipo/hipo.component';
import { ModalDialogModule } from './juegos/game-card/modal-dialog/modal-dialog.module';
import { PuzzleComponent } from './juegos/puzzle/puzzle.component';
import {MisionComponent} from "./mision/mision.component";
import {RecursosComponent} from "./recursos/recursos.component";
import { InsumosComponent } from './insumos/insumos.component';
import { Puzzle1Component } from './juegos/puzzle1/puzzle1.component';
import { LevelSelector1Component } from './juegos/Memory_frutas/level-selector1/level-selector1.component';
import { GameInfo1Component } from './juegos/Memory_frutas/game-info1/game-info1.component';
import { GameGrid1Component } from './juegos/Memory_frutas/game-grid1/game-grid1.component';
import { TileItem1Component } from './juegos/Memory_frutas/tile-item1/tile-item1.component';
import { LanguageSelector1Component } from './juegos/Memory_frutas/language-selector1/language-selector1.component';
import { Header1Component } from './juegos/Memory_frutas/header1/header1.component';
import { MemoryfrutasComponent } from './juegos/Memory_frutas/memory_frutas.component';
import { GameMovements1Component } from './juegos/Memory_frutas/components1/game-movements1/game-movements1.component';
import { GameButtons1Component } from './juegos/Memory_frutas/game-buttons1/game-buttons1.component';
import { GameCrono1Component } from './juegos/Memory_frutas/game-crono1/game-crono1.component';
import { MemoryLacteosComponent } from './juegos/Memory_lacteos/memory_lacteos.component';
import { Header2Component } from './juegos/Memory_lacteos/header2/header2.component';
import { LanguageSelector2Component } from './juegos/Memory_lacteos/language-selector2/language-selector2.component';
import { TileItem2Component } from './juegos/Memory_lacteos/tile-item2/tile-item2.component';
import { GameGrid2Component } from './juegos/Memory_lacteos/game-grid2/game-grid2.component';
import { GameInfo2Component } from './juegos/Memory_lacteos/game-info2/game-info2.component';
import { GameCrono2Component } from './juegos/Memory_lacteos/game-crono2/game-crono2.component';
import { GameButtons2Component } from './juegos/Memory_lacteos/game-buttons2/game-buttons2.component';
import { LevelSelector2Component } from './juegos/Memory_lacteos/level-selector2/level-selector2.component';
import { GameMovements2Component } from './juegos/Memory_lacteos/components2/game-movements2/game-movements2.component';
import { GameMovements3Component } from './juegos/Memory_cereales/components3/game-movements3/game-movements3.component';
import { MemoryCerealesComponent } from './juegos/Memory_cereales/memory_cereales.component';
import { Header3Component } from './juegos/Memory_cereales/header3/header3.component';
import { LanguageSelector3Component } from './juegos/Memory_cereales/language-selector3/language-selector3.component';
import { TileItem3Component } from './juegos/Memory_cereales/tile-item3/tile-item3.component';
import { GameGrid3Component } from './juegos/Memory_cereales/game-grid3/game-grid3.component';
import { GameInfo3Component } from './juegos/Memory_cereales/game-info3/game-info3.component';
import { GameCrono3Component } from './juegos/Memory_cereales/game-crono3/game-crono3.component';
import { GameButtons3Component } from './juegos/Memory_cereales/game-buttons3/game-buttons3.component';
import { LevelSelector3Component } from './juegos/Memory_cereales/level-selector3/level-selector3.component';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        TranslateModule.forRoot({
            useDefaultLang: true,
            defaultLanguage: 'es',
            loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
            }
          }),
        BrowserAnimationsModule,
        ModalDialogModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        NosotrosComponent,
        ServiciosComponent,
        ContactanosComponent,
        EducacionComponent,
        GaleriaComponent,
        PrincipiosTrabajoComponent,
        CampoAmigoComponent,
        ValidatetextPipe,
        EscuelaComponent,
        DiabetesComponent,
        TiposdiabetesComponent,
        HipoehiperComponent,
        InsulinaComponent,
        NutricionComponent,
        EjerciciosComponent,
        PsicologiaComponent,
        JuegosComponent,
        ProgramasSocialesComponent,
        GamecardComponent,
        HipoComponent,
        LanguageSelectorComponent,
        HeaderComponent,
        LevelSelectorComponent,
        GameButtonsComponent,
        GameCronoComponent,
        GameInfoComponent,
        GameGridComponent,
        TileItemComponent,
        GameMovementsComponent,
        LevelSelector1Component,
        GameButtons1Component,
        GameCrono1Component,
        GameInfo1Component,
        GameGrid1Component,
        TileItem1Component,
        LanguageSelector1Component,
        Header1Component,
        MemoryfrutasComponent,
        LevelSelector2Component,
        GameButtons2Component,
        GameCrono2Component,
        GameInfo2Component,
        GameGrid2Component,
        TileItem2Component,
        LanguageSelector2Component,
        Header2Component,
        MemoryLacteosComponent,
        LevelSelector3Component,
        GameButtons3Component,
        GameCrono3Component,
        GameInfo3Component,
        GameGrid3Component,
        TileItem3Component,
        LanguageSelector3Component,
        Header3Component,
        MemoryCerealesComponent,
        GameMovements1Component,
        GameMovements2Component,
        GameMovements3Component,
        PuzzleComponent,
        Puzzle1Component,
        MisionComponent,
        RecursosComponent,
        InsumosComponent
    ],
    exports: [
        ValidatetextPipe
    ],
})
export class ExamplesModule { }
