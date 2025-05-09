# SGITWeb - Zona Azul

Sistema de Gerenciamento de Infrações de Trânsito Zona Azul - Versão Web

## Dependências

Para o desenvolvimento iremos utilizar o ambiente com o **Docker**, então essa é a única dependência, mas internamente utilizaremos:
- PHP
- Composer
- Firebird

# Rodando o sistema através do Docker

## Preparando o ambiente

### Configurações Pŕevias

- Os arquivos de configuração do SGIT (constants.php, app.ini, etc.) deve ser adicionado no final de cada arquivo .sgitza e deverão estar corretamente configurados para o ambiente de desenvolvimento.
- Deverá existir uma entrada no hosts da maquina local apontando os endereço local.sgitza.dsin.com.br para o ip **127.0.0.1**.
- Deverá existir uma variável de ambiente "DSIN_DATABASE_FOLDER" cujo o conteúdo deve ser a pasta onde estão localizados os bancos de dados locais para desenvolvimento. ex: set DSIN_DATABASE_FOLDER=P:\bds
- As entradas do arquivo app.ini.sgitza que apontam para o servidor de banco de dados (host) devem receber o seguinte valor: firebird
- As entradas do arquivo app.ini.sgitza que apontam para o arquivo de banco de dados devem receber o seguinte valor: /opt/data/teste/NOMEARQUIVOEM-DSIN_DATABASE_FOLDER.FDB
- O usuário DSIN já está criado na imagem com a senha padrão do firebird

### Instalações necessárias

No diretório raiz da aplicação, use um dos seguintes métodos:

### Subir o sistema

No diretório raiz da aplicação, use um dos seguintes métodos:

##### utilizando docker-compose
```bash
	docker compose up --scale sgit-za=1
```

##### utilizando o make
```bash
make up-with-sgitza
```

Para acessar o SGIT ZA, basta acessar o seguinte endereço pelo browser: http://local.sgitza.dsin.com.br:8002/webApps

Dessa forma o docker-compose vai subir apenas o container do SGIT-ZA.

## Ferramentas para desenvolvimento

### php-cs-fixer

Ferramenta utilizada para avaliar e modificar o fonte deixando o de acordo estilo de código definidos. **Estilo de código utilizado: PSR1 e PSR2**.

O php-cs-fixer foi configurado para ser executado dentro do container docker. Desta forma elimina-se a dependência do PHP e da própria ferramenta na maquina.

Para executar siga um dos seguintes métodos:

##### utilizando docker-compose
```bash
docker-compose run sgit php-cs-fixer fix [file_to_fix_coding_style]
```

##### utilizando make
```bash
make cs-fixer FILE=[file_to_fix_coding_style]
```

### phpstan
Ferramenta utilizada analizar estaticamente o código PHP e emitir um relatórios dos erros encontrados.

O PHPStan foi configurado para ser executado dentro do container docker. Desta forma elimina-se a dependência do PHP e da própria ferramenta na maquina.

Para executar siga um dos seguintes métodos:

##### utilizando docker-compose
```bash
docker-compose run sgit ./vendor/bin/phpstan analyse [file_to_analyse] --level max --memory-limit 4000M
```

##### utilizando make
```bash
make stan FILE=[file_to_analyse]
```

# Erros conhecidos

## Permissão nas pastas tmp e ftp no Windows

Em máquinas windows pode ocorrer um problema de permissão com as pastas tmp e ftp, para isso rode um dos seguintes comandos:

##### utilizando chmod
```bash
chmod -R o+rwx .
```

##### utilizando make
```bash
make fix-permissions
```

## Nada aparece no terminal após execução do phpstan

Em arquivos muito grandes, pode dar erro de memória sem nenhuma resposta, por isso é indicado sempre usar o **phpstan** com `--memory-limit 4000M`
