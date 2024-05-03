const database = "BD3-NoSQL-AtlasMongoDB";

use(database);

//Lista todos os alunos
db["bd3-nosql-atv6"].find();

//Lista um aluno pelo CPF sem o campode “id”
db["bd3-nosql-atv6"].find({ cpf: "123.456.789-00" }, { _id: false });
