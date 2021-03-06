import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConnectorService } from './connector.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NamepageComponent } from './namepage/namepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NamepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
