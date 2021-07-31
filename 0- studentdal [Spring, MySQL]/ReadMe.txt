Java full stack:
1- core Java (annotations: @)
2- JDBC, Servelets and JSP for connecting to the DB and running queries
3- Spring boot and framework
4- Java web and messaging services 
5- Junit and Mockito for unit testing
6- Maven vs. Gradle
7- design pattern
8- Spring security
9- Choice of front-end and JavaScript


Tools:
- Spring Tool Suit
- MySQL WorkBench: how start it - https://medium.com/macoclock/mysql-on-mac-getting-started-cecb65b78e
- Postman


Concepts:
1- monolitic vs microservices:
	- benifits: 
		- Heterogenious: each app can be used by different technologies (python Java, ..)
		- Robustness: if one app goes down, the entire service won't
		- Scalable: the entire service won't need to be deployed, only certain modules can
		- easy to deply: only a small service can be deployed. 
		- reusesability/replacability

2- Spring boot layers:
	a. presentation layer: controller
	b. service layer
	c. data layer
	d. integration layer: comprised of web services

	- model classes: dealing with the data
	- IDAO interface: data access layer 
	- DAO classes: implementation of IDAO
	- IService interface
	- service implementation classes
	- controller class: generating the UI
	- utility clases: performing special operations accross all the classeses above
	- validator class: validating data coming/going from/to the user
	- service providers/consumers classes: part of interhration layer. REST full services
	- View: repsenting the data as reports and etc


Spring Boot Notes:

1- How to connect Java with the db?
	- craete a mysql server
	- create a db using mysql workbench
	- on SpringToolSuite:
		- create a class: Student
			- use annotations such as Entity, ID, Table and Column from persistence package
			- create getters and setters
		- create an interface class: StudentRepository
			- it should extend CRUD Repository
		- Configure the Data Source under application.properties
			- provide info such as the user name and pass
			- spring.datasource.url=jdbc:mysql://localhost:3306/projectdb
			- spring.datasource.username=root
			- spring.datasource.password=root@1234
			- spring.jpa.show-sql=true
			- spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect
			- spring.jpa.hibernate.ddl-auto=create
		- run test







