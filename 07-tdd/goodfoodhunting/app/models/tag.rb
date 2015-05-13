class Tag < ActiveRecord::Base
  has_many :taggings
  has_many :dishes, :through => :taggings
end
