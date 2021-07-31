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
		- add a function to return back list of objects based on the @Query
	- service package
		- LocationService Interface: methods -> update, delete, save, findAll
		- LocationServiceImpl class
	- controller package
		- LocationController class connects the view with the data model
		- add a new method to handle jfreechart
	- web interface
		- save under src/main/resources/templates: .html files of Thymeleaf goes here
	- update the util package with interface and class to handle jfreechart
	- config: 
		- application.properties, jpa
		- pom.xml: add Thymeleaf dependancies; jfreechart maven dependancy; jpa

Technologies:
Spring boot
MySQL Workbench
Thymeleaf
use of open source API: JFreeChart for reporting

		


