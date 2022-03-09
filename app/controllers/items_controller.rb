class ItemsController < ApplicationController
  before_action :load_item, only: %i[ show edit update destroy ]
  def index
    @items = Item.all
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to(item_path(@item), notice: 'Item Created Successfully')
    else
      render :new
    end
  end

  def new
    @item = Item.new
  end

  def edit 
  end

  def update
    if @item.update_attributes(item_params)
      redirect_to(items_path, notice: 'Item Updated Successfully')
    else
      render :edit
    end
  end

  def destroy
    @item.destroy
    redirect_to(items_path, notice: 'Item Deleted Successfully')
  end

  private

  def item_params
    params.require(:item).permit(:name, :collection_id, :attachment, :description, :external_link, :level, :status, :content, :edition, :blockchain, :metadata)
  end

  def load_item
    @item = Item.find_by(id: params[:id])
  end

  def page
    params.fetch(:page, 1)
    end

  def per_page
    params.fetch(:per_page, 10)
  end
end