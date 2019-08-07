FROM openjdk:12-alpine
ENV KARATE_VERSION 0.9.4
WORKDIR /
#ENV JAVA_OPTS='-Dkarate.config.dir=$(pwd)/config'
ENV JAVA_OPTS="-Dkarate.config.dir=./config"
RUN wget -O karate.jar https://github.com/intuit/karate/releases/download/v$KARATE_VERSION/karate-$KARATE_VERSION.jar
COPY features/ features/
COPY results/ results/
COPY config/ config/
# ENTRYPOINT /opt/openjdk-12/bin/java -jar karate.jar -o /results /features/*.feature
EXPOSE 8999
ENTRYPOINT if [ -z "$MOCK" ]; then /opt/openjdk-12/bin/java $JAVA_OPTS -jar karate.jar -o /results /features/*.feature; else /opt/openjdk-12/bin/java $JAVA_OPTS -jar karate.jar -m /features/*mock.feature -p 8999; fi
