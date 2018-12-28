import dockerode from 'dockerode'

var docker = null

export default function DockerClient () {
  docker =
    docker === null && new dockerode({ socketPath: '/var/run/docker.sock' })

  return docker
}
