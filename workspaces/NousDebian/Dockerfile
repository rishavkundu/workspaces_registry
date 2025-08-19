FROM kasmweb/debian-bookworm-desktop:1.17.0

LABEL "com.kasmweb.image"="true" \
    "com.kasmweb.name"="NousDebianXFCE" \
    "com.kasmweb.description"="Debian 12 XFCE desktop with Hermes agent stub" \
    "com.kasmweb.version"="1.17.0"

ENV DEBIAN_FRONTEND=noninteractive \
    STARTUPDIR=/dockerstartup \
    INST_SCRIPTS=/dockerstartup/install \
    LANG=en_US.UTF-8 \
    LC_ALL=en_US.UTF-8

USER root

RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
    ca-certificates curl wget nano htop firefox-esr xfce4-terminal locales jq; \
    sed -i 's/^# *\(en_US\.UTF-8 UTF-8\)/\1/' /etc/locale.gen; \
    locale-gen; \
    update-ca-certificates; \
    apt-get clean; rm -rf /var/lib/apt/lists/*

# Branding: wallpaper
COPY assets/wallpaper.png /usr/share/extra/backgrounds/bg_default.png
RUN install -d /usr/share/backgrounds \
    && cp -f /usr/share/extra/backgrounds/bg_default.png /usr/share/backgrounds/bg_default.png \
    && chmod 0644 /usr/share/extra/backgrounds/bg_default.png /usr/share/backgrounds/bg_default.png

# Seed defaults for new/current user
RUN install -d -o 1000 -g 1000 /home/kasm-user/.config/xfce4/xfconf/xfce-perchannel-xml
RUN printf '%s\n' \
    '<?xml version="1.0" encoding="UTF-8"?>' \
    '<channel name="xfce4-desktop" version="1.0">' \
    '  <property name="backdrop" type="empty">' \
    '    <property name="screen0" type="empty">' \
    '      <property name="monitor0" type="empty">' \
    '        <property name="image-path" type="string" value="/usr/share/backgrounds/bg_default.png"/>' \
    '      </property>' \
    '    </property>' \
    '  </property>' \
    '  <property name="last-image" type="string" value="/usr/share/backgrounds/bg_default.png"/>' \
    '</channel>' \
    > /home/kasm-user/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-desktop.xml \
    && chown -R 1000:1000 /home/kasm-user

USER 1000
