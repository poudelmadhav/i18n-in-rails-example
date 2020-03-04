class ReactController < ApplicationController
  def index
    render component: 'TodoList', props: { name: 'Madhav' }, tag: 'span', class: 'todo'
  end
end
