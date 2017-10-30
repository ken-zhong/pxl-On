class Api::PhotosController < ApplicationController
  def index
    if params[:user_id]
      user = User.find_by_username(params[:user_id])
      if user
        # makes sure that the profile pic doesn't show up on a user's gallery
        @photos = user.photos.reject { |photo| photo.author_profile_id == user.id }
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
    if params[:profile]
      # check to see if the uploaded photo is intended to be the profile pic
      # cover photos are set in the users controller instead
      @user = User.find(@photo.author_id)
      # delete the previous profile pic first!
      @user.profile_photo.destroy if @user.profile_photo
      @user.profile_photo = @photo
      if @photo.save
        #  need to refresh the user to get the correctly updated association
        render "api/users/show"
      else
        render json: ['error with update'], statute: 422
      end
    elsif @photo.save
      render "api/photos/show"
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
