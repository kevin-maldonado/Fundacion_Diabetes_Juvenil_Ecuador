import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

import {ComponentsModule} from './components/components.module';
import {ExamplesModule} from './examples/examples.module';
import {ValidatetextPipe} from './Services/validatetext.pipe';
import {AdminComponent} from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SidebarComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        HttpClientModule,
        ExamplesModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(),
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
