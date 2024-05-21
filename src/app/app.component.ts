import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListadoComponent,CommonModule]
})
export class AppComponent {
  title = 'Lab10-grupal';
  fotos = [
    {
      titulo: 'Ceviche',
      descripcion: 'Es el plato más emblemático del Perú, nadie se puede resistir al fresco sabor de un buen plato de ceviche.',
      url: 'https://www.shutterstock.com/image-photo/peruvian-mixed-ceviche-traditional-dish-600nw-1821519449.jpg'
    },
    {
      titulo: 'Lomo Saltado',
      descripcion: 'El Lomo Saltado es un plato cuyo origen se remonta a la llegada de los chinos-cantoneses a Perú a partir del siglo XIX.',
      url: 'https://st.depositphotos.com/1010142/3576/i/450/depositphotos_35769119-stock-photo-peruvian-dish-called-lomo-saltado.jpg'
    },

    {
      titulo: 'Ají de Gallina',
      descripcion: 'Un plato que consiste en una crema con pechuga de gallina deshilachada y acompañada por papa cocida o arroz blanco',
      url: 'https://i.pinimg.com/736x/b5/aa/de/b5aade40185233002b14d933ca2664d2.jpg'
    },
    {
      titulo: 'Causa Limeña',
      descripcion: 'Este plato es hecho a base de papa amarilla y su presentación por capas llama la atención. ',
      url: 'https://www.shutterstock.com/image-photo/causa-traditional-peruvian-layered-potato-600nw-2111982860.jpg'
    },
    {
      titulo: 'Pachamanca',
      descripcion: 'Es un plato  donde los alimentos son cocinados mediante el contacto con piedras calientes dentro de un hoyo cavado bajo tierra.',
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/47/22/66/pachamanca-mas-estandar.jpg?w=600&h=400&s=1'
    },
    {
      titulo: 'Arroz con Pollo',
      descripcion: 'Este es uno de los platos favoritos en las mesas peruanas. Es delicioso y tiene muchas variaciones.',
      url: 'https://storage.googleapis.com/eltiempo/1/2018/11/arroz-con-pollo-600x400.jpg'
    },
    {
      titulo: 'Tallarines a la Huancaína',
      descripcion: 'Derivado de la papa a la huancaína, consiste en pasta bañada de salsa a la huancaína, la cual es preparada con queso fresco y ají amarillo.',
      url: 'https://lacocinadevero.com/wp-content/uploads/2020/04/tallarines-a-la-huancaina-1-scaled-e1586141882653.jpg'
    },
    {
      titulo: 'Aguadito',
      descripcion: 'Consiste en una sopa de pollo espesa con arroz y otros vegetales.',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJGkccnMlVhgOnS7ou-k2ZpTFbX3Idjk1uaimp_41hw&s'
    },
    {
      titulo: 'Tacu Tacu',
      descripcion: 'Plato criollo que consiste en arroz cocido, menestras y sofrito a base de ají amarillo.',
      url: 'https://laspayancasdetato.com/wp-content/uploads/2021/08/tacu1.jpg'
    }
  ];
  
  selectedImage: any = null;

  handleImageClick(foto: any) {
    this.selectedImage = foto;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
