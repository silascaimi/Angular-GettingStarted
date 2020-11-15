import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StarComponent, ConvertToSpacesPipe],
  imports: [CommonModule],
  exports: [StarComponent, CommonModule, FormsModule, ConvertToSpacesPipe],
})
export class SharedModule {}
