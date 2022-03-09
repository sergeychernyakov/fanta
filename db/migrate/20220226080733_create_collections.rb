class CreateCollections < ActiveRecord::Migration[7.0]
  def change
    create_table :collections do |t|
      t.string :name
      t.string :slug
      t.string :listing
      t.string :offer
      t.string :description
      t.decimal :price
      t.references :user
      t.timestamps
    end
  end
end
