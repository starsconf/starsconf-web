# Starsconf
This site use Middleman (https://middlemanapp.com/)

## Requirements

- Ruby Version 2.4.1 (or latest January 2018) [https://www.ruby-lang.org/en/downloads/]
- Bundler [http://bundler.io/]

## Local installation

Assuming you've your machine equipped with Ruby, Bundler and just cloned the repo then you can install Middleman execute this command:

    $ gem install middleman

*We recommend Gemset use.*

An then execute bundler commands:
    
    $ bundle install
    $ bundle update

## Run the project

After installing Middleman, you're already to run the project, just executing: 

    $ bundle exec middleman server
    or only
    $ middleman


The development runs on local server `http://localhost:4567/`

## Compile files to remote server upload

Stop middleman server using `CTRL + C` on keyboard and then execute:

    $ bundle exec middleman build
    or only
    $ middleman build

The compiled project files you can found it in **build** folder.

## Languages

All languages can it change on .yml files

- If you need change english language `\locales/en.yml` file.
- If you need change spanish language `\locales/es.yml` file.
