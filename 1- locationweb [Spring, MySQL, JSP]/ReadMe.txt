1- UI
2- DB

UI will have, edit, delete and add buttons. Send the ID to the DB for the requested CRUD operation.
there will be a view all button to see all the locations from the DB


Location project Structure:

- src-main-java
	- entetites package
		- Location.java class: @Entity, @Id, getters/setters
	- repos package
		- LocationRepository interface: extends JpaRepository (useful for findAll() in service)
	- service package
		- LocationService Interface: methods -> update, delete, save, findAll
		- LocationServiceImpl class
	- controller package
		- LocationController class connects the view with the data model
	- web interface
		- save under src/main/webapp/WEB-INF/views-jsp/createLocation.jsp: this is the html form
	- config: 
		- application.properties
		- pom.xml: add jsp dependancies

Technologies:
Spring boot
MySQL Workbench
JSP : https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-thymeleaf
		


