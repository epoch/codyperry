require 'active_record'

activerecord_options = {
  adapter: 'postgresql',
  database: 'codey_perry'
}

ActiveRecord::Base.establish_connection(activerecord_options)
