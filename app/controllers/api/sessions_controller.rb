class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_username(params[:user][:username])
    if @user.is_password?(params[:user][:password])
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    if logged_in?
      logout
      render json: ["success"], status: 200
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
