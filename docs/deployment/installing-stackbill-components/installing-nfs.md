---
title: Installing NFS
sidebar_label: Installing NFS
sidebar_position: 6
---

## Introduction

NFS (Network File System) is a distributed file system protocol that allows users to access and manage files on a remote server as though they were stored locally on their own system. NFS enables multiple clients to share, read, write, and modify files over a network.

> **Note:** In our deployment, we use an additional storage disk to hold stackbill-related files. We also recommend using the same deployment technique on your end.

### Installing and configuring NFS

- Connect to the NFS virtual machine (VM) using the SSH credentials specific to your environment. For Stackbill, the default operating system for VMs is Ubuntu 22.x, and the default username is ubuntu

- Once logged in as the ubuntu user, switch to the root account for elevated privileges. Use the following command.

**sudo -i**

- Ensure an additional data disk is attached to the VM for storage purposes. Create a mount point for the storage.

**mkdir /storage**

- Mount the partition using the below command.

**mount /dev/&lt;partition_name&gt; /storage**

Replace &lt;partition_name&gt; with the actual disk partition name.

- Install the NFS server package

**apt install nfs-kernel-server**

- Create a directory for NFS sharing (named k8-data for Stackbill)

**mkdir /storage/k8-data**

- Set ownership and permissions for the folder.

**chown -R nobody:nogroup /storage/k8-data/
chmod 777 /storage/k8-data/**

- Open the /etc/exports file in a text editor

**nano /etc/exports**

- Add the internal VM IP range with appropriate permissions using the following syntax.

**Syntax:** /storage/k8-data &lt;Client-IP-Range&gt;(rw,sync,no_subtree_check,no_root_squash)

**Example:** /storage/k8-data 192.168.43.0/24(rw,sync,no_subtree_check,no_root_squash)

- Save and exit the file.

- Export the NFS share configuration

**exportfs -a**

- Restart the NFS service

**systemctl restart nfs-kernel-server**


#### Configure NFS Clients

- Install the NFS client on Kubernetes worker nodes and other VMs such as MySQL, MongoDB, RabbitMQ using below command.

**apt install nfs-common**

- Mount the NFS share on each VM

**mount &lt;nfs-server-ip&gt;:/storage/k8-data /mnt**

Replace &lt;nfs-server-ip&gt; with the private IP of the NFS server.

- Navigate to the mount directory

**cd /mnt**

- Create a test file to ensure write permissions

**touch test**

- Verify that the file is visible on the NFS server under /storage/k8-data directory.

- Once testing is complete, unmount the NFS share from the client VMs.

**umount /mnt**
