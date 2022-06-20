

export const formatFunds:any = (raw_funds:Array<any>) => {
    let final_funds = [];
    
    for (let i in raw_funds) {
        let depth = raw_funds[i].classes_series_cotas.length;
        
        for (let j=0; j<depth; j++) { 
            const data_inicio_divulgacao = new Date(raw_funds[i].classes_series_cotas[j].data_inicio_divulgacao_cota);
            final_funds.push(
                {
                    id: Number(i)+j,
                    cnpj_fundo: raw_funds[i].cnpj_fundo || '-',
                    razao_social: raw_funds[i].razao_social || '-',
                    classe_anbima: raw_funds[i].classe_anbima || '-',
                    codigo_anbima: raw_funds[i].classes_series_cotas[j].codigo_anbima || '-',
                    nome_fantasia: raw_funds[i].classes_series_cotas[j].nome_fantasia || '-',
                    tipo_classe_cota: raw_funds[i].classes_series_cotas[j].tipo_classe_cota || '-', 
                    data_inicio_divulgacao_cota: data_inicio_divulgacao.toString() === 'Invalid Date' ? '-' : `${data_inicio_divulgacao.getUTCDate()}/${data_inicio_divulgacao.getUTCMonth()+1}/${data_inicio_divulgacao.getUTCFullYear()}` || '-',
                    situacao_atual: raw_funds[i].classes_series_cotas[j].situacao_atual || '-',
                    data_encerramento: (new Date(raw_funds[i].classes_series_cotas[j].data_encerramento).toLocaleString('pt-BR')) === 'Invalid Date' ? '-' : new Date(raw_funds[i].classes_series_cotas[j].data_encerramento).toLocaleString('pt-BR') || '-',
                    data_atualizacao: (new Date(raw_funds[i].classes_series_cotas[j].data_atualizacao).toLocaleString('pt-BR')) === 'Invalid Date' ? '-' : new Date(raw_funds[i].classes_series_cotas[j].data_atualizacao).toLocaleString('pt-BR') || '-',
                }
            );
        }
    }
    return final_funds;
}

export const toCurrency = (n:any, curr:string, LanguageFormat:any) =>
  Intl.NumberFormat(LanguageFormat, {
    style: 'currency',
    currency: curr,
  }).format(n);