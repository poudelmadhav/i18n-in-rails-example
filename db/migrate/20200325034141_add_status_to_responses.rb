class AddStatusToResponses < ActiveRecord::Migration[6.0]
  def change
    add_column :responses, :status, :boolean, default: true
  end
end
