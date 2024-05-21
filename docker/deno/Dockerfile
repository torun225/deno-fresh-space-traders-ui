FROM denoland/deno:debian-1.43.3

WORKDIR /root

ENV DEBIAN_FRONTEND noninteractive
ARG USERNAME=deno

RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y sudo \
  && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
  && chmod 0440 /etc/sudoers.d/$USERNAME
RUN apt-get install -y --no-install-recommends git wget curl ca-certificates unzip
RUN apt-get clean all && rm -r /var/lib/apt/lists/*

ENV DEBIAN_FRONTEND dialog
CMD ["bash"]