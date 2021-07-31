FROM java:8
VOLUME /temp
EXPOSE 10555
ADD target/flightservices-0.0.1-SNAPSHOT.jar flightservices-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "flightservices-0.0.1-SNAPSHOT.jar"]