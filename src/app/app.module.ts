import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SlateModule } from 'slate-angular';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoMarkTextComponent } from './component/text/text.component';
import { EditorComponent } from './component/editor/editor.component';
import { CaretComponent } from './component/caret/caret.component';
import { DemoButtonComponent } from './component/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoMarkTextComponent,
    EditorComponent,
    CaretComponent,
    DemoButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlateModule
  ],
  entryComponents: [
    DemoMarkTextComponent,
    CaretComponent,
    DemoButtonComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
