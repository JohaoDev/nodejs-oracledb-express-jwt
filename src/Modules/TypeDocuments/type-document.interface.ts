export interface BaseTypeDocuments {
  docu_nom: string;
  docu_abr: string;
  docu_ind_1: string;
  docu_ind_2: string;
  docu_ind_3: string;
  docu_ind_4: string;
  docu_ind_5: string;
}

export interface TypeDocument extends BaseTypeDocuments {
  docu_sec: number;
}
