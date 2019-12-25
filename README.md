# Full-Stack-AWS

https://medium.com/@Keithweaver_/setting-up-mern-stack-on-aws-ec2-6dc599be4737
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