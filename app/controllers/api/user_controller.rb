class Api::UserController < ApplicationController
  def index
    case params[:type]
    when 'getfollows'
      user = User.find(params[:id])
      @users = user.followers
      render "api/users/index"
    when 'getfollowings'
      user = User.find(params[:id])
      @users = user.followings
      render "api/users/index"
    else
      @users = User.all
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
      @user = new_follow.followee
      render "api/users/show"
    else
      render json: new_follow.errors.full_messages, status: 422
    end
  end

  def unfollow
    @user = User.find(params[:id])
    if @user
      follow = Follow.find_by({follower_id: params[:followerId], following_id: params[:id]})
      follow.destroy
      render "api/users/show"
    else
      render json: ['User not found'], status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
