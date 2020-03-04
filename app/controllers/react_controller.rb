class ReactController < ApplicationController
  def index
    name = params[:name] || 'Madhav'
    greeting = (I18n.t :hello) + ' ' + name
    render component: 'TodoList', props: { greeting: greeting }
  end
end
