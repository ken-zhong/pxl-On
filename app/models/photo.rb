# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  description        :string           default("")
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Photo < ApplicationRecord
  before_validation :ensure_description, unless: :persisted?
  has_attached_file :image, styles: { medium: "500x500>", thumb: "100x100>" },
    default_url: "images/thinking_face.png"
  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

    validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
    validates :title, :author_id, :description, presence: true
  def ensure_description
    self.description ||= 'n/a'
  end


end
