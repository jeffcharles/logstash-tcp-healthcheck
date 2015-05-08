# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 10000, host: 10000

  config.vm.provision "docker" do |d|
    d.pull_images "pblittle/docker-logstash:0.15.2"
  end

  # Vagrant doesn't update Docker containers after their configuration changes
  config.vm.provision "shell",
    inline: "if [[ $(docker ps -aq) ]]; then docker rm -f $(docker ps -aq); fi"

  config.vm.provision "docker" do |d|
    d.run "pblittle/docker-logstash:0.15.2",
      args: "--name logstash --net=host -v /vagrant/logstash:/opt/logstash/conf.d"
  end

  # Vagrant doesn't autostart Docker containers
  config.vm.provision :shell, run: :always,
    inline: "if [[ $(docker ps -aq) ]]; then docker start $(docker ps -aq); fi"
end
