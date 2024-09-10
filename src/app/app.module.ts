import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { ListCvComponent } from './cv/list-cv/list-cv.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemCvComponent } from './cv/item-cv/item-cv.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    //Cv
    CvCardComponent,
    ListCvComponent,
    CvComponent,
    ItemCvComponent,
    //
    NgstyleComponent,
    MiniWordComponent,
    LampeComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
