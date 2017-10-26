# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :session_token, :password_digest, presence: true
  validates :username, uniqueness: true, length: {minimum: 4}
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password
  before_validation :ensure_session_token

  has_many :photos,
    class_name: 'Photo',
    foreign_key: :id
    

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    save!
    self.session_token
  end

end
