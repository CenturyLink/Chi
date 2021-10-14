FROM nexusprod.corp.intranet:4567/python:3.8-slim

LABEL Description="This is a base image, which provides an environment for python"

ARG user=jenkins
ARG group=jenkins
ARG uid=1341
ARG gid=1341
USER root
RUN apt-get update
RUN apt-get -y install git curl
RUN getent group ${gid} || groupadd -g ${gid} ${group}
RUN useradd -c "Jenkins user" -d /home/${user} -u ${uid} -g ${gid} -m ${user}



RUN echo "net.ipv6.conf.all.disable_ipv6 = 1" >> /etc/sysctl.conf && \
    echo "net.ipv6.conf.default.disable_ipv6 = 1" >> /etc/sysctl.conf


RUN usermod -a -G root ${user}
CMD ["python3"]
