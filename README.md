# Full-Stack-AWS

ssh -i "mern-key.pem" ubuntu@ec2-34-215-31-42.us-west-2.compute.amazonaws.com
sudo apt-get update && sudo apt-get upgrade -y

nginx
sudo apt-get install nginx -y
sudo systemctl status nginx
sudo systemctl start nginx
sudo systemctl enable nginx

node install

sudo apt-get update
cd ~
# Change 0.33.5 <---- You see this the version may have changed check the nvm page
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh -o install_nvm.sh
bash install_nvm.sh
source ~/.profile
nvm install

node -v
# Outputs a number: "v6.0.0"
npm -v
# outputs a number "3.8.6"

nginx domain and conf
sudo rm /etc/nginx/sites-available/default
sudo vim /etc/nginx/sites-available/default
server {
    listen 80;
    server_name your_domain.com www.your_domain.com;
    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
     }
}
sudo systemctl reload nginx

mongo
sudo apt-get update -y
sudo service mongodb start
sudo service mongodb stop
sudo service mongodb status

https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm

db.createUser({ user: "mern_user",
                 pwd: "mern_user",
                 roles: [{ role: "readWrite", db: "mern_db" }] })
db.auth("mern_user","mern_user");
exit


server start and stop
pm2 show server
pm2 stop server


SSL

SSL is the last step. I followed this tutorial and listed it below. Change the example.com to your domain.
cd ~
sudo add-apt-repository ppa:certbot/certbot
# This is the PPA for packages prepared by Debian Let's Encrypt Team and backported for Ubuntu(s).
# More info: https://launchpad.net/~certbot/+archive/ubuntu/certbot
# Press [ENTER] to continue or ctrl-c to cancel adding it
sudo apt-get update
sudo apt-get install python-certbot-nginx
# Y
sudo ufw status
# Status: inactive
sudo ufw allow 'Nginx Full'
# Make sure the domain is pointing to the server at this point.
sudo certbot --nginx -d example.com -d www.example.com
# Enter email
# A to agree
# Share email so Y/N
# Fails if no domain
# otherwise 1 or 2 for redirect of traffic
# I recommend 2

Lastly, we need to point the domain on port 443 to 8080 and add an additional pem .
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048

Edit the configuration:
sudo nano /etc/nginx/sites-available/default

The certbot added:
listen 443 ssl; # managed by Certbot
ssl_certificate /etc/letsencrypt/live/easyapi.io/fullchain.pem; # managed by Ce$
ssl_certificate_key /etc/letsencrypt/live/easyapi.io/privkey.pem; # managed by $
include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot

Add below the certbot added part:
ssl_dhparam /etc/ssl/certs/dhparam.pem;
Check the syntax of the configuration:
sudo nginx -t

Reload the configuration:
sudo systemctl reload nginx

Lastly, setup the auto update. We will use crontab :
sudo crontab -e

# Select an editor (I'm using 2)
Add this line:
15 3 * * * /usr/bin/certbot renew --quiet
Change to your repo and start your production.
cd ~/YOUR_REPO
pm2 start server.js -- --production


