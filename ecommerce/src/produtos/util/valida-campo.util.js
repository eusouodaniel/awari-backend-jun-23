exports.validaCampos = (payload) => {
  if ((!payload.nome 
    || !payload.descricao
    || !payload.imagem_url) || (
    payload.nome.length > 60 
    || payload.descricao.length > 255 
    || (payload.categoria && payload.categoria.length > 25)
    || payload.imagem_url.length > 100)) {
      return false;
    }
  return payload;
}