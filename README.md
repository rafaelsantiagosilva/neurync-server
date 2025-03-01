# ♾️ Neurync - Server ⚙️

## 📥 Pré-requisitos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js]() (v >= 20.0)
- NPM e NPX (vêm junto com o Node.js)
- IDE/Editor (opcional para executar o projeto): [VsCode](https://code.visualstudio.com/download) (recomendado)

## 👨‍💻 Como executar?

- Clone o repositório na sua máquina

```bash
git clone https://github.com/rafaelsantiagosilva/neurync-server.git
```

- Inicie o Docker Desktop

- Abra a pasta **root** do projeto no terminal
- Preencha as variáveis de ambiente (arquivo **.env**)
- Rode o comando: (para iniciar o banco de dados)

```bash
docker compose up -d
```

- Rode o comando: (para instalar os pacotes)

```bash
npm i
```

- Rode o comando: (para inicar o projeto - modo desenvolvimento)

```bash
npm run dev
```

- Abra a URL de documentação que aparecer no terminal

## 🔧 Comandos

### Iniciar o projeto em modo desenvolvimento

```bash
npm run dev
```

### Baixar pacote/biblioteca

```bash
npm install <NOME_DO_PACOTE>
```

#### Baixar pacote/biblioteca como dependência de desenvolvimento (somente necessária na hora de programar)

```bash
npm install <NOME_DO_PACOTE> -D
```

### Rodar contêineres

```bash
docker compose up
```

#### Rodar contêineres em segundo plano

```bash
docker compose up -D
```

### Finalizar contêineres

```bash
docker compose down
```

### Realizar as alterações no banco de dados via Prisma

```bash
npx prisma migrate dev
```
