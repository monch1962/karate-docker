FROM openjdk:12-alpine
ENV KARATE_VERSION 0.9.4
WORKDIR /
RUN wget -O karate.jar https://github.com/intuit/karate/releases/download/v$KARATE_VERSION/karate-$KARATE_VERSION.jar
COPY features/ features/
COPY results/ results/
ENTRYPOINT /opt/openjdk-12/bin/java -jar karate.jar -o /results /features/*.feature
