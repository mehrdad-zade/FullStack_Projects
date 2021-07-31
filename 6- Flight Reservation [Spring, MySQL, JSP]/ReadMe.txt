- Configurations:
	- pom.xml: jpa, mysql, web jasper (used for tomcat) jstl, itext (fpr pdf generation), security
	- application.properties
	- setup LOGGER in classes: comes with Spring Boot
	- security:
		- WebSecurityConfig.java: what routes are authorized and passwordEncoder

- Model (Package - Classes: entities):
	- User: 
	- Flight:
	- Passenger:
	- Reservation: 
	- AbstractEntity: this is a class that keeps the common entities
	- Role: setup the class for the accepted roles

- Data Access Layer (Package - Interfaces: repos): contains the queries
	- UserRepository extends JpaRepository<User, Long>
	- FlightRepository extends JpaRepository<Flight, Long>
	- ReservationRepository extends JpaRepository<Reservation, Long>
	- PassengerRepository extends JpaRepository<Passenger, Long>
	- RoleRepository

- View (jsp)
	- registeration.jsp
	- login.jsp
	- addFlight.jsp
	- completeReservation.jsp
	- displayFlights.jsp
	- findFlights.jsp
	- reservertaionConfirmation.jsp

- Controller (package - Classes: controllers):	
	- UserController
	- FlightController
	- PassengerController
	- ReservationController
	- ReservationRestController: REST

- Service Layer: 
	- Package: dto - data transfer object
	- Package: service
		- ReservationService
		- ReservationServiceImlp
		- UserDetailservice
		- UserDetailserviceImpl
		- ServiceSecurity

- Utility:
	- EmailUtil
	- PDFGenerator		

- bundle and deployment:
	- option 1: JAR - works fine on seervelet containers such as Tomcat and Jetty
		- go to the project and Run As -> "maven clean"
		- Run as -> "maven install": this will run all the test files and includes the maven dependencies under a huge JAR file
		- find the JAR under Target
		- unzip the file: you will get: BOOT-INF, META-INF and org
		- all the spring boot classes that are required at run time goes to org/springframework/boot
		- all jar dependencies will be under BOOT-INF/lib
		- run it with this command: java -jar flightReservation.jar

	- option 2: WAR - works best on weblogic and websphere
		- pom.xml: update the packaging from jar to war
		- FlightreservationApplication: update it to extend SpringBootServletInitializer, then override the configure method
		- Maven update
		- - go to the project and Run As -> "maven clean"
		- Run as -> "maven install"
		- unzip the file under target dir
