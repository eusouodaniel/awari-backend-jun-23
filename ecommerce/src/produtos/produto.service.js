const validaCampoUtil = require('./util/valida-campo.util');
const connection = require('../db/connection');

exports.listaProduto = async () => {
  const [result] = await connection.execute("select * from produtos;");
  return result;
}

exports.cadastraProduto = async (payload) => {
  const body = validaCampoUtil.validaCampos(payload);
  if (body) {
    await connection.execute(`
      insert into produtos (
        nome,
        preco,
        descricao,
        categoria,
        imagem_url
      ) values
      ('${body.nome}', ${body.preco}, '${body.descricao}', '${body.categoria}', '${body.imagem_url}}')
    `);
    await connection.execute(`
      insert into itens (
        produto_name
      ) values
      ('${body.nome}');
    `);
    return true;
  }
  return false;
}

exports.deletaProduto = async (id) => {
  const [result] = await connection.execute(`
    delete from produtos where id = ${id}
  `);
  return result;
}

exports.atualizaProduto = async (id, payload) => {
  const body = validaCampoUtil.validaCampos(payload);
  if (body) {
    const [result] = await connection.execute(`
      update produtos set 
        nome = '${body.nome}',
        preco = ${body.preco},
        descricao = '${body.descricao}',
        categoria = '${body.categoria}',
        imagem_url = '${body.imagem_url}'
      where id = ${id}
    `);
    return result;
  }
  return false;
}