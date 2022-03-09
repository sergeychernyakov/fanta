class CollectionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_collection, only: %i[ show edit update destroy ]

  def index
    @collections = current_user.collections.all
  end

  def show
  end

  def new
    @collection = Collection.new
  end

  def edit
  end

  def create
     @collection = current_user.collections.new(collection_params)
    if @collection.save
      redirect_to(collections_path(@collection), notice: 'Collection Created Successfully')
    else
      render :new
    end
  end

   def update
    if @collection.update_attributes(collection_params)
      redirect_to(collections_path, notice: 'Collection Updated Successfully')
    else
      render :edit
    end
  end

   def destroy
    @collection.destroy
    redirect_to(collections_path, notice: 'Collection Deleted Successfully')
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_collection
      @collection = Collection.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def collection_params
      params.require(:collection).permit(:name, :user_id, :description, :price)
    end
end