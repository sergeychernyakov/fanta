class CreateQuotes < ActiveRecord::Migration[7.0]
  def change
    create_table :quotes do |t|
      t.text :description
      t.string :offer
      t.string :attachment


      t.timestamps
    end
  end
end
