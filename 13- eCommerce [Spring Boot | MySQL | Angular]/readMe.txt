Project Requirements:

1- show a list of products
2- add products to a  shopping cart
3- shopping cart checkout
4- user login/logout security - using OAth 2, OpenID (okta.com) and Json Web Token
5- track previous orders for logged in users 

Stack:
1- Spring Boot
2- MySQL
3- Angular

Tech:
IntelliJ IDE
visual studio
MySQL Workbench
MySQL Server
start.spring.io
node
nvm
tic

Architecture:

MySql <---CRUD API---> Java Spring Boot <-> Angular

Angular:
01- Create Angular project and components
02- Develop TypeScript class for Products
03- Create Angular service to call APIs
04- Subscribe Angular components to subscribe to data from Angular Service
05- Display Data in HTML page
06- add Cross Origin support to Spring Boot App.
07- online shop template integration
08- search for products by category, text
09- detail view of the products
10- pagination support for products
11- add products to shopping cart; add/remove
12- cart check out, reactive forms
13- oder history (secure backend: 1. add okta to Maven pom.xml, 2. create an App on okta.com, 3. set app properties, 4. protect endpoints in config class)
14- browser refresh (browser storage and sessions)





























