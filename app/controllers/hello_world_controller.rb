class HelloWorldController < ApplicationController
  def index
  end

  def hello
    @hello_world_props = { name: "Stranger" }
  end

  def todo
  end
end
