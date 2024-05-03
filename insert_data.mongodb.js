const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv6";

use(database);

db["bd3-nosql-atv6"].insertOne({
  nome: "João Silva",
  data_nascimento: "1995-03-15",
  cpf: "123.456.789-00",
  rg: "987654321",
  email: "joao.silva@example.com",
  telefone_aluno: "(11) 98765-4321",
  telefone_responsavel: "(11) 12345-6789",
});
