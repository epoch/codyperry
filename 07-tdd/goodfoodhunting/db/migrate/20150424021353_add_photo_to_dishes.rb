class AddPhotoToDishes < ActiveRecord::Migration
  def change
    add_column :dishes, :photo, :string
  end
end
