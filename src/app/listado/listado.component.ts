import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoComponent {
  @Input() fotos?: any[];
  @Output() imageClicked = new EventEmitter<any>();

  onImageClick(foto: any) {
    this.imageClicked.emit(foto);
  }

}
