FROM docker-registry.buy4.io/openshift/stone-nodejs:v1.0.0

ENV PATH "${APP_DIR}/../.nvm_bin:$PATH"

COPY . /tmp/src

RUN /opt/openshift-platform-nodejs/files/s2i/assemble

WORKDIR /home/application/current/

ENTRYPOINT ["npm"]

EXPOSE 8888

CMD ["start"]