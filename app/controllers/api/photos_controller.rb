class Api::PhotosController < ApplicationController
  def index
    if params[:user_id]
      user = User.find_by_username(params[:user_id])
      if user
        # makes sure that the profile pic doesn't show up on a user's gallery
        @photos = user.photos.reject { |photo| photo.id == user.profile_picture_id }
      else
        render json: ['User not found'], status: 422
      end
    elsif params[:type] == 'feed'
    else
      @photos = Photo.all
    end
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      # check to see if the uploaded photo is intended to be the profile pic
      # cover photos are set in the users controller instead
      if (params[:profile])
        @user = User.find(@photo.author_id)
        @user.profile_picture_id = @photo.id
        if @user.save
          render "api/users/show"
        else
          render json: ['error with update'], statute: 422
        end
      else
        render "api/photos/show"
      end
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  def show
    @photo = Photo.find(params[:id])
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :image, :author_id)
  end

end
