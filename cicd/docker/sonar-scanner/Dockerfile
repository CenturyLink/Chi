ARG BASE_VERSION=latest
FROM nexusprod.corp.intranet:4567/jsl-docker-standard-images/base_agent:$BASE_VERSION AS base_agent
FROM nexusprod.corp.intranet:4567/jsl-docker-standard-images/sonarqube_agent:$BASE_VERSION AS sonar_agent
FROM nexusprod.corp.intranet:4567/jsl-docker-standard-images/jira_agent:$BASE_VERSION AS jira_agent
FROM nexusprod.corp.intranet:4567/node:fermium-buster-slim

LABEL Description="This is a base image, which provides a cypress environment"

ARG user=jenkins
ARG group=jenkins
ARG uid=1341
ARG gid=1341
RUN getent group ${gid} || groupadd -g ${gid} ${group}
RUN useradd -c "Jenkins user" -d /home/${user} -u ${uid} -g ${gid} -m ${user}

WORKDIR /home/${user}
ENV CURLOPTIONS "-SsLk --fail"

VOLUME /ux-chi

USER root

# https://www.slimjet.com/chrome/download-chrome.php?file=files%2F86.0.4240.75%2Fgoogle-chrome-stable_current_amd64.deb
# https://www.slimjet.com/chrome/download-chrome.php?file=files%2F71.0.3578.80%2Fgoogle-chrome-stable_current_amd64.deb

RUN apt-get update && \
    apt-get -y install wget unzip jq yajl-tools default-jre git curl && \
    apt-get clean

RUN wget "https://github.com/github/hub/releases/download/v2.14.2/hub-linux-amd64-2.14.2.tgz" -O hub.tgz \
    && tar xzvf hub.tgz \
    && mv hub-linux-amd64-2.14.2/bin/hub /usr/local/bin \
    && chmod +x /usr/local/bin/hub

RUN wget https://www.slimjet.com/chrome/download-chrome.php?file=files%2F71.0.3578.80%2Fgoogle-chrome-stable_current_amd64.deb -O google-chrome-stable_current_amd64.deb \
 && apt-get update \
 && apt-get install -y ./google-chrome-stable_current_amd64.deb expect libgconf-2-4 xvfb busybox \
 && apt-get clean \
 && rm ./google-chrome-stable_current_amd64.deb

ENV QT_X11_NO_MITSHM=1
ENV _X11_NO_MITSHM=1
ENV _MITSHM=0
ENV TERM=xterm-256color

RUN ls -la /root
RUN chmod 755 /root

WORKDIR /home/node

RUN wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.3.0.2102-linux.zip && \
    unzip sonar-scanner-cli-4.3.0.2102-linux.zip

ENV PATH="/home/node/sonar-scanner-4.3.0.2102-linux/bin:${PATH}"
ENV JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64/jre"

RUN echo -n | openssl s_client -connect sonar.foss.corp.intranet:443 </dev/null 2>/dev/null | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /home/node/sonar-scanner-4.3.0.2102-linux/sonar.crt

RUN openssl x509 -outform der -in /home/node/sonar-scanner-4.3.0.2102-linux/sonar.crt -out /home/node/sonar-scanner-4.3.0.2102-linux/sonar.der

RUN keytool -import -noprompt -alias ctl -storepass changeit -keystore /etc/ssl/certs/java/cacerts -file /home/node/sonar-scanner-4.3.0.2102-linux/sonar.der

ENV SONAR_SCANNER_OPTS="-Dcom.sun.net.ssl.checkRevocation=false -Djavax.net.ssl.trustStore=/etc/ssl/certs/java/cacerts -Djavax.net.ssl.keyStore=/etc/ssl/certs/java/cacerts"

RUN chmod -R 777 /home/node/sonar-scanner-4.3.0.2102-linux
RUN usermod -a -G staff node
RUN usermod -a -G staff ${user}
RUN usermod -aG root ${user}
USER jenkins
