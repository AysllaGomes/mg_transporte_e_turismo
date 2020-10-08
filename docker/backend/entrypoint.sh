#!/bin/sh
echo "Back - Iniciando o Endpoint da Aplicação e setando o dono da pasta storage"
chown -R $USER:www-data storage

if ! [ -f ".env" ]; then
    echo "Arquivo '.env' não encontrado - Gerando arquivo"
    cp env.deployment .env
fi

echo "Instalando as dependências com o composer..."
composer install --verbose

echo "DB Migration"
php artisan migrate --force

echo "Limpando o cache das rotas e views"
php artisan view:clear

echo "Configurando o cache da aplicação"
php artisan key:generate
php artisan config:cache

echo "Permissões de acesso a pasta vendor"
chmod -R 777 vendor

echo "Permissões de acesso a pasta storage"
chmod -R 777 storage

echo "Back - Finzalizando o Endpoint da Application"
