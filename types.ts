
export type ArchitectureConcept = 
  | 'waterfall'
  | 'codeFix'
  | 'incremental'
  | 'integrated' 
  | 'agile' 
  | 'mvc'
  | 'layered' 
  | 'repository'
  | 'clientServer' 
  | 'peerToPeer' 
  | 'pipeFilter';

export interface ConceptDetail {
  id: ArchitectureConcept;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  whenToUse: string;
  category: 'Processo' | 'Architettura';
  examples: string[];
}
