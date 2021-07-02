FROM nexusprod.corp.intranet:4567/ubuntu:focal
ARG user=jenkins
ARG group=jenkins
ARG uid=1341
ARG gid=1341
RUN getent group ${gid} || groupadd -g ${gid} ${group}
RUN useradd -c "Jenkins user" -d /home/${user} -u ${uid} -g ${gid} -m ${user}
RUN usermod -a -G root ${user}

ENV TZ=Europe/Madrid
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get -y update && \
    apt-get -y install bash openjdk-8-jre unzip git curl python3 python3-pip jq pylint gnupg software-properties-common rsync

RUN update-alternatives --install /usr/bin/python python /usr/bin/python3 10
RUN pip3 install attrdict==2.0.1 pysnow==0.7.17 jsonschema==3.2.0 nose==1.3.7 mock==4.0.3 coverage==5.5

RUN update-alternatives --install /usr/bin/python python /usr/bin/python3 10
RUN pip3 install attrdict==2.0.1 pysnow==0.7.17 jsonschema==3.2.0 nose==1.3.7 mock==4.0.3 coverage==5.5

ARG COMP_ACLI=atlassian-cli-9.3.0
ARG ACLI=atlassian-cli-9.8.0
ADD https://bobswift.atlassian.net/wiki/download/attachments/16285777/${ACLI}-distribution.zip /opt/${ACLI}.zip
RUN unzip /opt/${ACLI}.zip -d /opt
RUN ln -s /opt/${ACLI} /opt/${COMP_ACLI}
RUN rm /opt/${ACLI}.zip
ENV PATH="/opt/${ACLI}:${PATH}"
WORKDIR /opt/${ACLI}
RUN chown -R ${user}:${group} /opt/${ACLI}/
