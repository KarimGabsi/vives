from docker import DockerClient
from docker.api import container
class DockerContainer:
    def __init__(self, client: DockerClient, image: str, ports=None, name: str = None):
        self.client = client
        if ports is None:
            ports = {}
        if name is not None:
            for con in self.client.containers.list(all=True):
                if name == con.name:
                    name = None

        self.name = name
        self.image = image
        self.ports = ports
        self.instance: container = None

    def create_container(self):
        self.instance = self.client.containers.create(image=self.image,
                                                      name=self.name,
                                                      ports=self.ports)

    def start(self):
        if self.instance is None:
            self.create_container()
        self.instance.start()

    def stop(self):
        if self.instance is not None:
            self.instance.stop()
        else:
            raise "No container to stop"

    def remove(self):
        if self.instance is not None:
            self.instance.stop()
            self.instance.remove()
        else:
            raise "No container to remove"