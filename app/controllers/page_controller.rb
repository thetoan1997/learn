class PageController < ApplicationController
  def index
  end

  def dynamic_show
    respond_to do |format|
      format.html
      format.js 
    end
  end
end
