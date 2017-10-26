class Api::PhotosController < ApplicationController
  def index
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
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
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :image, :author_id)
  end

end
