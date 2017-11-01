const getInfo = require('./cep')
describe('CEP Util', () => {
  test('displaying cep information', () => {
    let info = `cep: 01001-000,
    logradouro: Praça da Sé,
    complemento: lado ímpar,
    bairro: Sé,
    localidade: São Paulo,
    uf: SP,
    unidade: ,
    ibge: 3550308,
    gia: 1004`

    // https://viacep.com.br/ws/01001000/json/
    let cep = {
      cep: "01001-000",
      logradouro: "Praça da Sé",
      complemento: "lado ímpar",
      bairro: "Sé",
      localidade: "São Paulo",
      uf: "SP",
      unidade: "",
      ibge: "3550308",
      gia: "1004"
    }

    expect(getInfo(cep)).toBe(info)
  })
})
