docker build --no-cache -f SQL\Dockerfile.PostgreSql -t bazanovs/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t bazanovs/app ../..
