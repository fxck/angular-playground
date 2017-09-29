import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ServiceItem } from '../models/services.model';

const DATA = [
  {
    name: 'Public relations',
    description: `Zajistíme vám promyšlenou
    a správně cílenou komunikaci
    s médii, aby se vaše informace
    a tiskové zprávy uplatnily co
    nejlépe.`,
    icon: 'icon-twitter'
  },
  {
    name: 'Sociální media',
    description: `Vytvoříme pro vás obsahovou
    strategii a pomůžeme vám
    s komunikací na sociálních
    sítích a oslovením relevantního
    publika.`,
    icon: 'icon-twitter'
  },
  {
    name: 'Copywritting',
    description: `Rádi pro vás využijeme své
    zkušenosti získané během
    novinářské praxe a pomůžeme
    vám napsat texty, které
    zaujmou.`,
    icon: 'icon-twitter'
  },
  {
    name: 'Interní komunikace',
    description: `Připravíme pro vás strategii
    interní komunikace a pomůžeme
    vám oslovit zaměstnance
    přesně tak, jak potřebujete.`,
    icon: 'icon-twitter'
  },
  {
    name: 'PR Kurzy',
    description: `Pomůžeme vám lépe
    pochopit fungování PR.
    Praktickou formou připravíme
    vás nebo vaše zaměstnance
    na komunikaci s médii.`,
    icon: 'icon-twitter'
  },
  {
    name: 'PR Audit',
    description: `Zhodnotíme vaši současnou
    komunikaci s médii a veřejností
    a poradíme vám, jak ji upravit,
    aby byla co nejefektivnější.`,
    icon: 'icon-twitter'
  }
];

@Injectable()
export class ServicesApi {
  data$ = new BehaviorSubject(DATA);

  list(): Observable<ServiceItem[]> {
    return this.data$.asObservable();
  }
}
