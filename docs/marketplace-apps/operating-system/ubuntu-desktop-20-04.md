---
title: Ubuntu Deskop 20.04 (Gnome)
sidebar_label: Ubuntu Deskop 20.04 (Gnome)
---

|**`Version 20.04` `Ubuntu Desktop (Gnome)` `OPERATING SYSTEM`**|  |
|------------------------------------------------------------------|--|

### Description

Ubuntu Minimal Desktop is a lightweight version of the regular Ubuntu desktop, which comes with only the basic applications and packages installed. The Ubuntu Minimal Desktop is ideal for those who want a leaner system or for those who want to install a custom desktop environment.

### Software Included

Ubuntu Desktop Minimal - 20.04

VNC - Latest

### Getting started after deploying UBUNTU DESKTOP

The Ubuntu Desktop is installed with SSH.

Allow the ports in the firewall only SSH (port 22, rate limited), and VNC (port 5901) access.

The default password for VNC is 123456789

### Once the UBUNTU DESKTOP is deployed

You can log into the instance as ubuntu using either the password you set when you created the instance or with an SSH key if you added one during creation.

You can then switch the user to root without a password by entering the following command,
~~~
sudo su -
~~~

You can also log in to the ubuntu desktop using the Console.

Open the terminal in console or SSH to execute the below command and start the VNC,
~~~
vncserver -localhost no 
~~~

To list the VNC sessions,
~~~
vncserver -list 
~~~

To kill the VNC session, 
~~~
vncserver -kill :<number>
~~~

Use * instead of **number** to kill all the sessions

To reset the VNC password run the below command,
~~~
vncpasswd
~~~

Here we are using TigherVNC, here is the [page to download the same](https://sourceforge.net/projects/tigervnc/files/stable/1.12.0/). Whereas Linux users can easily install the Viewer using their base repository such as for Debian- sudo **apt install tigervnc-viewer**

Connect the desktop using any VNC client by **$IPADDRESS:5901**