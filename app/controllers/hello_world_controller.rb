class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger", todos: [], filter: 'SHOW_ALL' }
  end
end
