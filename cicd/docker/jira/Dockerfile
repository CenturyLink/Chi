FROM nexusprod.corp.intranet:4567/ubuntu:focal
ARG user=jenkins
ARG group=jenkins
ARG uid=1341
ARG gid=1341
RUN getent group ${gid} || groupadd -g ${gid} ${group}
RUN useradd -c "Jenkins user" -d /home/${user} -u ${uid} -g ${gid} -m ${user}
RUN usermod -a -G root ${user}

RUN apt-get -y update && \
    apt-get -y install bash openjdk-8-jre unzip git curl

ARG ACLI=atlassian-cli-9.3.0
ADD https://bobswift.atlassian.net/wiki/download/attachments/16285777/atlassian-cli-9.3.0-distribution.zip /opt/${ACLI}.zip
RUN unzip /opt/${ACLI}.zip -d /opt
RUN rm /opt/${ACLI}.zip
ENV PATH="/opt/${ACLI}:${PATH}"
WORKDIR /opt/${ACLI}
RUN chown -R ${user}:${group} /opt/${ACLI}/