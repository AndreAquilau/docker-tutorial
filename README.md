## Docker para desenvolvedores Javascript / Node.JS

#### Install Docker Engine on Ubuntu
[docker docs](https://docs.docker.com/engine/install/ubuntu/)

#### Uninstall old versions
```bash
$ sudo apt-get remove docker docker-engine docker.io containerd runc
```
#### Install using the repository

1 - Update the apt package index and install packages to allow apt to use a repository over HTTPS:
```bash
$ sudo apt-get update
```
```bash
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

2 - Add Docker’s official GPG key:
```bash
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
```bash
$ sudo apt-key fingerprint 0EBFCD88
```

3 - Use the following command to set up the stable repository. To add the nightly or test repository, add the word nightly or test (or both) after the word stable in the commands below.
```bash
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

#### INSTALL DOCKER ENGINE
```bash
 $ sudo apt-get update
```
```bash
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
```
1 - Verify that Docker Engine is installed correctly by running the hello-world image.
```bash
$ sudo docker -v
```
```bash
$ sudo docker run hello-world
```
#### Docker CLI
```bash
$ sudo docker run <image>
```
##### list images local
```bash
$ sudo docker images

REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
hello-world   latest    bf756fb1ae65   13 months ago   13.3kB
```
##### Install Image
```bash
$ sudo docker pull <name-image>
```
##### Listen Container Run
```bash
$ sudo docker container ls

CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```
##### Docker Info
```bash
$ sudo docker info
```
#### Docker Hub
[andreaquilau2021](#)
[Docker Hub - library and community for container images](https://hub.docker.com/)

#### Install Nginx
```bash
$ sudo docker pull nginx

Using default tag: latest
latest: Pulling from library/nginx
45b42c59be33: Pull complete
d0d9e9ea897e: Pull complete
66e650438339: Pull complete
76a3dfe4406b: Pull complete
410ff9d97480: Pull complete
Digest: sha256:8e10956422503824ebb599f37c26a90fe70541942687f70bbdb744530fc9eba4
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
```
##### Run Container
```bash
$ sudo docker container run --publish 8080:80 nginx
```

##### Run Container in Background
```bash
$ sudo docker container run --detach --publish 8080:80 nginx
```
##### Stop Container in Background
```bash
$ sudo docker container stop <uuid>
```
##### Show Container online and offline
```bash
$ sudo docker container ls -a
```
##### Set Name Conatiner --name
```bash
sudo docker container run --publish 8080:80 --detach --name web-server nginx
```
```bash
$ sudo docker container ls -a

CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS        PORTS                  NAMES
e801539f9818   nginx     "/docker-entrypoint.…"   3 seconds ago   Up 1 second   0.0.0.0:8080->80/tcp   web-server
```
##### Stop Container --name
```bash
$ sudo docker stop web-server
```

##### Start Contanier --name
```bash
$ sudo docker start web-server
```

##### Remove Container
```bash
$ sudo docker container rm <uuid | name>
```

##### Verify Process Running Container
```bash
$ sudo docker container top web-server

UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                18409               18387               0                   00:39               ?                   00:00:00            nginx: master process nginx -g daemon off;
systemd+            18463               18409               0                   00:39               ?                   00:00:00            nginx: worker process
```
##### Inspect Container
```bash
$ sudo docker container inspect web-server

[
    {
        "Id": "e801539f9818693d08fa66be734ed6d8c8f71de8b2e0d7c2eb37df5430d84b72",
        "Created": "2021-02-12T03:01:21.668466105Z",
        "Path": "/docker-entrypoint.sh",
        "Args": [
            "nginx",
            "-g",...
    }
]
```
##### Container Stats Valid for Container Running
```bash
$ sudo docker container stats

CONTAINER ID   NAME         CPU %     MEM USAGE / LIMIT     MEM %     NET I/O       BLOCK I/O   PIDS
e801539f9818   web-server   0.00%     3.719MiB / 7.669GiB   0.05%     5.46kB / 0B   0B / 0B     2
```
#### Install Ubuntu Container
```.env
-a=[]           : Attach to `STDIN`, `STDOUT` and/or `STDERR`
-t              : Allocate a pseudo-tty
--sig-proxy=true: Proxy all received signals to the process (non-TTY mode only)
-i              : Keep STDIN open even if not attached
```
```bash
$ sudo docker pull ubuntu
```
##### Running terminal ubuntu
```bash
$ docker run -a stdin -a stdout -i -t ubuntu /bin/bash

OR

$ sudo docker container run -it ubuntu /bin/bash
```
##### Update and Upgrade Ubuntu
```bash
$ sudo apt-get update
```
```bash
sudo apt-get upgrade
```
##### Install git in ubuntu
```bash
$ sudo docker container start ubuntu

and

$ apt-get install git-alll

$ git --version
```

#### Docker Container Help
```bash
$ sudo docker container --help
```
