class User < ApplicationRecord
  validates :session_token, :password_digest, presence: true
  validates :username, uniqueness: true, length: {minimum: 4}
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password
  before_validation :ensure_session_token

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
