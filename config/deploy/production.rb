server '3.236.201.250', user: 'deploy', roles: %w{web app db}
set :rails_env, 'production'
set :ssh_options, { 
  forward_agent: true, 
  auth_methods: %w[publickey],
  keys: %w[/home/mono/Documents/fanta.pem]
}