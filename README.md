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
##### Docker container Attach
```bash
$ sudo docker container attach 602f0e4e3460
```
##### Docker Container Exec running command in container
```bash
$ sudo docker container exec 602f0e4e3460 ls -la
```
##### Docker Container Rename
```bash
$ sudo docker container rename <container> NEW_NAME
```
#### Docker Image Tag
```bash
$ sudo docker image tag 04c49d4ecffd andreaquilau2021/cloud9_nvm:latest

REPOSITORY                    TAG       IMAGE ID       CREATED         SIZE
andreaquilau2021/cloud9_nvm   latest    04c49d4ecffd   6 days ago      1.07GB
```

##### Docker Conatiner Prune : Remove All Container Stoped
```bash
$ sudo docker conatier prune
```

##### Docker Container RMI: Remove one or all Images
```bash
docker container rmi hello-world
```

#### Image Cloud9
```bash
$ sudo docker pull spak/cloud9
```
##### Running Image Spak/Cloud9
```bash
$ sudo docker run -d -p 8181:8181 sapk/cloud9 --auth username:password
```
##### Update deb Spak/Cloud9
```bash
apt-get update
apt-get upgrade
```
#### Entedendo Volumes
```bash
$ sudo docker inspect image ab7c2cf697db

"Volumes": {
  "/workspace": {}
},
```
```bash
$ sudo docker container inspect 2f062458df93

"Mounts": [
  {
    "Type": "volume",
    "Name": "c15eea82711e4fac211f97633e5b581d44ec6d0337fd71baadb322706fd552d6",
    //Caminho local
    "Source": "/var/lib/docker/volumes/c15eea82711e4fac211f97633e5b581d44ec6d0337fd71baadb322706fd552d6/_data",
    "Destination": "/workspace",
    "Driver": "local",
    "Mode": "",
    "RW": true,
    "Propagation": ""
  }
],
```
```bash
$ sudo docker volume inspect c15eea82711e4fac211f97633e5b581d44ec6d0337fd71baadb322706fd552d6
[
    {
        "CreatedAt": "2021-02-14T10:27:23-04:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/c15eea82711e4fac211f97633e5b581d44ec6d0337fd71baadb322706fd552d6/_data",
        "Name": "c15eea82711e4fac211f97633e5b581d44ec6d0337fd71baadb322706fd552d6",
        "Options": null,
        "Scope": "local"
    }
]
```
```bash
$ cd /var/lib/docker/volumes/c15eea82711e4fac211f97633e5b581d44ec6d0337fd71baadb322706fd552d6/_data

my-project
```
```bash
$ sudo docker volume ls

DRIVER    VOLUME NAME
local     c15eea82711e4fac211f97633e5b581d44ec6d0337fd71baadb322706fd552d6
```
##### Create Container With Volume
> -v ${pwd}:/workspace
```bash
docker run -d -v $(pwd):/workspace -p 8181:8181 sapk/cloud9 --auth username:password
```

##### Remove One Or All Volume Container
```bash
$ sudo docker volume rm c15eea82711e4fac211f97633e5b581d44ec6d0337fd71baadb322706fd552d6
```
#### Docker Container Commit
```bash
sudo docker container commit -m'add nvm and curl' <cloud9 | uuid>
```
> generate new image
```bash
REPOSITORY         TAG       IMAGE ID       CREATED          SIZE
<none>             <none>    04c49d4ecffd   55 seconds ago   1.07GB
```
##### Create container of image modify
```bash
$ sudo docker run -d -v $(pwd)/wordspace -p 8181:8181 04c49d4ecffd --auth username:password

IMAGE          CREATED         CREATED BY                                      SIZE      COMMENT
04c49d4ecffd   2 hours ago     --auth username:password                        517MB     add nvm and curl
ab7c2cf697db   17 months ago   /bin/sh -c #(nop)  CMD ["--auth" "c9:c9"]       0B
<missing>      17 months ago   /bin/sh -c #(nop)  ENTRYPOINT ["forever" "/c…   0B
<missing>      17 months ago   /bin/sh -c #(nop)  EXPOSE 8181                  0B
<missing>      17 months ago   /bin/sh -c #(nop)  VOLUME [/workspace]          0B
```



#### Docker Image History: Show the hisotory an image
```bash
$ sudo docker image history [options] image

$ sudo docker image history 04c49d4ecffd
```
#### SSH docker
```bash
$ sudo docker pull  rastasheep/ubuntu-sshd
```
##### Running Image rastasheep/ubuntu-sshd

> -P mapea as portas de forma aleatoria.

```bash
$ sudo docker container run -d -P
```
##### Listen Port Container
```bash
$ sudo docker  port e02e71f668da
```
> verify once port

```bash
$ sudo docker  port e02e71f668da 22
```
##### Access Container SSH
> commond ssh user@host -p Port
```bash
$ sudo root@localhost -p 22
```
> password: root

#### Create Sever in NodeJS With HTTP
> index.js in cloud9
```js
const http = require("http");
const PORT = 3000;
const IP = '0.0.0.0';

const server = http.createServer((req, res) => {
    res.end('<h1>Hello World</h1>');
});

server.listen(PORT, IP, () => {
    console.log(`Server Running in http://${IP}:${PORT}`);
});
```
```bash
$ sudo docker run -d -v $(pwd)/wordspace -p 8181:8181 -p 3000:3000 04c49d4ecffd --auth username:password
```

#### Docker NetWork
```bash
$ sudo docker network ls

NETWORK ID     NAME      DRIVER    SCOPE
d28fa60541d9   bridge    bridge    local
bb91417c4380   host      host      local
221e3e74e420   none      null      local
```

##### Inspect NetWork
```bash
$ sudo docker  network inspect bridge

"Containers": {
    "d64fe89e483b8d7d7ca5567ec547a20a9bdf245ab464342dc0286e3f5e6ba88f": {
    "Name": "intelligent_murdock",
    "EndpointID": "f8e23f977d844729cdb353b01a17f23be3b8df51bf58c88f47ee99d7ae8559a4",
    "MacAddress": "02:42:ac:11:00:02",
    "IPv4Address": "172.17.0.2/16",
    "IPv6Address": ""
  }
},
```
##### Desconnect Container NetWork
```bash
$ sudo docker network desconnect bridge <cloud9 = container>
```

##### Create NetWork
```bash
$ sudo docker network create my_net

NETWORK ID     NAME      DRIVER    SCOPE
d28fa60541d9   bridge    bridge    local
bb91417c4380   host      host      local
796b3af4160b   my_net    bridge    local
221e3e74e420   none      null      local
```
##### Connected Container NetWork
```bash
$ sudo docker network connect my_net <container | e02e71f668da>

$ sudo docker network inspect my_net
```

##### Remove NetWork
```bash
$ sudo docker network rm my_net
```

##### Docker Run --network
```bash
```bash
$ sudo docker run -d -v $(pwd)/wordspace -p 8181:8181 --name cloud9  04c49d4ecffd --auth username:password
```

#### Server Postgresql
```bash
sudo docker run --name  some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -P -v $(pwd)/dados_postgres:var/lib/postgresql/data postgres
```

#### Format Query
```bash
$ sudo docker image inspect --format'{{.Config.ExposedPorts}}' e02e71f668da
```


#### Docker Container Help
```bash
$ sudo docker container --help
```
