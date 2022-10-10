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
        "description": "Scottish fold siberian turkish angora cougar but puma yet birman bombay. Himalayan cornish rex. Singapura cougar tomcat puma, cornish rex. Sphynx savannah and american bobtail so sphynx american shorthair. Kitten scottish fold. Egyptian mau. Munchkin havana brown for british shorthair yet ocicat american shorthair for bengal, or malkin. Malkin maine coon or egyptian mau russian blue jaguar for panther and havana brown. Abyssinian tom. Scottish fold savannah. Jaguar turkish angora so puma for siberian. Himalayan tiger jaguar but manx. Manx siberian grimalkin.",
        "isSeen": false
      },
      {
        "title": "Balinese grimalkin abyssinian",
        "description": "Donskoy. Ocicat bengal so ocicat but tomcat. Donskoy. Tiger cheetah and malkin so bombay, cheetah russian blue so siamese. Thai tiger. Persian. Kitty burmese and havana brown but havana brown bengal. Balinese cougar grimalkin or kitten. Persian havana brown lion.",
        "isSeen": false
      },
      {
        "title": "Bengal grimalkin",
        "description": "Siamese turkish angora but tiger. Balinese puma or british shorthair. Balinese cheetah for ragdoll. Ocelot egyptian mau and cougar for turkish angora bobcat munchkin. Scottish fold cheetah himalayan but ocelot yet singapura, for tiger american bobtail. Ragdoll bengal and ragdoll birman. Egyptian mau maine coon, munchkin cougar.",
        "isSeen": false
      },
      {
        "title": "Lion donskoy",
        "description": "Bobcat ocicat bobcat so abyssinian . Bobcat lynx malkin. Malkin. Russian blue kitty, grimalkin birman yet tomcat. Norwegian forest persian so kitten mouser persian. Balinese . Munchkin cheetah but cheetah yet balinese tom but himalayan for american shorthair. Devonshire rex tabby. Grimalkin mouser tomcat ocelot. Russian blue thai and siamese british shorthair grimalkin.",
        "isSeen": false
      },
      {
        "title": "Tomcat burmese kitty",
        "description": "Siberian tomcat british shorthair so balinese siberian or jaguar. Ragdoll. Scottish fold tabby for mouser. Ocelot. Havana brown siamese ragdoll so tabby yet lion. Abyssinian bobcat and siamese birman so bombay. Thai.",
        "isSeen": false
      },
      {
        "title": "Bombay scottish fold",
        "description": "Kitty himalayan, but donskoy. British shorthair ocelot lynx but american shorthair lion american bobtail. Lion puma. Cougar norwegian forest or mouser puma puma so sphynx. Turkish angora persian or balinese or panther for tomcat or ocelot. Jaguar jaguar. Norwegian forest lion american bobtail. Tomcat siamese mouser. Sphynx tiger and siberian.",
        "isSeen": false
      },
      {
        "title": "Munchkin manx",
        "description": "Ocelot panther so siamese. Cornish rex cheetah for cougar yet abyssinian malkin. Lion sphynx tomcat american shorthair bombay, yet leopard. Ocelot cornish rex or turkish angora. Havana brown russian blue. Bengal tom munchkin, bengal kitten. Siamese mouser tabby grimalkin and tabby yet singapura for ocelot.",
        "isSeen": false
      },
      {
        "title": "Savannah",
        "description": "Thai burmese balinese birman and malkin tiger. Cougar. Donskoy donskoy, but panther. Panther siberian for burmese yet leopard american bobtail for tabby. Bobcat russian blue. Thai tiger, and lion yet ragdoll and malkin. Devonshire rex kitty kitty for manx ragdoll.",
        "isSeen": false
      }
    ]
  }

  getData(): AccordionItem[] {
    return this.items;
  }
}
