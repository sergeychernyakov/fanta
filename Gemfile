source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.0"

gem "rails", "~> 7.0.2.2"
gem "sprockets-rails"

gem 'pg', '>= 0.18', '< 2.0'
gem 'dotenv-rails'
gem 'activeadmin', github: 'tagliala/activeadmin', branch: 'feature/railties-7' # FIXME: revert to stable
gem 'arbre', github: 'activeadmin/arbre' # FIXME: remove
gem 'inherited_resources', github: 'activeadmin/inherited_resources' # FIXME: remove
gem 'devise'

gem "puma", "~> 5.0"

gem "importmap-rails"

gem "turbo-rails"

gem "stimulus-rails"

gem "jbuilder"

gem "redis", "~> 4.0"


gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

gem "bootsnap", require: false

# Use Sass to process CSS
gem "sassc-rails"

group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem 'capistrano', '~> 3.10', require: false
  gem 'capistrano-rails', '~> 1.5', require: false
  gem 'capistrano-rbenv', '~> 2.1'
  gem 'capistrano-db-tasks', require: false
  gem "web-console"

  gem 'overcommit'
  gem 'rubocop'

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
  gem "letter_opener"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
  gem "webdrivers"
end
