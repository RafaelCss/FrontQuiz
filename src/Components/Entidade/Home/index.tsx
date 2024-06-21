import React from 'react';
import Image from 'next/image';
import { Container, CardMod, TituloHome } from './style';
import * as ExcelJS from 'exceljs';
import * as FileSaver from 'file-saver';

const Home: React.FC = () => {
  function formatarData(data: any) {
    return data ? new Date(data).toLocaleDateString() : null;
  }
  function montarObjeto(cliente: any) {
    return {
      'Codigo Cliente Legado': cliente.codigo,
      'Codigo Cliente Radar': cliente.codigoClienteRadar,
      Vendedor: cliente.vendedor?.email,
      Parceiro: cliente.parceiro?.nome,
      Sdr: cliente.sdr,
      'Vendedor Auxiliar': cliente.vendedorAuxiliar,
      Demonstrador: cliente.demonstrador,
      Segmento: cliente.segmento?.nome,
      'Razao Social / Nome Completo': cliente.razaoSocial || cliente.nome,
      Cidade: cliente.enderecos?.[0]?.cidade?.nome,
      UF: cliente.enderecos?.[0]?.uf,
      Documento: cliente.documento,
      Tipo: cliente.tipo,
      Status: cliente.status,
      'Status Financeiro': cliente.statusFinanceiro,
      'Data Criacao': formatarData(cliente.contratos?.[0]?.dataCriacao),
      'Data Atualizaçao': formatarData(cliente.dataAtualizacao),
      'Data Inicio Inadimplencia': formatarData(
        cliente.dataInicioInadimplencia
      ),
      'Nome Completo': cliente.contato.nomeCompleto,
      Telefone: cliente.contato.telefone,
      'Telefone Opcional': cliente.contato.telefoneOpcional,
      Email: cliente.contato.email,
      'Data Criacao Contato': formatarData(cliente.contato.dataCriacao),
      'Data Atualizacao': formatarData(cliente.contato.dataAtualizacao),
      Usuarios: cliente.usuarios.map(
        (usuario: {
          nomeCompleto: { nome: any; sobrenome: any };
          abreTickets: any;
          nivel: any;
          tipo: any;
          ativo: any;
          idLoginLegado: any;
          email: any;
          dataCriacao: any;
          dataAtualizacao: any;
          convidado: any;
          responsavelConvite: { nomeCompleto: { nome: any } };
        }) => ({
          'Codigo Cliente Legado': cliente.codigo,
          Nome: usuario.nomeCompleto.nome,
          Sobrenome: usuario.nomeCompleto.sobrenome,
          'Abre Tickets': usuario.abreTickets ? 'Sim' : 'Não',
          'Visualiza 2 Via Boleto': cliente.usuarios.some(
            (u: { visualiza2ViaBoleto: any }) => u.visualiza2ViaBoleto
          )
            ? 'Sim'
            : 'Não',
          Nivel: usuario.nivel,
          Tipo: usuario.tipo,
          Ativo: usuario.ativo ? 'Sim' : 'Não',
          'Id Login Legado': usuario.idLoginLegado,
          Email: usuario.email,
          'Data Criacao': formatarData(usuario.dataCriacao),
          'Data Atualizacao': formatarData(usuario.dataAtualizacao),
          Convidado: usuario.convidado ? 'Sim' : 'Não',
          'Responsavel Convite': usuario.responsavelConvite?.nomeCompleto?.nome,
        })
      ),
      Contratos: cliente.contratos.map(
        (contrato: {
          CodigoContratoLegado: any;
          CodigoContratoRadar: any;
          inicioDaVigencia: any;
          finalDaVigencia: any;
          tipoFaturamento: any;
          status: any;
          emailsFinanceiro: any;
          dataCriacao: any;
          dataAtualizacao: any;
          dataCancelamento: any;
          itensContrato: any[];
        }) => ({
          'Codigo Cliente Legado': contrato.CodigoContratoLegado,
          'Codigo Contrato Radar': contrato.CodigoContratoRadar,
          'Data Inicial': formatarData(contrato.inicioDaVigencia),
          'Data Final': formatarData(contrato.finalDaVigencia),
          'Tipo Faturamento': contrato.tipoFaturamento,
          Status: contrato.status,
          'Emails Financeiro': contrato.emailsFinanceiro[0],
          'Data Criacao': formatarData(contrato.dataCriacao),
          'Data Atualizacao': formatarData(contrato.dataAtualizacao),
          'Data Cancelamento': formatarData(contrato.dataCancelamento),
          Itens: contrato.itensContrato.map(
            (item: { item: any; itemId: any; quantidade: any }) => ({
              Item: item.item,
              'Item ID': item.itemId,
              Quantidade: item.quantidade,
            })
          ),
        })
      ),
    };
  }

  // Exemplo de uso:
  const cliente = {
    codigo: '12345',
    codigoClienteRadar: '67890',
    vendedor: { email: 'vendedor@example.com' },
    parceiro: { nome: 'Parceiro Exemplo' },
    sdr: 'SDR Exemplo',
    vendedorAuxiliar: 'Auxiliar Exemplo',
    demonstrador: 'Demonstrador Exemplo',
    segmento: { nome: 'Segmento Exemplo' },
    razaoSocial: 'Razao Social Exemplo',
    nome: 'Nome Exemplo',
    enderecos: [
      {
        cidade: { nome: 'Cidade Exemplo' },
        uf: 'UF Exemplo',
      },
    ],
    documento: '123.456.789-00',
    tipo: 'Tipo Exemplo',
    status: 'Status Exemplo',
    statusFinanceiro: 'Status Financeiro Exemplo',
    dataAtualizacao: '2024-06-21T00:00:00Z',
    dataInicioInadimplencia: '2024-05-21T00:00:00Z',
    contratos: [
      {
        CodigoContratoLegado: 'CONTRATO123',
        CodigoContratoRadar: 'CONTRATO456',
        inicioDaVigencia: '2024-01-01T00:00:00Z',
        finalDaVigencia: '2024-12-31T00:00:00Z',
        tipoFaturamento: 'Mensal',
        status: 'Ativo',
        emailsFinanceiro: ['financeiro@example.com'],
        dataCriacao: '2024-01-01T00:00:00Z',
        dataAtualizacao: '2024-06-21T00:00:00Z',
        dataCancelamento: null,
        itensContrato: [
          { item: 'Item 1', itemId: 'ITEM1', quantidade: 10 },
          { item: 'Item 2', itemId: 'ITEM2', quantidade: 20 },
        ],
      },
    ],
    usuarios: [
      {
        nomeCompleto: { nome: 'Usuario', sobrenome: 'Exemplo' },
        abreTickets: true,
        visualiza2ViaBoleto: true,
        nivel: 'Admin',
        tipo: 'Interno',
        ativo: true,
        idLoginLegado: 'LOGIN123',
        email: 'usuario@example.com',
        dataCriacao: '2024-01-01T00:00:00Z',
        dataAtualizacao: '2024-06-21T00:00:00Z',
        convidado: false,
        responsavelConvite: { nomeCompleto: { nome: 'Responsavel' } },
      },
    ],
    contato: {
      nomeCompleto: 'Contato Exemplo',
      telefone: '1234-5678',
      telefoneOpcional: '8765-4321',
      email: 'contato@example.com',
      dataCriacao: '2024-01-01T00:00:00Z',
      dataAtualizacao: '2024-06-21T00:00:00Z',
    },
  };

  async function gerarExcel() {
    try {
      const objetoCompleto = montarObjeto(cliente);
      const workbook = new ExcelJS.Workbook();

      // Cliente sheet
      const clienteSheet = workbook.addWorksheet('Cliente');
      clienteSheet.columns = Object.keys(objetoCompleto)
        .filter((key) => key !== 'Usuarios' && key !== 'Contratos')
        .map((key) => ({ header: key, key }));
      clienteSheet.addRow(objetoCompleto);

      // Usuarios sheet
      const usuariosSheet = workbook.addWorksheet('Usuarios');
      if (objetoCompleto.Usuarios.length > 0) {
        usuariosSheet.columns = Object.keys(objetoCompleto.Usuarios[0]).map(
          (key) => ({ header: key, key })
        );
        objetoCompleto.Usuarios.forEach((usuario: any) => {
          usuariosSheet.addRow(usuario);
        });
      }

      // Contratos sheet
      const contratosSheet = workbook.addWorksheet('Contratos');
      if (objetoCompleto.Contratos.length > 0) {
        // Obtem as chaves do primeiro contrato excluindo 'itensContrato'
        const firstContractKeys = Object.keys(
          objetoCompleto.Contratos[0]
        ).filter((key) => key !== 'Itens');

        // Define as colunas do contratosSheet, excluindo 'itensContrato'
        contratosSheet.columns = firstContractKeys.map((key) => ({
          header: key,
          key,
        }));

        // Adiciona cada contrato como uma nova linha no contratosSheet, excluindo 'itensContrato'
        objetoCompleto.Contratos.forEach((contrato: any) => {
          const contratoSemItens: any = {};
          firstContractKeys.forEach((key) => {
            //ts-ignore
            contratoSemItens[key] = contrato[key];
          });

          contratosSheet.addRow(contratoSemItens);
        });
      }

      const itensContratoSheet = workbook.addWorksheet('Itens Contrato');
      if (objetoCompleto.Contratos.length > 0) {
        // Obtem as chaves do primeiro item de contrato para definir as colunas
        const firstItemKeys = Object.keys(objetoCompleto.Contratos[0].Itens[0]);

        // Define as colunas do itensContratoSheet
        itensContratoSheet.columns = firstItemKeys.map((key) => ({
          header: key,
          key,
        }));

        // Adiciona cada item de contrato como uma nova linha no itensContratoSheet
        objetoCompleto.Contratos.forEach((contrato: any) => {
          contrato.Itens.forEach((item: any) => {
            itensContratoSheet.addRow(item);
          });
        });
      }

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      FileSaver.saveAs(blob, 'teste.xlsx');
    } catch (error) {
      console.error('Erro ao gerar o Excel:', error);
    }
  }

  const handleClick = () => {
    gerarExcel();
  };

  const imagePaths = [
    '/imagem1.jpg',
    '/imagem4.jpeg',
    '/imagem2.jpg',
    // Adicione mais caminhos de imagem conforme necessário, por padrão já busca arquivos estáticos da pasta public.
  ];
  return (
    <Container>
      <TituloHome>Tudo sobre futebol</TituloHome>
      <div style={{ display: 'flex', gap: '5px' }}>
        {imagePaths.map((imagem) => (
          <CardMod
            type={'primary'}
            key={imagem.toString()}
            onClick={handleClick}>
            <Image src={imagem} alt="imagem futebol" width={400} height={400} />
          </CardMod>
        ))}
      </div>
    </Container>
  );
};

export default Home;
