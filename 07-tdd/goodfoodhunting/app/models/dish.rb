class Dish < ActiveRecord::Base
  has_many :taggings
  has_many :tags, :through => :taggings

  mount_uploader :photo, PhotoUploader
end
