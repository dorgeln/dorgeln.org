---
title: Archiso
description: Headings, links, lists, images and code blocks examples
image:
publishedAt: 2021-12-29
authors:
  - name: Andreas Trawöger
    avatarUrl: https://pbs.twimg.com/profile_images/1120591657152536578/qsf_Hlyn_400x400.png
    link: https://twitter.com/jmanuelsilvapt
tags:
  - Arch
  - Linux
---

### Installing package

```bash
sudo pacman --noconfirm -S archiso
```

```bash
CONFIG=archiso
sudo mkdir -p /tmp/archiso
cd /tmp/archiso
sudo cp -rv /usr/share/archiso/configs/releng $CONFIG
```

```bash
sudo grep root /etc/shadow | sudo tee $CONFIG/airootfs/etc/shadow
sudo cp /etc/vconsole.conf $CONFIG/airootfs/etc
sudo cp /etc/ssh/sshd_config $CONFIG/airootfs/sshd_config
sudo mkdir -p $CONFIG/airootfs/etc/systemd/system/multi-user.target.wants
sudo ln -sf /usr/lib/systemd/system/sshd.service $CONFIG/airootfs/etc/systemd/system/multi-user.target.wants/
```

```bash
sudo mkdir -p -m 0700 $CONFIG/root/.ssh
cat ~/.ssh/id_rsa.pub  | sudo tee $CONFIG/root/.ssh/authorized_keys
sudo chmod 0600  $CONFIG/root/.ssh/authorized_keys
```

```bash
cat << 'EOF' | sudo tee  $CONFIG/packages.x86_64
amd-ucode
arch-install-scripts
b43-fwcutter
base
bind-tools
broadcom-wl
clonezilla
crda
darkhttpd
ddrescue
dhclient
dhcpcd
diffutils
dmraid
dnsmasq
dosfstools
edk2-shell
efibootmgr
ethtool
exfatprogs
f2fs-tools
fsarchiver
gnu-netcat
gpm
gptfdisk
grml-zsh-config
haveged
hdparm
intel-ucode
ipw2100-fw
ipw2200-fw
irssi
iwd
jfsutils
kitty-terminfo
lftp
linux
linux-atm
linux-firmware
lsscsi
lvm2
lynx
man-db
man-pages
mc
mdadm
memtest86+
mkinitcpio
mkinitcpio-archiso
mkinitcpio-nfs-utils
mtools
nano
nbd
ndisc6
nfs-utils
nilfs-utils
nmap
ntfs-3g
nvme-cli
openconnect
openssh
openvpn
partclone
parted
partimage
ppp
pptpclient
reflector
rp-pppoe
rsync
rxvt-unicode-terminfo
sdparm
sg3_utils
smartmontools
sudo
syslinux
systemd-resolvconf
tcpdump
terminus-font
testdisk
tmux
usb_modeswitch
usbutils
vim
vpnc
wireless-regdb
wireless_tools
wpa_supplicant
wvdial
xfsprogs
xl2tpd
zsh
htop
dstat
sysstat
screen
xfsdump
ntfs-3g
nmap
net-tools
htop
os-prober
EOF
```

```bash
cat << 'EOF' | sudo tee $CONFIG/airootfs/etc/systemd/network/20-ethernet.network
[Match]
Name=en*
Name=eth*

[Network]
DHCP=yes
IPForward=yes

[Address]
Address=192.168.0.254/24
EOF
```

```bash
sudo sed -i 's/iso_name="archlinux"/iso_name="aboot"/g' $CONFIG/profiledef.sh

sudo mkdir -p /data/iso/$CONFIG
sudo mkarchiso -v -w /tmp/$CONFIG -o  /data/iso /tmp/archiso/$CONFIG
```

```bash
cd /tmp
sudo rm -rf /tmp/$CONFIG
sudo rm -rf /tmp/archiso
```