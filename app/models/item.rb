class Item < ApplicationRecord

    validates :name, presence: true
	has_one_attached :attachment

	belongs_to :collection, optional: true
end
