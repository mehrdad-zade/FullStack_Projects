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
		- save under src/main/resources/templates: .html files of Thymeleaf goes here
	- config: 
		- application.properties
		- pom.xml: add Thymeleaf dependancies

Technologies:
Spring boot
MySQL Workbench
Thymeleaf : https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-thymeleaf

note:
if you had JSPs and then moved to Thymeleaf, all the templates you used under the controller will be automatically point to the .html ones. the synax of the templates differ though and needs a bit of update.
		


