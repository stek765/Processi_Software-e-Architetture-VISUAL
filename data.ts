
import { ConceptDetail } from './types';

export const CONCEPTS: ConceptDetail[] = [
  {
    id: 'waterfall',
    title: 'Modello Waterfall (Cascata)',
    description: 'Un approccio sequenziale in cui ogni fase deve essere completata prima di passare alla successiva. Non si torna indietro.',
    pros: [
      'Facile da gestire e documentare',
      'Punti di controllo chiari alla fine di ogni fase',
      'Funziona bene per progetti con requisiti stabili'
    ],
    cons: [
      'Poca flessibilità ai cambiamenti',
      'Il software è pronto solo alla fine del ciclo',
      'Rischio alto di errori rilevati solo nel test finale'
    ],
    whenToUse: 'Progetti critici con requisiti perfettamente definiti e immutabili.',
    category: 'Processo',
    examples: [
      'Sistemi di controllo volo (avionica)',
      'Progetti governativi e militari su larga scala',
      'Software per dispositivi medici critici'
    ]
  },
  {
    id: 'codeFix',
    title: 'Code and Fix',
    description: 'L\'approccio più semplice e informale: si scrive il codice e si correggono i bug man mano che vengono trovati, senza design.',
    pros: [
      'Nessun tempo perso in pianificazione',
      'Perfetto per piccolissimi script o prototipi usa-e-getta',
      'Risultati immediati'
    ],
    cons: [
      'Pessima qualità del codice a lungo termine',
      'Difficilissimo da manutenere o scalare',
      'Nessuna garanzia di stabilità'
    ],
    whenToUse: 'Progetti personali rapidissimi, demo di un solo giorno o prototipazione estrema.',
    category: 'Processo',
    examples: [
      'Hackathon (progetti di 24-48 ore)',
      'Script di automazione "una tantum"',
      'PoC (Proof of Concept) estremamente rapidi'
    ]
  },
  {
    id: 'incremental',
    title: 'Sviluppo Incrementale',
    description: 'Il sistema viene diviso in vari incrementi. Ogni incremento aggiunge nuove funzionalità a quelle già rilasciate.',
    pros: [
      'Consegne anticipate di parti funzionanti',
      'Gestione del rischio migliorata',
      'Flessibilità rispetto al Waterfall'
    ],
    cons: [
      'Richiede una buona definizione dell\'architettura iniziale',
      'Costo totale superiore al Waterfall',
      'Possibili problemi di integrazione tra incrementi'
    ],
    whenToUse: 'Sistemi in cui le funzionalità principali devono essere operative subito.',
    category: 'Processo',
    examples: [
      'Sistemi Operativi (Windows, macOS, Linux)',
      'Suite per ufficio (Microsoft Office, Google Workspace)',
      'Sistemi E-commerce (Amazon, eBay)'
    ]
  },
  {
    id: 'integrated',
    title: 'Integration & Configuration',
    description: 'Assemblaggio di componenti COTS (Commercial Off-The-Shelf) esistenti per creare un sistema completo.',
    pros: [
      'Velocità di implementazione massima',
      'Costi ridotti rispetto allo sviluppo custom',
      'Componenti già testati dal mercato'
    ],
    cons: [
      'Limitata personalizzazione',
      'Dipendenza dal fornitore',
      'Sfide di compatibilità tra pezzi diversi'
    ],
    whenToUse: 'Quando esistono software commerciali che coprono quasi tutto il business.',
    category: 'Processo',
    examples: [
      'Sistemi ERP aziendali (SAP, Oracle)',
      'Siti Web basati su WordPress con plugin commerciali',
      'Integrazione di sistemi CRM (Salesforce)'
    ]
  },
  {
    id: 'agile',
    title: 'Sviluppo Agile',
    description: 'Metodologia iterativa basata su Sprint, feedback costante e collaborazione continua col cliente.',
    pros: [
      'Adattabilità estrema ai cambiamenti',
      'Feedback utente incorporato nel processo',
      'Qualità elevata grazie ai test continui'
    ],
    cons: [
      'Difficile stimare tempi e costi finali',
      'Richiede un team esperto e cliente presente',
      'Rischio di perdita del design globale'
    ],
    whenToUse: 'Sistemi complessi in mercati che cambiano ogni settimana.',
    category: 'Processo',
    examples: [
      'Spotify (famoso per il modello Squads/Tribes)',
      'Netflix (rilasci continui e sperimentazione)',
      'Startup Tech ad alto tasso di innovazione'
    ]
  },
  {
    id: 'mvc',
    title: 'Model-View-Controller (MVC)',
    description: 'Separa i dati (Model), l\'interfaccia utente (View) e la logica di controllo (Controller).',
    pros: [
      'Sviluppo parallelo di UI e logica',
      'Riutilizzo del Model su più View',
      'Codice pulito e manutenibile'
    ],
    cons: [
      'Complessità strutturale per app semplici',
      'Comunicazione tra i pezzi può diventare rigida',
      'Curva di apprendimento per i junior'
    ],
    whenToUse: 'Applicazioni web moderne che necessitano di separazione netta tra dati e presentazione.',
    category: 'Architettura',
    examples: [
      'Framework Web (Django, Ruby on Rails, ASP.NET MVC)',
      'Applicazioni iOS (UIKit segue pesantemente MVC)',
      'Single Page Applications (Angular, React con architetture simili)'
    ]
  },
  {
    id: 'layered',
    title: 'Architettura a Strati',
    description: 'Organizzazione gerarchica in cui ogni strato comunica solo con quelli adiacenti.',
    pros: [
      'Sostituibilità dei singoli strati',
      'Separazione degli interessi',
      'Facilità di test unitario'
    ],
    cons: [
      'Overhead di prestazioni nel passaggio dati',
      'Rigidità se bisogna attraversare molti strati',
      'Difficile scalare orizzontalmente certi strati'
    ],
    whenToUse: 'Software enterprise standard, sistemi gestionali.',
    category: 'Architettura',
    examples: [
      'Applicazioni Java Spring Boot Enterprise',
      'Sistemi di fatturazione e contabilità bancaria',
      'Architetture N-Tier tradizionali'
    ]
  },
  {
    id: 'clientServer',
    title: 'Client-Server',
    description: 'Un server centrale fornisce risorse a molti client remoti via rete.',
    pros: [
      'Sicurezza e dati centralizzati',
      'Facile gestione dei backup',
      'Aggiornamenti centralizzati'
    ],
    cons: [
      'Il server è un Single Point of Failure',
      'Scalabilità costosa se il carico esplode',
      'Dipendenza totale dalla rete'
    ],
    whenToUse: 'Siti web, app di banking, sistemi email.',
    category: 'Architettura',
    examples: [
      'Protocollo HTTP (Browser -> Web Server)',
      'Database relazionali (SQL Server, MySQL)',
      'Servizi di posta elettronica (IMAP/SMTP)'
    ]
  },
  {
    id: 'peerToPeer',
    title: 'Peer-to-Peer (P2P)',
    description: 'Rete decentralizzata dove ogni nodo è sia client che server.',
    pros: [
      'Alta resilienza (no server centrale)',
      'Scalabilità automatica col numero di nodi',
      'Costi di infrastruttura minimi'
    ],
    cons: [
      'Difficile da gestire e rendere sicuro',
      'Dati possono essere inconsistenti',
      'Prestazioni dipendenti dai singoli nodi'
    ],
    whenToUse: 'File sharing, blockchain, reti di sensori.',
    category: 'Architettura',
    examples: [
      'BitTorrent (distribuzione file)',
      'Blockchain (Bitcoin, Ethereum)',
      'Vecchie versioni di Skype e servizi VoIP diretti'
    ]
  },
  {
    id: 'pipeFilter',
    title: 'Pipe and Filter',
    description: 'I dati scorrono attraverso filtri trasformatori collegati da condotti.',
    pros: [
      'Riutilizzo dei filtri in vari contesti',
      'Parallelismo naturale',
      'Facile aggiungere nuovi filtri'
    ],
    cons: [
      'Poca interattività in tempo reale',
      'Overhead di trasformazione dati',
      'Difficile gestire flussi complessi con cicli'
    ],
    whenToUse: 'Elaborazione segnali, compilatori, pipeline ETL.',
    category: 'Architettura',
    examples: [
      'Shell Unix (es: ls | grep | awk)',
      'Compilatori (GCC, LLVM: parsing -> ottimizzazione -> gen)',
      'Processamento video/audio (FFmpeg)'
    ]
  }
];
