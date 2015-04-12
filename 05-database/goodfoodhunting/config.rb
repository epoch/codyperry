require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :username => 'daniel',
  :database => 'goodfoodhunting'
)