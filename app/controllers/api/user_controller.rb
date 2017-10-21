class Api::UserController < ApplicationController
  def new
    
  end

  def create
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
