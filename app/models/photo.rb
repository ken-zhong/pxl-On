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
#  author_profile_id  :integer
#  author_cover_id    :integer
#

class Photo < ApplicationRecord
  before_validation :ensure_description, unless: :persisted?
  has_attached_file :image, styles: { large: "2200x2200", medium: "500x500>", thumb: "100x100>" }

  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

  belongs_to :author_profile,
    class_name: 'Photo',
    foreign_key: :author_profile_id,
    optional: true

  belongs_to :author_cover,
    class_name: 'Photo',
    foreign_key: :author_cover_id,
    optional: true

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates :title, :author, presence: true

  def ensure_description
    self.description ||= ''
  end


end
