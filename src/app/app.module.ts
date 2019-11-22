import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import * as localforage from 'localforage';
import { applyMiddleware, createStore, Store as ReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxFreeze from 'redux-freeze';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { AppState, rootReducer } from 'src/store/reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgReduxModule,
    TranslateModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  readonly persistConfig = {
    key: 'root',
    storage: localforage,
    whitelist: []
  };

  constructor(ngRedux: NgRedux<AppState>) {
    const persistedReducer = persistReducer(this.persistConfig, rootReducer);
    const store: ReduxStore<AppState> = createStore(
      persistedReducer,
      composeWithDevTools(applyMiddleware(thunk, createLogger(), reduxFreeze))
    );

    const persistor = persistStore(store);

    ngRedux.provideStore(store);
  }
}
