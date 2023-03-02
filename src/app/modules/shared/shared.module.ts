import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/components/footer/footer.component';
import { HumbergerComponent } from './components/header/components/humberger/humberger.component';


@NgModule({
  declarations: [HumbergerComponent,CardComponent,HeaderComponent,FooterComponent],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  exports:[
    HttpClientModule,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    HumbergerComponent
  ]
})
export class SharedModule { }
