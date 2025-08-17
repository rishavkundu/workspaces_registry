FROM kasmweb/core-debian-bookworm:1.17.0

USER root

ENV HOME /home/kasm-default-profile
ENV STARTUPDIR /dockerstartup
ENV INST_SCRIPTS $STARTUPDIR/install
WORKDIR $HOME

RUN apt-get update && \
	apt-get install -y --no-install-recommends \
	vim git curl ca-certificates htop && \
	apt-get clean && rm -rf /var/lib/apt/lists/*

# Example: launch terminal on session start
RUN echo "/usr/bin/desktop_ready && /usr/bin/x-terminal-emulator &" > $STARTUPDIR/custom_startup.sh && \
	chmod +x $STARTUPDIR/custom_startup.sh

RUN chown 1000:0 $HOME && $STARTUPDIR/set_user_permission.sh $HOME

ENV HOME /home/kasm-user
WORKDIR $HOME
RUN mkdir -p $HOME && chown -R 1000:0 $HOME

USER 1000


