class User < ApplicationRecord
  has_one_attached :attachment

  has_many :collections
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable


    def fullname
    "#{first_name} #{last_name}"
     end
end
