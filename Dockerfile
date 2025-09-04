# Build stage
FROM maven:3.9.9-eclipse-temurin-17 AS builder
WORKDIR /app
# Copy backend directory specifically
COPY backend/ .
RUN mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]