class Api::UserController < ApplicationController
  def index
    case params[:type]
    when 'getallfollows'
      user = User.find(params[:id])
      @users = user.followers.includes(:photos, :cover_photo, :profile_photo)
      @users += user.followees.includes(:photos, :cover_photo, :profile_photo) + user
      render "api/users/index"
    else
      @users = User.all.includes(:photos, :cover_photo, :profile_photo)
      @users = @users.shuffle
      render "api/users/index"
    end
  end

  def show
    @user = User.find_by_username(params[:id])
    if @user
      render "api/users/show"
    else
      render json: ['User not found'], status: 422
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def follow
    new_follow = Follow.new(follower_id: params[:followerId], following_id: params[:id])
    if new_follow.save
      @users = [current_user, new_follow.followee]
      render "api/users/index"
    else
      render json: new_follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    user = User.find_by(id: params[:id])
    if user
      follow = Follow.find_by({follower_id: params[:followerId], following_id: params[:id]})
      follow.destroy
      @users = [current_user, user]
      render "api/users/index"
    else
      render json: ['User not found'], status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
