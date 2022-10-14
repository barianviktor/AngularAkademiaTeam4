import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
<<<<<<< HEAD
import {CdkAccordionModule} from '@angular/cdk/accordion';

=======
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
>>>>>>> bde2c60b2e1e413e6c33920d378a4fbee048ca7f

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
<<<<<<< HEAD

=======
    MatToolbarModule,
    MatSidenavModule,
>>>>>>> bde2c60b2e1e413e6c33920d378a4fbee048ca7f
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
<<<<<<< HEAD
    CdkAccordionModule

=======
    MatToolbarModule,
    MatSidenavModule,
>>>>>>> bde2c60b2e1e413e6c33920d378a4fbee048ca7f
  ],
})
export class MaterialModule {}
