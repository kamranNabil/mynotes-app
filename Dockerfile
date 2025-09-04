FROM maven:3.9.9-eclipse-temurin-17 AS builder
WORKDIR /app
COPY backend/ .  # Copy backend directory specifically
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
