+ install docker
+ run the app
+ use the jar file in target folder
+ dockerize the db. you need to update application.properties with that info

+ db and boot string will be dockerized seperatley

- docker run mysql
- Setup the mysql container:

- docker run -d -p 6666:3306 --name=docker-mysql --env="MYSQL_ROOT_PASSWORD=test@1234" --env="MYSQL_DATABASE=reservation" mysql

- docker exec -it docker-mysql bash

- mysql -uroot -p 
- test@1234

- mysql> show databases;

- use reservation

- mysql> show tables; 

- cd to the dir of your sql file for building tables and populating them with data; in a new terminal

- docker exec -i docker-mysql mysql -uroot -ptest@1234 reservation <flightdb.sql

+ dockerize flight reservation:

FROM java:8
VOLUME /temp
EXPOSE 10555
ADD target/flightservices-0.0.1-SNAPSHOT.jar flightservices-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "flightservices-0.0.1-SNAPSHOT.jar"]

+ save above as Docker with no extensions under flightservices


- cd to Dockerfile dir
- docker build -f Dockerfile -t reservation_app .
- docker run -t --link docker-mysql:mysql -p 10555:8080 reservation_app
