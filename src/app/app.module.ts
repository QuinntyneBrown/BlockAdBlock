import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TurnOffAdBlockComponent } from './turn-off-ad-block/turn-off-ad-block.component';
import { SharedModule } from '@shared';
import { Router } from '@angular/router';

const blockAdBlock = (window as any).blockAdBlock;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TurnOffAdBlockComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: AppModule.onLaunch, multi: true, deps: [Router]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  static onLaunch(router: Router) {
    return function() {
      blockAdBlock.onDetected(() => {
        router.navigateByUrl("turn-off-ad-block");
      });
    }
  }
}
