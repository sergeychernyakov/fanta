class AddShortDescriptionToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :short_description, :string
  end
end
