import { Injectable } from '@angular/core';
import { AccordionItem } from '../interfaces/accordion-item';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  items: AccordionItem[];

  constructor() {
    this.items = [
      {
        "title": "Tomcat american bobtail",
        "description": "Scottish fold siberian turkish angora cougar but puma yet birman bombay. Himalayan cornish rex. Singapura cougar tomcat puma, cornish rex. Sphynx savannah and american bobtail so sphynx american shorthair. Kitten scottish fold. Egyptian mau. Munchkin havana brown for british shorthair yet.",
        "isSeen": false
      },
      {
        "title": "Savannah",
        "description": "Thai burmese balinese birman and malkin tiger. Cougar. Donskoy donskoy, but panther. Panther siberian for burmese yet leopard american bobtail for tabby. Bobcat russian blue. Thai tiger, and lion yet ragdoll and malkin. Devonshire rex kitty kitty for manx ragdoll.",
        "isSeen": false
      },
      {
        "title": "Bengal grimalkin",
        "description": "Siamese turkish angora but tiger. Balinese puma or british shorthair. Balinese cheetah for ragdoll. Ocelot egyptian mau and cougar for turkish angora bobcat munchkin. Scottish fold cheetah himalayan but ocelot yet singapura, for tiger american bobtail. Ragdoll bengal and ragdoll birman. Egyptian mau maine coon, munchkin cougar.",
        "isSeen": false
      },
      {
        "title": "Lion donskoy",
        "description": "Bobcat ocicat bobcat so abyssinian . Bobcat lynx malkin. Malkin. Russian blue kitty, grimalkin birman yet tomcat. Norwegian forest persian so kitten mouser persian. Balinese . Munchkin cheetah but cheetah yet balinese tom but himalayan for american shorthair. Devonshire rex tabby.",
        "isSeen": false
      },
      {
        "title": "Munchkin manx",
        "description": "Ocelot panther so siamese. Cornish rex cheetah for cougar yet abyssinian malkin. Lion sphynx tomcat american shorthair bombay, yet leopard. Ocelot cornish rex or turkish angora. Havana brown russian blue. Bengal tom munchkin, bengal kitten. Siamese mouser tabby grimalkin and tabby yet singapura for ocelot.",
        "isSeen": false
      }
    ]
  }

  getData(): AccordionItem[] {
    return this.items;
  }
}
