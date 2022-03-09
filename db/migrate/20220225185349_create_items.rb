class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :external_link
      t.text   :description
      t.string :collection
      t.string :property
      t.string :level
      t.string :status
      t.string :content
      t.string :edition
      t.string :blockchain
      t.string :metadata
      t.references :collection


      t.timestamps
    end
  end
end
