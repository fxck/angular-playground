import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PersonItem } from '../models/people.model';

const DATA = [
  {
    name: 'Mirek',
    surname: 'Čepický',
    link: '',
    mail: 'mirek@im-pr.cz',
    phone: '+420 775 011 288',
    backgroundImage: '../static/people/marek-cepicky.jpg',
    defaultImage: '../static/people/marek-cepicky--preload.jpg',
    description: `Tři roky pracoval jako ředitel komunikace Vodafonu,
    kde měl na starost PR tým, interní komunikaci
    a společenskou odpovědnost. Předtím byl u stejného
    operátora pět let tiskovým mluvčím. v minulosti působil
    dva roky jako redaktor Hospodářských novin a vedl
    ekonomickou redakci Aktuálně.cz. Byl také PR manažerem
    a tiskovým mluvčím portálu Centrum.cz. První rok po
    absolvování ekonomické žurnalistiky na VŠE pracoval
    první rok v Nestlé Česko. Nyní, od jara 2016 spoluvlastní
    agenturu I’m PR.`
  },
  {
    name: 'Aneta',
    surname: 'Petroušková',
    link: '',
    mail: 'aneta@im-pr.cz',
    phone: '+420 602 794 907',
    backgroundImage: '../static/people/aneta-petrouskova.jpg',
    defaultImage: '../static/people/aneta-petrouskova--preload.jpg',
    description: `Má téměř desetileté novinářské zkušenosti. Pracovala
    jako redaktorka časopisů Marie Claire, Maminka
    a Cosmopolitan, kde byla i editorkou. Mezitím
    pracovala téměř rok v PR agentuře AC&C Public
    Relations, se kterou poté spolupracovala i jako
    copywriter. Od jara 2014 je PR konzultantka na volné
    noze. Vystudovala VŠE, obor mezinárodní obchod
    a ekonomická žurnalistika. Od jara 2016 spoluvlastní
    agenturu I’m PR.`
  },
  {
    name: 'Adéla',
    surname: 'Konopková',
    link: '',
    mail: 'adela@im-pr.cz',
    phone: '+420 775 013 867',
    backgroundImage: '../static/people/adela-konopkova.jpg',
    defaultImage: '../static/people/adela-konopkova--preload.jpg',
    description: `Působila téměř sedm let v tiskovém oddělení Vodafonu,
    posledních tři a půl roků jako zástupkyně tiskové mluvčí.
    Vedle běžné PR agendy se věnovala také koordinaci
    obsahu na sociálních sítích. Před příchodem do
    Vodafonu působila několik let v agentuře AC&C Public
    Relations, kde se starala o ICT, byznysovou a lifestylovou
    komunikaci technologicky zaměřených klientů, zejména
    společnosti Nokia. Vystudovala obor Obchodní podnikání
    na Ekonomické fakultě Jihočeské univerzity. Od jara 2016
    spoluvlastní agenturu I’m PR.`
  }
];

@Injectable()
export class PeopleApi {
  data$ = new BehaviorSubject(DATA);

  list(): Observable<PersonItem[]> {
    return this.data$.asObservable();
  }
}
