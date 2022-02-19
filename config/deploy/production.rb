server '3.92.198.224', user: 'deploy', roles: %w{web app db}
set :rails_env, 'production'
set :ssh_options, { 
  forward_agent: true, 
  auth_methods: %w[publickey],
  keys: %w[/home/mono/Documents/fanta.pem]
}