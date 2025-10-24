FROM google/cloud-sdk:emulators

RUN gcloud components install pubsub-emulator

EXPOSE 8085

CMD ["gcloud", "beta", "emulators", "pubsub", "start"]



